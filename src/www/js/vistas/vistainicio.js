/**
	@file Contiene la vista inicial de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
import {Vista} from './vista.js'
export class VistaInicio extends Vista{
	/**
		Constructor de la clase
	**/
	constructor(div,controlador){
		super(div)
		this.controlador=controlador
	}
	
}
