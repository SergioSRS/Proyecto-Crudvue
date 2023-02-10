/**
	@file Contiene la vista inicial de la aplicacion
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
export function VistaInicio(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador:controlador,
				titulo: 'Vista Lista',
				clase: 'inactivo',
				datos: []
			}
		},
		template:
	
		 `<div :class=clase>
			<div id="opciones">
				<label>Nombre<input placeholder="nombre" id="nombre" type="text"></label>
				<svg id="buscar" height="48" width="48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
				<svg @click ="anadir" id="anadir" height="48" width="48"><path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>
			</div>
			<table>
				<thead>
					<tr><td colspan="3" >Lista de Videojuegos</td></tr>
					<tr id="campos">
						<th>Nombre</th>
						<th>Imagen</th>
						<th>Opciones</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="dato in datos">
						<td>{{dato.nombre}}</td>
						<td v-if="(dato.file)"><img :src="dato.file"></td>
						<td v-else >No hay imagen</td>
						<td><span @click="editar(dato)" style="cursor:pointer" >✏️</span><span @click="eliminar(dato.id)" style="cursor:pointer;">🗑️</span></td>
					</tr>
				</tbody>
			</table> 
		</div>`,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
			anadir(){
				this.controlador.playVistaAlta()
			},
			eliminar(id){
				this.controlador.eliminarVideojuego(id)
			},
		/*	editar(dato){
				console.log(dato)
				//this.controlador.modificar(dato)
			}*/
		}
	})
}
