import '../css/estilos.less'
import data from '../dat/data.json'

import {renderToDOM} from './funciones.js'

document.write('.')

let $h1 = document.createElement('h1');
	$h1.textContent = "Top 10 Cryptos";
document.body.append($h1)

const hoy = new Date()
const hora = `0${hoy.getHours()}`.substr(-2)
const dia = `0${hoy.getDate()}`.substr(-2)
const mes = ['','ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][hoy.getMonth()+1]

const fecha = `Al ${dia}/${mes}/${hoy.getFullYear()} - ${hora}:${hoy.getMinutes()}`
let $h3 = document.createElement('h3');
	$h3.classList.add('subtitulo')
	$h3.textContent = fecha;
document.body.append($h3)

const inicializar = function(){
	const $contenedor = document.createElement('div')
		$contenedor.classList.add('contenedor')
	renderToDOM($contenedor)

	data.forEach( el => {
		console.log(el)
		const $card = document.createElement('div')
			$card.classList.add('card')
			$card.addEventListener('click', e => {
				window.open( `https://coinmarketcap.com/currencies/${el.id}` )
			})
		renderToDOM($card, $contenedor)

		const $divImg = document.createElement('div')
			$divImg.classList.add('div-img')
		renderToDOM( $divImg, $card )

		const $img = document.createElement('img')
			$img.classList.add('img')
			$img.setAttribute('src',`https://files.coinmarketcap.com/static/img/coins/64x64/${el.id}.png`)
		renderToDOM( $img, $divImg )

		const $divInfo = document.createElement('div')
			$divInfo.classList.add('div-info')
		renderToDOM( $divInfo, $card )

		const $info = document.createElement('div')
			$info.classList.add('info')
			const html = `
				<b>${el.name}</b><br>
				${el.symbol}<br>
				US$ ${el.price_usd}<br>
				<div class="rank" data-rank="${el.rank}">
					${el.rank}
				</div>
			`
			$info.innerHTML = html

		renderToDOM( $info, $divInfo )
	})
	const $boton = document.createElement('button')
		$boton.classList.add('boton')
		$boton.setAttribute('type','button')
		$boton.textContent = "Ver toda la lista"
		$boton.addEventListener('click', e => {
			window.open('https://coinmarketcap.com/')
		})
	renderToDOM($boton)
}
inicializar()