/**
	@file Contiene la vista consulta de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
export function VistaAlta(controlador){
	return Vue.createApp({
		data() {
			return {

				controlador:controlador,
				titulo: 'Vista Lista',
				clase: 'inactivo',
				nombre:"",
				precio: 0,
				fecha:"",
				descripcion:"",
				edad: -1,
				subirImagen:null
				
			}
		},
		template:
		/*html*/
		`
		<div :class=clase>
			<h2 class="tituloProceso">Alta de juegos</h2>
				<div class="formulario">
					<label>Nombre<input v-model="nombre" type="text"/></label>
					<label>Precio<input v-model="precio" type="text"/></label>
					<label>Fecha lanzamiento<input v-model="fecha" type="date"/></label>
					<label>Descripción<input v-model="descripcion" type="text"/></label>
					<label>Edad Recomendada
						<select v-model="edad">
								<option  value="+18">+18</option>
								<option  value="+16">+16</option>
								<option  value="+13">+13</option>
								<option  value="+7">+7</option>
								<option  value="+3">+3</option>
						</select>
					</label>
					<label>Imagen<input  v-on:change="imagenCambio" type="file"/></label>
					<fieldset>
						<div>Indica si esta completado o no</div>    
						<label>Sí<input checked value="true" name ="finalizacion" type="radio" class="estado"/></label>
						<label>No<input value="false" name="finalizacion" type="radio" class="estado"/></label>
					</fieldset>
				<div>
						<div>Tematicas:</div>
						<label>Aventura<input name ="tematica" type="checkbox" value="Aventura" class="tematica"></label>
						<label>Accion<input name="tematica" type="checkbox" value="Accion" class="tematica"></label>
						<label>Terror<input name="tematica" type="checkbox" value="Terror" class="tematica"></label>
				</div>
				<button @click="cancelar">Cancelar</button>
				<button @click="insertar">Aceptar</button>
				</div>
		</div>`,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
			insertar(){
			
				this.controlador.insertar(this.nombre,this.precio,this.fecha,this.descripcion,this.edad,this.subirImagen[0])
				this.controlador.playVistaInicio()
		
			},
			cancelar(){
				this.controlador.playVistaInicio()
			},
			imagenCambio(e){
				this.subirImagen = e.target.files || e.dataTransfer.files;
			}
		}
	})
}
