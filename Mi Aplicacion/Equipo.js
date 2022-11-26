class equipo{

    constructor (tipo, marca, precio){
        this.tipo = tipo 
        this.marca = marca
        this.precio = precio
    }


    encender(){
        console.log("el equipo  "+this.marca+"esta encendido");
        console.log("el equipo es del tipo: "+this.marca+);
    }
}