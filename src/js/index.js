import '../css/estilos.less'
//import data from '../dat/data.json'

import {renderToDOM} from './funciones.js'

var dataPersistente = {}

async function cargarJSON(){
	await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
	.then( rsp => rsp.json() )
	.then( rs => {
		console.log( rs )
		inicializar( rs )
		return rs.data
	})
}
cargarJSON()
setInterval( () => {
	cargarJSON()
}
, 60000)

document.write('.')

let $h1 = document.createElement('h1');
	$h1.textContent = "Top 10 Cryptos";
document.body.append($h1)

let $counter = document.createElement('div');
	$counter.classList.add('counter')
document.body.append($counter)


const actualizarSubtitulo = () => {
	const hoy = new Date()	
	const hora = `0${hoy.getHours()}`.substr(-2)
	const dia = `0${hoy.getDate()}`.substr(-2)
	const mes = ['','ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][hoy.getMonth()+1]
	const minutos = `0${hoy.getMinutes()}`.substr(-2)

	const fecha = `Al ${dia}/${mes}/${hoy.getFullYear()} - ${hora}:${minutos}`
	let $h3 = document.querySelector('.subtitulo')
	if( !$h3 ){
		$h3 = document.createElement('h3');
		$h3.classList.add('subtitulo')
		document.body.append($h3)
	}
	$h3.textContent = fecha;
}

const inicializar = data => {

	actualizarSubtitulo()

	let $contenedor = document.querySelector('.contenedor')
	if( !$contenedor ){
		$contenedor = document.createElement('div')
		$contenedor.classList.add('contenedor')
		renderToDOM($contenedor)
	} else {
		$contenedor.textContent = ''
	}

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
			let tendencia = `<span class='ini'>⚫</span>`
			if( dataPersistente[el.id] ){
				tendencia = dataPersistente[el.id] > el.price_usd ?
						  `<span class='down'>▼</span>` : 
						  dataPersistente[el.id] < el.price_usd ?
						  `<span class='up'>▲</span>` :
						  `<span class='eq'>=</span>` 
			}
			const html = `
				<b>${el.name}</b><br>
				${el.symbol}<br>
				US$ ${el.price_usd} ${tendencia}<br>
				<div class="rank" data-rank="${el.rank}">
					${el.rank}
				</div>
			`
			$info.innerHTML = html

		renderToDOM( $info, $divInfo )

		dataPersistente[el.id] = el.price_usd
		console.log(el.id, dataPersistente[el.id])
	})

	let $boton = document.querySelector('.boton')
	if( !$boton ){
		$boton = document.createElement('button')
		$boton.classList.add('boton')
		$boton.setAttribute('type','button')
		$boton.textContent = "Ver toda la lista"
		$boton.addEventListener('click', e => {
			window.open('https://coinmarketcap.com/')
		})
		renderToDOM($boton)
	}
}