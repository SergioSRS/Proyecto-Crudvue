Clases usadas en la aplicacion:

-class Controlador

Se encuentra en el archivo src/js/controladores/app.js 

metodo iniciar();

-class Videojuego

Se encuentra en el archivo src/js/modelos/videjouego.js

atributos:

nombre, precio, fecha, descripcion, estado, edadRecomendada, tematicas, imagen

-class Vista

Se encuentra en el archivo src/js/vistas/vista.js

Se exporta a la clase VistaAlta, VistaConsulta, VistaModificar, VistaInicio

Permite ocultar las vistas.

export class Vista{
	/**
		Constructor de la clase
	**/
	constructor(div){
		this.div = div
	}
	/**
		Muestra u oculta el div principal de la vista.
		@param ver {Boolean} True muestra la vista y false la oculta.
	**/
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
}

-Class VistaAlta 

Se encuentra en el archivo archivo src/js/vistas/vistaalta.js

Es usada por el controlador


-Class VistaConsulta

Se encuentra en el archivo archivo src/js/vistas/vistaconsulta.js

Es usada por el controlador


-Class VistaModificar

Se encuentra en el archivo archivo src/js/vistas/vistamodificar.js

Es usada por el controlador


-Class VistaInicio

Se encuentra en el archivo archivo src/js/vistas/vistainicio.js

Es usada por el controlador