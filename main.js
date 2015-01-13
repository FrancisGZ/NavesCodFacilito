//Objetos canvas
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//Crear el objeto de la nave
var nave = {
		x: 100,
		y: canvas.height-100,
		width: 50,
		height: 50
}

var teclado = {}

//Definir variables para las imagenes
var fondo;


//Definicion de funciones
function loadMedia(){
	
	fondo = new Image();
	fondo.src = "space1.jpg";
	fondo.onload = function (){

		var intervalo = window.setInterval(frameLoop, 1000/55);

	}


}

function dibujarFondo()
{
	ctx.drawImage(fondo,0,0);
}

function dibujarNave()
{
	ctx.save();
	ctx.fillStyle = "white";
	ctx.fillRect(nave.x,nave.y,nave.width,nave.height);
	ctx.restore();
}



function agregarEventosTeclado()
{
	agregarEvento(document, "keydown", function(e)
	{
		//Se pone en verdadero la tecla presionada
		teclado[e.keyCode] = true;
		console.log(e.keyCode);

	});

	agregarEvento(document, "keyup", function(e)
	{
		//Se pone en falso la tecla que dejo de ser presionada
		teclado[e.keyCode] = false;

	})


	function agregarEvento(elemento, nombreEvento, funcion)
	{
		if(elemento.addEventListener)
		{
			//Navegadores
			elemento.addEventListener(nombreEvento, funcion, false);
		}
		else if (elemento.attachEvent){

			//Internet Explorer
			elemento.attachEvent(nombreEvento,funcion);

		}
		{

		}
	}
}

function moverNave()
{

	if (teclado[37])
	{
		//Movimeinto a la izquierda
		nave.x -= 6;
		if (nave.x < 0) 
		{
			nave.x = 0;
		}


	}

	if (teclado[39])
	{
		//Movimeinto a la derecha
		var limite = canvas.width - nave.width;
		nave.x += 6;
		if (nave.x > limite) 
		{
			nave.x = limite;
		}

		
	}
}

function frameLoop ()
{
	moverNave();
	dibujarFondo();
	dibujarNave();
}

//Ejecucion de funciones
loadMedia();
agregarEventosTeclado();