/**
	@file Contiene la vista modificar de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
import {Vista} from './vista.js'
export class VistaModificar extends Vista{
    constructor(div,controlador){
		super(div)
		this.controlador=controlador
		this.modelo = this.controlador.getModelo()

		this.id = null;
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iPrecio = this.div.getElementsByTagName('input')[1]
		this.iFecha = this.div.getElementsByTagName('input')[2]
		this.iDescripcion = this.div.getElementsByTagName('input')[3]
		this.iEdad = this.div.getElementsByTagName('select')[0]
		this.iFile= this.div.getElementsByTagName('input')[4]	
		this.iEstado = this.div.getElementsByClassName('estado')
		this.estado = true;
		this.iTematicas = this.div.getElementsByClassName('tematica')
		
		this.iCancelar = this.div.getElementsByTagName('button')[0]

       	this.iAceptar = this.div.getElementsByTagName('button')[1]

	   //Evento que le asocio al elemento

	   this.iCancelar.onclick = this.cancelar.bind(this)
	   this.iAceptar.onclick = this.aceptar.bind(this)
    }
	cancelar(){
		this.controlador.cancelar()
	}
	/** 
     * Rellena los inputs con los valores del campo a modificar
    */
    rellenar(dato){	
	
        this.id = dato.id
        this.iNombre.value = dato.nombre
		
		this.iPrecio.value = dato.precio
        this.iDescripcion.value = dato.descripcion
        this.iFecha.value = dato.fecha
		this.iFile.value = null

      
        
    }
	/**
	 * Metodo para ingresar un registro
	 */
	aceptar(){
		
		//Queremos esto en local, el registro de tematicas se hará una vez por click
		let tematicas = []

		if (this.iEstado[0].checked){
			this.estado=true
		
		}
		if (this.iEstado[1].checked){
			this.estado=false
			
		}
		
		
		if (this.iTematicas[0].checked){
			tematicas.push(this.iTematicas[0].value)
		}
		if (this.iTematicas[1].checked){
			tematicas.push(this.iTematicas[1].value)
		}
		if (this.iTematicas[2].checked){
			tematicas.push(this.iTematicas[2].value)
			}
		let expRegNombre = /^[A-Z][a-z]{2,9}$/
		let expRegSoloNumeros=/^[0-9]+$/;

		try{
			if(!expRegNombre.test(this.iNombre.value))
			throw "Introduce un nombre válido"
			if(!expRegSoloNumeros.test(this.iPrecio.value)){
				this.iPrecio.style.backgroundColor="red"

				throw "Debes de introducir un numero"
			}
				
				
		

			if(!this.iFecha.value)
			throw "Debes de introducir una fecha de aparición correcta"
			if(!this.iDescripcion.value)
			throw "Debes introducir una descripcion"
			
		
			/*Me lleva al controlador los datos*/
			this.controlador.aceptarModificar(this.id,this.iNombre.value, this.iPrecio.value, this.iFecha.value,
				this.iDescripcion.value, this.iEdad.value,tematicas,this.estado,this.iFile.files[0])

		
			this.iNombre.value=""
			this.iPrecio.value=0
			this.iFecha.value=""
			this.iDescripcion.value=""
			this.iFile.value = null
			this.iTematicas[0].checked = false
			this.iTematicas[1].checked = false
			this.iTematicas[2].checked = false
	
		}
		catch(error){
			alert(error)
		}
	}
}