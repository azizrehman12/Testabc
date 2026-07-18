export type MoonPhase = "New Moon" | "Waxing Crescent" | "First Quarter" | "Waxing Gibbous" | "Full Moon" | "Waning Gibbous" | "Last Quarter" | "Waning Crescent";

export interface MoonData {
  phaseName: MoonPhase;
  phaseValue: number; // 0 to 1
  illumination: number; // 0 to 1
}

export function getMoonPhase(date: Date): MoonData {
  // Approximate calculation
  const lp = 2551443; 
  const now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 35, 0);						
  const new_moon = new Date(1970, 0, 7, 20, 35, 0);
  const phase = ((now.getTime() - new_moon.getTime()) / 1000) % lp;
  const phaseValue = phase / lp; // 0 to 1

  let phaseName: MoonPhase;
  if (phaseValue < 0.03 || phaseValue > 0.97) phaseName = "New Moon";
  else if (phaseValue < 0.22) phaseName = "Waxing Crescent";
  else if (phaseValue < 0.28) phaseName = "First Quarter";
  else if (phaseValue < 0.47) phaseName = "Waxing Gibbous";
  else if (phaseValue < 0.53) phaseName = "Full Moon";
  else if (phaseValue < 0.72) phaseName = "Waning Gibbous";
  else if (phaseValue < 0.78) phaseName = "Last Quarter";
  else phaseName = "Waning Crescent";

  // illumination is 0 (new) to 1 (full) to 0 (new)
  const illumination = 0.5 * (1 - Math.cos(2 * Math.PI * phaseValue));

  return { phaseName, phaseValue, illumination };
}
