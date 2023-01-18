/**
	@file Contiene el controlador de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
import {VistaModificar} from '../vistas/vistamodificar.js'
import {VistaInicio} from '../vistas/vistainicio.js'
import {VistaAlta} from '../vistas/vistaalta.js'
import {VistaConsulta} from '../vistas/vistaconsulta.js'
import {Modelo} from '../modelos/modelo.js';
//import {Modelo} from './modelo.js';
class Controlador{
    constructor(){
        window.onload = this.iniciar.bind(this)
    }
    /**
     * Inicia el modelo y las vistas
     */
    iniciar(){
         
        //Primero creamos el modelo porque tarda en crear
         this.modelo = new Modelo()

        this.divVistaInicio = document.getElementById('vistaInicio')
        this.divVistaAlta = document.getElementById('vistaAlta')
        this.divVistaModificar = document.getElementById('vistaModificar')

        this.vistaInicio = new VistaInicio(this.divVistaInicio, this);
        this.vistaAlta = new VistaAlta(this.divVistaAlta, this)
        this.vistaModificar = new VistaModificar(this.divVistaModificar, this)
        this.ocultarVistas()
        this.vistaInicio.mostrar(true)
    }
    ocultarVistas(){
        this.vistaInicio.mostrar(false)
        this.vistaAlta.mostrar(false)
        this.vistaModificar.mostrar(false)
    }
    pulsarAlta(){
        this.ocultarVistas();
        this.vistaAlta.mostrar(true)
    }
    pulsarInicio(){
        this.ocultarVistas();
        this.vistaInicio.mostrar(true)
    }
    aceptarAlta(nombre,precio,fecha,descripcion,edad){
        this.modelo.insertar(nombre, precio, fecha, descripcion, edad)      
    }
    eliminarVideojuego(id){
        this.modelo.borrar(id)
    }
    pulsarBusqueda(nombre){
        this.modelo.obtenerRegistro2(nombre)
    }
    pulsarModificar(dato){
        this.ocultarVistas();
        this.vistaModificar.mostrar(true)
        this.vistaModificar.rellenar(dato)
    }
    getModelo(){
        return this.modelo
    }
    
}
const app = new Controlador()