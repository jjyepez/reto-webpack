/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _funciones = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.write('.');

var $h1 = document.createElement('h1');
$h1.textContent = "Top 10 Cryptos";
document.body.append($h1);

var hoy = new Date();
var fecha = 'Al ' + hoy.getDate() + '/' + hoy.getMonth() + '/' + hoy.getFullYear();
var $h2 = document.createElement('h2');
$h2.textContent = fecha;
document.body.append($h2);

var inicializar = function inicializar() {
	var $contenedor = document.createElement('div');
	$contenedor.classList.add('contenedor');
	(0, _funciones.renderToDOM)($contenedor);

	_data2.default.forEach(function (el) {
		console.log(el);
		var $card = document.createElement('div');
		$card.classList.add('card');
		(0, _funciones.renderToDOM)($card, $contenedor);
	});
};
inicializar();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [{"id":"bitcoin","name":"Bitcoin","symbol":"BTC","rank":"1","price_usd":"14421.7","price_btc":"1.0","24h_volume_usd":"13294400000.0","market_cap_usd":"241205629358","available_supply":"16725187.0","total_supply":"16725187.0","max_supply":"21000000.0","percent_change_1h":"-0.21","percent_change_24h":"16.66","percent_change_7d":"39.15","last_updated":"1512616154"},{"id":"ethereum","name":"Ethereum","symbol":"ETH","rank":"2","price_usd":"436.879","price_btc":"0.0315314","24h_volume_usd":"2054670000.0","market_cap_usd":"42019531989.0","available_supply":"96181167.0","total_supply":"96181167.0","max_supply":null,"percent_change_1h":"1.38","percent_change_24h":"-4.02","percent_change_7d":"-2.84","last_updated":"1512616164"},{"id":"bitcoin-cash","name":"Bitcoin Cash","symbol":"BCH","rank":"3","price_usd":"1394.28","price_btc":"0.100631","24h_volume_usd":"1167770000.0","market_cap_usd":"23482446332.0","available_supply":"16841988.0","total_supply":"16841988.0","max_supply":"21000000.0","percent_change_1h":"-1.59","percent_change_24h":"-7.02","percent_change_7d":"-1.51","last_updated":"1512616175"},{"id":"iota","name":"IOTA","symbol":"MIOTA","rank":"4","price_usd":"4.12206","price_btc":"0.00029751","24h_volume_usd":"1757470000.0","market_cap_usd":"11457390598.0","available_supply":"2779530283.0","total_supply":"2779530283.0","max_supply":"2779530283.0","percent_change_1h":"2.38","percent_change_24h":"-9.55","percent_change_7d":"210.63","last_updated":"1512616170"},{"id":"ripple","name":"Ripple","symbol":"XRP","rank":"5","price_usd":"0.228153","price_btc":"0.00001635","24h_volume_usd":"260911000.0","market_cap_usd":"8838452151.0","available_supply":"38739145009.0","total_supply":"99993093880.0","max_supply":"100000000000","percent_change_1h":"-0.65","percent_change_24h":"-6.35","percent_change_7d":"-9.67","last_updated":"1512616441"},{"id":"dash","name":"Dash","symbol":"DASH","rank":"6","price_usd":"704.778","price_btc":"0.0505064","24h_volume_usd":"237001000.0","market_cap_usd":"5453507203.0","available_supply":"7737908.0","total_supply":"7737908.0","max_supply":"18900000.0","percent_change_1h":"0.46","percent_change_24h":"-7.78","percent_change_7d":"-4.04","last_updated":"1512616443"},{"id":"litecoin","name":"Litecoin","symbol":"LTC","rank":"7","price_usd":"99.4938","price_btc":"0.00713","24h_volume_usd":"562138000.0","market_cap_usd":"5389373508.0","available_supply":"54167933.0","total_supply":"54167933.0","max_supply":"84000000.0","percent_change_1h":"-0.19","percent_change_24h":"-4.07","percent_change_7d":"10.71","last_updated":"1512616442"},{"id":"bitcoin-gold","name":"Bitcoin Gold","symbol":"BTG","rank":"8","price_usd":"273.986","price_btc":"0.0197747","24h_volume_usd":"148017000.0","market_cap_usd":"4573435572.0","available_supply":"16692224.0","total_supply":"16792224.0","max_supply":"21000000.0","percent_change_1h":"2.3","percent_change_24h":"-9.03","percent_change_7d":"-11.48","last_updated":"1512616182"},{"id":"monero","name":"Monero","symbol":"XMR","rank":"9","price_usd":"268.088","price_btc":"0.0192119","24h_volume_usd":"392020000.0","market_cap_usd":"4140964245.0","available_supply":"15446287.0","total_supply":"15446287.0","max_supply":null,"percent_change_1h":"0.11","percent_change_24h":"-6.16","percent_change_7d":"47.84","last_updated":"1512616446"},{"id":"cardano","name":"Cardano","symbol":"ADA","rank":"10","price_usd":"0.119041","price_btc":"0.00000859","24h_volume_usd":"79126200.0","market_cap_usd":"3086384404.0","available_supply":"25927070538.0","total_supply":"31112483745.0","max_supply":"45000000000.0","percent_change_1h":"-0.81","percent_change_24h":"-2.3","percent_change_7d":"17.64","last_updated":"1512616181"}]

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

	renderToDOM: function renderToDOM($elemento) {
		var $contenedor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

		$contenedor.append($elemento);
	}

};

/***/ })
/******/ ]);