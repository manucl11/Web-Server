function holaMundo (nombre){
    return "hola " + nombre;
}


function adiosMundo (){
    return "byebye";
}

module.exports = {saludo:holaMundo, adios:adiosMundo}