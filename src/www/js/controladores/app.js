/**
	@file Contiene el controlador de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/

import {VistaInicio} from '../vistas/vistainicio.js'
import {VistaAlta} from '../vistas/vistaalta.js'
import {VistaModificar} from '../vistas/vistamodificar.js'
import {Modelo} from '../modelos/modelo.js';

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

        this.vistaInicio = new VistaInicio(this).mount('#vistaInicio')
        this.vistaAlta = new VistaAlta(this).mount('#vistaAlta')
        this.vistaModificar = new VistaModificar(this).mount('#vistaModificar')
        this.playVistaInicio()
        this.registro()
      


    }
    modificar(id,nombre,precio,fecha,descripcion,edad,file){
        this.modelo.editar(id,nombre,precio,fecha,descripcion,edad,file)
        this.playVistaAlta()
    }
    eliminarVideojuego(id){
        this.modelo.borrar(id)
    }
    insertar(nombre,precio,fecha,descripcion,edad,file){
        this.modelo.insertar(nombre,precio,fecha,descripcion,edad,file)
        this.playVistaAlta()
    }
    playVistaInicio(){
        this.vistaInicio.mostrar(true)
        this.vistaAlta.mostrar(false)
        this.vistaModificar.mostrar(false)
    }
    playVistaAlta(){
        this.vistaInicio.mostrar(false)
        this.vistaModificar.mostrar(false)
        this.vistaAlta.mostrar(true)
    }
    playVistaModificar(){
        this.vistaInicio.mostrar(false)
        this.vistaModificar.mostrar(true)
        this.vistaAlta.mostrar(false)
    }
    registro(){
        this.modelo.registrar(this.enviarListado.bind(this))
       
    }
    enviarListado(){
        this.vistaInicio.datos = this.modelo.getDatos()
        this.vistaModificar.datos = this.modelo.getDatos()
    }
    /**
     * Metodo para obtener datos
     * @returns devuelve los registros de un videojuego
     */
    getModelo(){
        return this.modelo
    }
    
}
const app = new Controlador()