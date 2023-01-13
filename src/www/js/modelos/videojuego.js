class Videojuego{
    constructor(nombre, precio, fecha, descripcion, estado, edadRecomendada, tematicas, imagen){
        //texto corto
        this.nombre = nombre;
        //numero decimal
        this.precio = precio;
        //fecha, sin hora
        this.fecha = fecha;
        //texto largo
        this.descripcion = descripcion;
        //Boolean
        this.estado = estado;
        //Atributo seleccionado
        this.edadRecomendada = edadRecomendada;
        //Atributo multivaluado
        this.tematicas = tematicas;
        //tipo blob
        this.imagen = imagen;
    }
}