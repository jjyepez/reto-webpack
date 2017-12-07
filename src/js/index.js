import '../css/estilos.less'

document.write('.')

let $h1 = document.createElement('h1');
	$h1.textContent = "Top 10 Cryptos";
document.body.append($h1)

const hoy = new Date()
const fecha = `Al ${hoy.getDate()}/${hoy.getMonth()}/${hoy.getFullYear()}`
let $h2 = document.createElement('h2');
	$h2.textContent = fecha;
document.body.append($h2)
