/**
	@file Contiene la vista consulta de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
import {Vista} from './vista.js'
export class VistaAlta extends Vista{
    constructor(div,controlador){
		super(div)
        this.controlador = controlador

		/*Valores para hacer un alta*/
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iPrecio = this.div.getElementsByTagName('input')[1]
		this.iFecha = this.div.getElementsByTagName('input')[2]
		this.iDescripcion = this.div.getElementsByTagName('input')[3]
		this.iEdad = this.div.getElementsByTagName('select')[0]
		//this.iFile= this.div.getElementsByTagName('input')[4]	//
		/* Falta el select y los checkbox (mal html)
		this.iFile= this.div.getElementsByTagName('input')[4]	
		this.iFile= this.div.getElementsByTagName('input')[4]	*/
       this.iAceptar = this.div.getElementsByTagName('button')[0]
        

	   //Evento que le asocio al elemento

		this.iAceptar.onclick = this.aceptar.bind(this)
    }
	/**
	 * Metodo para ingresar un registro
	 */
	aceptar(){
		
		let expRegNombre = /^[A-Z][a-z]{2,9}$/
		let expRegSoloNumeros=/^[0-9]+$/;

		try{
			if(!expRegNombre.test(this.iNombre.value))
			throw "Introduce un nombre válido"
			if(!expRegSoloNumeros.test(this.iPrecio.value))
			throw "Debes de introducir un numero"
			if(!this.iFecha.value)
			throw "Debes de introducir una fecha de aparición correcta"
			if(!this.iDescripcion.value)
			throw "Debes introducir una descripcion"
			
			

		
			/*Me lleva al controlador los datos*/
			this.controlador.aceptarAlta(this.iNombre.value, this.iPrecio.value, this.iFecha.value,
			this.iDescripcion.value, this.iEdad.value)

			/*Me reseta los valores de los campos*/
			this.iNombre.value = null
			this.iDescripcion.value = ""
			this.iFecha.value = ""

	
		}
		catch(error){
			alert(error)
		}
	}
}