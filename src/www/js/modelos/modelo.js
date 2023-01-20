/**
	@file Contiene el modelo de la aplicación
	@author Sergio Rivera
	@license GPL-3.0-or-later
**/
export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(){
		this.baseDatos
		this.lista = []
		this.callbacks = [] 
		this.conexionBD()
	}
    registrar(callback){
        this.callbacks.push(callback)
	}
	avisar(){
		for(let callback of this.callbacks)
		callback()
	}
    obtenerRegistro(){
		const peticion= this.baseDatos.transaction('videojuegos', 'readonly').objectStore('videojuegos').getAll();
		
		peticion.onsuccess = () => {
			this.lista = peticion.result;
			this.avisar()
		}
		peticion.onerror = () => {
			console.error("No se ha podido conectar")
		}
	}
	/** 
	 * Edita un registro de la base de datos buscando por un id
	*/
    editar(id, nombre, precio, fecha, descripcion, edad, tematicas, estado, file){
		
		const request = this.baseDatos.transaction('videojuegos','readwrite').objectStore("videojuegos").get(id)
		
	
		request.onerror = (evento) =>{
			console.log("fallo en editar")
		}
		request.onsuccess = (evento)=>{
			const videojuego = evento.target.result
				
			if (file)
			{
				
				let reader = new FileReader()
				reader.readAsDataURL(file)
			
				reader.onload = () =>{
			
					videojuego.nombre = nombre
					videojuego.precio = precio
					videojuego.fecha = fecha
					videojuego.descripcion = descripcion
					videojuego.edad = edad
					videojuego.tematicas = tematicas
					videojuego.estado = estado
					videojuego.file = reader.result

					const modificacion = this.baseDatos.transaction('videojuegos','readwrite').objectStore("videojuegos").put(videojuego)
					
					this.obtenerRegistro()
				}
			
			}
			else{
					
					videojuego.nombre = nombre
					videojuego.precio = precio
					videojuego.fecha = fecha
					videojuego.descripcion = descripcion
					videojuego.edad = edad
					videojuego.tematicas = tematicas
					videojuego.estado = estado
					videojuego.file = null

					const modificacion = this.baseDatos.transaction('videojuegos','readwrite').objectStore("videojuegos").put(videojuego)

					this.obtenerRegistro()

			}
   		 }
	}
    /** 
	 * Inserta un registro en la base de datos
	*/
	insertar(nombre,precio,fecha,descripcion,edad,tematicas,estado,file){
	
		if (file)
		{
			let reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () =>
			{
				let obj = {
					nombre: nombre,
					precio: precio,
					fecha: fecha,
					descripcion: descripcion,
					edad: edad,
					tematicas:tematicas,
					estado:estado,
					file:reader.result
				}
				const almacenar=this.baseDatos.transaction('videojuegos','readwrite').objectStore('videojuegos').add(obj);
				almacenar.onsuccess=()=>{
					
					this.obtenerRegistro()
				}
			}
		}
		else
		{
			let obj = {
				nombre: nombre,
				precio: precio,
				fecha: fecha,
				descripcion: descripcion,
				edad: edad,
				tematicas:tematicas,
				estado:estado,
				file:null
			}
			const almacenar=this.baseDatos.transaction('videojuegos','readwrite').objectStore('videojuegos').add(obj);
			almacenar.onsuccess=()=>{
				
				this.obtenerRegistro()
			}
		}
	}
	
	/**
	 * Devuelve los registros que haya en la base de datos y luego llama a los callbacks para la busqueda por nombre
	 **/
		obtenerRegistro2(nombre){
			if (!nombre){
				this.obtenerRegistro()
			}
			else{
				const peticion= this.baseDatos.transaction('videojuegos', 'readonly').objectStore('videojuegos').index('nombreIndex').getAll(nombre);
			
				peticion.onsuccess = () => {
					
					this.lista = peticion.result;
					this.avisar()
				}
				peticion.onerror = () => {
					console.error("No se ha podido conectar")
				}
			}
		
		}
	borrar(id){
		const request = this.baseDatos.transaction('videojuegos','readwrite').objectStore("videojuegos").delete(id)

		request.onsuccess = () =>{
			this.obtenerRegistro();
		}
	}
	conexionBD(){
		const bd=window.indexedDB
		if(window.indexedDB){
		
			const respuesta=indexedDB.open("Videojuegos",1);
		
			respuesta.onsuccess=(event)=>{
				
				this.baseDatos=event.target.result
				
				
				
				this.obtenerRegistro()
			}
			respuesta.onerror=()=>{
				console.log('ERROR');
			}
			respuesta.onupgradeneeded=(evt)=>{
				
				this.baseDatos=evt.target.result
				this.baseDatos.createObjectStore('videojuegos',{keyPath:'id', autoIncrement:true}).createIndex('nombreIndex', 'nombre')
				
			}
		}	
	}
	
	/**
 * Retorna la lista de datos del modelo
 * @returns this.lista
 */
	getDatos(){
		return this.lista
	}
}