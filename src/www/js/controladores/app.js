/**
	@file Contiene el controlador de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
import {VistaModificar} from '../vistas/vistamodificar.js'
import {VistaInicio} from '../vistas/vistainicio.js'
import {VistaAlta} from '../vistas/vistaalta.js'
import {VistaConsulta} from '../vistas/vistaconsulta.js'
//import {Modelo} from './modelo.js';
class Controlador{
    constructor(){
        window.onload = this.iniciar.bind(this)
    }
    /**
     * Inicia el modelo y las vistas
     */
    iniciar(){
       
    }
    
}
const app = new Controlador()