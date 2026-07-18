import { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import { GLOBE_LOCATIONS } from "@/constants/birthday";
import { SectionHeading } from "./SectionHeading";

export function DistanceMap() {
  const globeEl = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    
    // Slight delay to ensure globe ref is available
    const timeout = setTimeout(() => {
      if (globeEl.current) {
        globeEl.current.pointOfView({ lat: 29, lng: 70, altitude: 1.2 }, 2000);
      }
    }, 1000);

    return () => {
      window.removeEventListener("resize", updateSize);
      clearTimeout(timeout);
    };
  }, []);

  const arcsData = [
    {
      startLat: GLOBE_LOCATIONS.start.lat,
      startLng: GLOBE_LOCATIONS.start.lng,
      endLat: GLOBE_LOCATIONS.end.lat,
      endLng: GLOBE_LOCATIONS.end.lng,
      color: ["#f43f5e", "#fda4af"],
    },
  ];

  const labelsData = [
    { lat: GLOBE_LOCATIONS.start.lat, lng: GLOBE_LOCATIONS.start.lng, text: GLOBE_LOCATIONS.start.name },
    { lat: GLOBE_LOCATIONS.end.lat, lng: GLOBE_LOCATIONS.end.lng, text: GLOBE_LOCATIONS.end.name },
  ];

  return (
    <section className="relative z-10 px-6 py-24">
      <SectionHeading eyebrow="Distance" title="Across the miles" subtitle="Distance means so little when someone means so much." />

      <div 
        ref={containerRef}
        className="mx-auto mt-16 flex h-[400px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-rose-500/10 md:h-[500px]"
      >
        {dimensions.width > 0 && (
          <Globe
            ref={globeEl}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            arcsData={arcsData}
            arcColor="color"
            arcDashLength={0.4}
            arcDashGap={0.2}
            arcDashAnimateTime={2000}
            labelsData={labelsData}
            labelLat={(d: any) => d.lat}
            labelLng={(d: any) => d.lng}
            labelText={(d: any) => d.text}
            labelSize={1.5}
            labelDotRadius={0.5}
            labelColor={() => "rgba(255, 164, 175, 1)"}
            labelResolution={2}
          />
        )}
      </div>
    </section>
  );
}
