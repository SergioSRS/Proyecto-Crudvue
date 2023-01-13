/**
	@file Contiene la vista consulta de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
import {Vista} from './vista.js'
export class VistaConsulta extends Vista{
    constructor(div,controlador){
		super(div)
        this.controlador = controlador
        
    }
   
}