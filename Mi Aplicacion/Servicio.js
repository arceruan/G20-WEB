class Servicios{

    constructor(costoBase){
        this.costoBase = costoBase;
    }

    repararEquipo(equipo, cantidad){
        let costoTotal = this.costoBase + equipo.prrecio * cantidad;
        console.log("se repararon los equipos, el costo total es de :"+ costoTotal);
    }
}

export default Servicio;