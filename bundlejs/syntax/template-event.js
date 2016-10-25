/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(344)
	var __weex_style__ = __webpack_require__(345)
	var __weex_script__ = __webpack_require__(346)

	__weex_define__('@weex-component/40a248d5d833060161447365b18603fa', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/40a248d5d833060161447365b18603fa',undefined,undefined)

/***/ },

/***/ 344:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": function () {return 'Hello ' + (this.name)}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "update"
	      },
	      "attr": {
	        "value": "Update 1"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "update"
	      },
	      "attr": {
	        "value": "Update 1"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": function ($event) {this.update($event)}
	      },
	      "attr": {
	        "value": "Update 1"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": function ($event) {this.setName(this.temp,$event)}
	      },
	      "attr": {
	        "value": "Update 2"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": function ($event) {this.setName('John',$event)}
	      },
	      "attr": {
	        "value": "Update 3"
	      }
	    }
	  ]
	}

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "fontSize": 48
	  },
	  "subtitle": {
	    "fontSize": 36
	  },
	  "btn": {
	    "fontSize": 36,
	    "textAlign": "center",
	    "color": "#FFFFFF",
	    "backgroundColor": "#808080",
	    "padding": 20,
	    "borderRadius": 5
	  }
	}

/***/ },

/***/ 346:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    name: 'Steve',
	    temp: 'Mike'
	  }},
	  methods: {
	    update: function update(e) {
	      this.setName('David');
	    },
	    setName: function setName(value) {
	      this.name = value;
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });