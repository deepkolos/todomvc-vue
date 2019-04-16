(function(){

  var handler = function() {
    return (function(){

var manifestJson = {"package":"com.application.demo","name":"todomvc","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"trace","dsl":{"name":"vue"}},"router":{"entry":"index","pages":{"index":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true}}
var createAppHandler = function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.vue?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hap-toolkit/packager/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@hap-toolkit/packager/lib/loader/manifest-loader.js?!./node_modules/@hap-toolkit/dsl-vue/lib/validator-loader.js!./src/app.vue?vue&type=script&lang=js&uxType=app":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
!*** ./node_modules/@hap-toolkit/packager/lib/loader/module-loader.js!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@hap-toolkit/packager/lib/loader/manifest-loader.js??ref--1-2!./node_modules/@hap-toolkit/dsl-vue/lib/validator-loader.js!./src/app.vue?vue&type=script&lang=js&uxType=app ***!
\**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
value: true
});
exports["default"] = void 0;

/**
* 应用级别的配置，供所有页面公用
*/
var _default = {
onCreate: function onCreate() {
console.log("app created");
},
onDestroy: function onDestroy() {
console.log("app destroyed");
}
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
!*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
\********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
scriptExports,
render,
staticRenderFns,
functionalTemplate,
injectStyles,
scopeId,
moduleIdentifier, /* server only */
shadowMode /* vue-cli only */
) {
// Vue.extend constructor export interop
var options = typeof scriptExports === 'function'
? scriptExports.options
: scriptExports

// render functions
if (render) {
options.render = render
options.staticRenderFns = staticRenderFns
options._compiled = true
}

// functional template
if (functionalTemplate) {
options.functional = true
}

// scopedId
if (scopeId) {
options._scopeId = 'data-v-' + scopeId
}

var hook
if (moduleIdentifier) { // server build
hook = function (context) {
  // 2.3 injection
  context =
    context || // cached call
    (this.$vnode && this.$vnode.ssrContext) || // stateful
    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
  // 2.2 with runInNewContext: true
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  // inject component styles
  if (injectStyles) {
    injectStyles.call(this, context)
  }
  // register component module identifier for async chunk inferrence
  if (context && context._registeredComponents) {
    context._registeredComponents.add(moduleIdentifier)
  }
}
// used by ssr in case component is cached and beforeCreate
// never gets called
options._ssrRegister = hook
} else if (injectStyles) {
hook = shadowMode
  ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
  : injectStyles
}

if (hook) {
if (options.functional) {
  // for template-only hot-reload because in that case the render fn doesn't
  // go through the normalizer
  options._injectStyles = hook
  // register for functioal component in vue file
  var originalRender = options.render
  options.render = function renderWithStyleInjection (h, context) {
    hook.call(context)
    return originalRender(h, context)
  }
} else {
  // inject component registration as beforeCreate hook
  var existing = options.beforeCreate
  options.beforeCreate = existing
    ? [].concat(existing, hook)
    : [hook]
}
}

return {
exports: scriptExports,
options: options
}
}


/***/ }),

/***/ "./src/app.vue?uxType=app":
/*!********************************!*\
!*** ./src/app.vue?uxType=app ***!
\********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js&uxType=app */ "./src/app.vue?vue&type=script&lang=js&uxType=app");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__["default"],
render,
staticRenderFns,
false,
null,
null,
null

)

component.options.__file = "src/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/app.vue?vue&type=script&lang=js&uxType=app":
/*!********************************************************!*\
!*** ./src/app.vue?vue&type=script&lang=js&uxType=app ***!
\********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_hap_toolkit_packager_lib_loader_module_loader_js_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_hap_toolkit_packager_lib_loader_manifest_loader_js_ref_1_2_node_modules_hap_toolkit_dsl_vue_lib_validator_loader_js_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@hap-toolkit/packager/lib/loader/module-loader.js!../node_modules/babel-loader/lib??ref--3-1!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/@hap-toolkit/packager/lib/loader/manifest-loader.js??ref--1-2!../node_modules/@hap-toolkit/dsl-vue/lib/validator-loader.js!./app.vue?vue&type=script&lang=js&uxType=app */ "./node_modules/@hap-toolkit/packager/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@hap-toolkit/packager/lib/loader/manifest-loader.js?!./node_modules/@hap-toolkit/dsl-vue/lib/validator-loader.js!./src/app.vue?vue&type=script&lang=js&uxType=app");
/* harmony import */ var _node_modules_hap_toolkit_packager_lib_loader_module_loader_js_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_hap_toolkit_packager_lib_loader_manifest_loader_js_ref_1_2_node_modules_hap_toolkit_dsl_vue_lib_validator_loader_js_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_hap_toolkit_packager_lib_loader_module_loader_js_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_hap_toolkit_packager_lib_loader_manifest_loader_js_ref_1_2_node_modules_hap_toolkit_dsl_vue_lib_validator_loader_js_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_hap_toolkit_packager_lib_loader_module_loader_js_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_hap_toolkit_packager_lib_loader_manifest_loader_js_ref_1_2_node_modules_hap_toolkit_dsl_vue_lib_validator_loader_js_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_hap_toolkit_packager_lib_loader_module_loader_js_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_hap_toolkit_packager_lib_loader_manifest_loader_js_ref_1_2_node_modules_hap_toolkit_dsl_vue_lib_validator_loader_js_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony default export */ __webpack_exports__["default"] = (_node_modules_hap_toolkit_packager_lib_loader_module_loader_js_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_hap_toolkit_packager_lib_loader_manifest_loader_js_ref_1_2_node_modules_hap_toolkit_dsl_vue_lib_validator_loader_js_app_vue_vue_type_script_lang_js_uxType_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

/******/ });
};
if (typeof window === "undefined") {
return createAppHandler();
}
else {
console.log('injected');
window.createAppHandler = createAppHandler
// H5注入manifest以获取features
global.manifest = manifestJson;
}
})();
  };
  if (typeof window === "undefined") {
    let options = handler();
    options.default['manifest'] = {"package":"com.application.demo","name":"todomvc","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"trace","dsl":{"name":"vue"}},"router":{"entry":"index","pages":{"index":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true}}
    return options
  } else {
    handler();
  }
})();
//# sourceMappingURL=app.js.map
