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

var _funciones = __webpack_require__(2);

var dataPersistente = {};
//import data from '../dat/data.json'

async function cargarJSON() {
	await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(function (rsp) {
		return rsp.json();
	}).then(function (rs) {
		console.log(rs);
		inicializar(rs);
		return rs.data;
	});
}
cargarJSON();
setInterval(function () {
	cargarJSON();
}, 60000);

document.write('.');

var $h1 = document.createElement('h1');
$h1.textContent = "Top 10 Cryptos";
document.body.append($h1);

var $counter = document.createElement('div');
$counter.classList.add('counter');
document.body.append($counter);

var actualizarSubtitulo = function actualizarSubtitulo() {
	var hoy = new Date();
	var hora = ('0' + hoy.getHours()).substr(-2);
	var dia = ('0' + hoy.getDate()).substr(-2);
	var mes = ['', 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'][hoy.getMonth() + 1];
	var minutos = ('0' + hoy.getMinutes()).substr(-2);

	var fecha = 'Al ' + dia + '/' + mes + '/' + hoy.getFullYear() + ' - ' + hora + ':' + minutos;
	var $h3 = document.querySelector('.subtitulo');
	if (!$h3) {
		$h3 = document.createElement('h3');
		$h3.classList.add('subtitulo');
		document.body.append($h3);
	}
	$h3.textContent = fecha;
};

var inicializar = function inicializar(data) {

	actualizarSubtitulo();

	var $contenedor = document.querySelector('.contenedor');
	if (!$contenedor) {
		$contenedor = document.createElement('div');
		$contenedor.classList.add('contenedor');
		(0, _funciones.renderToDOM)($contenedor);
	} else {
		$contenedor.textContent = '';
	}

	data.forEach(function (el) {
		console.log(el);
		var $card = document.createElement('div');
		$card.classList.add('card');
		$card.addEventListener('click', function (e) {
			window.open('https://coinmarketcap.com/currencies/' + el.id);
		});
		(0, _funciones.renderToDOM)($card, $contenedor);

		var $divImg = document.createElement('div');
		$divImg.classList.add('div-img');
		(0, _funciones.renderToDOM)($divImg, $card);

		var $img = document.createElement('img');
		$img.classList.add('img');
		$img.setAttribute('src', 'https://files.coinmarketcap.com/static/img/coins/64x64/' + el.id + '.png');
		(0, _funciones.renderToDOM)($img, $divImg);

		var $divInfo = document.createElement('div');
		$divInfo.classList.add('div-info');
		(0, _funciones.renderToDOM)($divInfo, $card);

		var $info = document.createElement('div');
		$info.classList.add('info');
		var tendencia = '<span class=\'ini\'>\u26AB</span>';
		if (dataPersistente[el.id]) {
			tendencia = dataPersistente[el.id] > el.price_usd ? '<span class=\'down\'>\u25BC</span>' : dataPersistente[el.id] < el.price_usd ? '<span class=\'up\'>\u25B2</span>' : '<span class=\'eq\'>=</span>';
		}
		var html = '\n\t\t\t\t<b>' + el.name + '</b><br>\n\t\t\t\t' + el.symbol + '<br>\n\t\t\t\tUS$ ' + el.price_usd + ' ' + tendencia + '<br>\n\t\t\t\t<div class="rank" data-rank="' + el.rank + '">\n\t\t\t\t\t' + el.rank + '\n\t\t\t\t</div>\n\t\t\t';
		$info.innerHTML = html;

		(0, _funciones.renderToDOM)($info, $divInfo);

		dataPersistente[el.id] = el.price_usd;
		console.log(el.id, dataPersistente[el.id]);
	});

	var $boton = document.querySelector('.boton');
	if (!$boton) {
		$boton = document.createElement('button');
		$boton.classList.add('boton');
		$boton.setAttribute('type', 'button');
		$boton.textContent = "Ver toda la lista";
		$boton.addEventListener('click', function (e) {
			window.open('https://coinmarketcap.com/');
		});
		(0, _funciones.renderToDOM)($boton);
	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
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