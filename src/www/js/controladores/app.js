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
        this.divVistaConsulta= document.getElementById('vistaConsulta')
        this.divVistaModificar = document.getElementById('vistaModificar')

        this.vistaInicio = new VistaInicio(this.divVistaInicio, this);
        this.vistaAlta = new VistaAlta(this.divVistaAlta, this)
        this.vistaConsulta = new VistaConsulta(this.divVistaConsulta, this)
        this.vistaModificar = new VistaModificar(this.divVistaModificar, this)
        this.ocultarVistas()
        this.vistaInicio.mostrar(true)
    }
    ocultarVistas(){
        this.vistaInicio.mostrar(false)
        this.vistaAlta.mostrar(false)
        this.vistaModificar.mostrar(false)
        this.vistaConsulta.mostrar(false)
       
    }
    cancelar(){
        this.ocultarVistas()
        this.vistaInicio.mostrar(true)
    }
    /**
     * Oculta las vistas y muestra la vista de consultas de un dato en concreto
     */
    pulsarConsulta(dato){
        this.ocultarVistas();
        this.vistaConsulta.mostrar(true)
        this.vistaConsulta.pintar(dato)
      
      
    }
     /**  
     * metodo que llama al modelo para editar los datos que se encuentran en el
    */
     aceptarModificar(id, nombre, precio, fecha, descripcion, edad, tematicas, estado, file){
       this.ocultarVistas()
       this.vistaInicio.mostrar(true)
       
        this.modelo.editar(id, nombre, precio, fecha, descripcion, edad, tematicas, estado, file)
        alert("Introducido con exito")      
    }
    pulsarAlta(){
        this.ocultarVistas();
        this.vistaAlta.mostrar(true)
    }
    pulsarInicio(){
        this.ocultarVistas();
        this.vistaInicio.mostrar(true)
    }
    aceptarAlta(nombre,precio,fecha,descripcion,edad,tematicas,estado,file){
        this.ocultarVistas()
        this.modelo.insertar(nombre, precio, fecha, descripcion, edad,tematicas,estado,file) 
        this.vistaInicio.mostrar(true)
             
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