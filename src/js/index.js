import '../css/estilos.less'
import data from '../dat/data.json'

import {renderToDOM} from './funciones.js'

document.write('.')

let $h1 = document.createElement('h1');
	$h1.textContent = "Top 10 Cryptos";
document.body.append($h1)

const hoy = new Date()
const fecha = `Al ${hoy.getDate()}/${hoy.getMonth()}/${hoy.getFullYear()}`
let $h2 = document.createElement('h2');
	$h2.textContent = fecha;
document.body.append($h2)

const inicializar = function(){
	const $contenedor = document.createElement('div')
		$contenedor.classList.add('contenedor')
	renderToDOM($contenedor)

	data.forEach( el => {
		console.log(el)
		const $card = document.createElement('div')
			$card.classList.add('card')
		renderToDOM($card, $contenedor)
	})
}
inicializar()