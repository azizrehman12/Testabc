import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/react-icons/lib/iconContext.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var DefaultContext = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
};
var IconContext = import_react.createContext && /*#__PURE__*/ import_react.createContext(DefaultContext);
//#endregion
//#region node_modules/react-icons/lib/iconBase.mjs
var _excluded = [
	"attr",
	"size",
	"title"
];
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
	return tree && tree.map((node, i) => /*#__PURE__*/ import_react.createElement(node.tag, _objectSpread({ key: i }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
	return (props) => /*#__PURE__*/ import_react.createElement(IconBase, _extends({ attr: _objectSpread({}, data.attr) }, props), Tree2Element(data.child));
}
function IconBase(props) {
	var elem = (conf) => {
		var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
		var computedSize = size || conf.size || "1em";
		var className;
		if (conf.className) className = conf.className;
		if (props.className) className = (className ? className + " " : "") + props.className;
		return /*#__PURE__*/ import_react.createElement("svg", _extends({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, conf.attr, attr, svgProps, {
			className,
			style: _objectSpread(_objectSpread({ color: props.color || conf.color }, conf.style), props.style),
			height: computedSize,
			width: computedSize,
			xmlns: "http://www.w3.org/2000/svg"
		}), title && /*#__PURE__*/ import_react.createElement("title", null, title), props.children);
	};
	return IconContext !== void 0 ? /*#__PURE__*/ import_react.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
//#endregion
//#region node_modules/react-icons/hi2/index.mjs
function HiXMark(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiSpeakerXMark(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" },
			"child": []
		}]
	})(props);
}
function HiSpeakerWave(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" },
			"child": []
		}, {
			"tag": "path",
			"attr": { "d": "M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" },
			"child": []
		}]
	})(props);
}
function HiQueueList(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" },
			"child": []
		}]
	})(props);
}
function HiPlay(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiPause(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiLockOpen(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" },
			"child": []
		}]
	})(props);
}
function HiLockClosed(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiHeart(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" },
			"child": []
		}]
	})(props);
}
function HiForward(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" },
			"child": []
		}]
	})(props);
}
function HiBackward(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" },
			"child": []
		}]
	})(props);
}
function HiOutlineShare(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineHeart(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineArrowDownTray(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
			},
			"child": []
		}]
	})(props);
}
//#endregion
export { HiLockOpen as a, HiOutlineShare as c, HiQueueList as d, HiSpeakerWave as f, HiLockClosed as i, HiPause as l, HiXMark as m, HiForward as n, HiOutlineArrowDownTray as o, HiSpeakerXMark as p, HiHeart as r, HiOutlineHeart as s, HiBackward as t, HiPlay as u };
