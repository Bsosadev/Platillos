//arrays platos

let platos = [
    {
        "nombre": "Aji de gallina",
        "opinion": "Es rico",
        "isRico": true,
        "isFavorito" : "Favorito"
    },
    {
        "nombre": "Pollo",
        "opinion": "Es rico",
        "isRico": true,
        "isFavorito" : "Favorito"
    },
    {
        "nombre": "Mondongo",
        "opinion": "No es rico",
        "isRico": false,
        "isFavorito" : "No es Favorito"
    },
    {
        "nombre": "Higado Encebollado",
        "opinion": "No es rico",
        "isRico": false,
        "isFavorito" : "No es Favorito"
    },
    {
        "nombre": "Papa Rellena",
        "opinion": "Es rico",
        "isRico": true,
        "isFavorito" : "Favorito"
    },
    {
        "nombre": "Ceviche",
        "opinion": "Es rico",
        "isRico": true,
        "isFavorito" : "Favorito"
    },
    {
        "nombre": "Cuy",
        "opinion": "No es rico",
        "isRico": false,
        "isFavorito" : "No es Favorito"
    }
];

function asignarPlatos(){

    const platosElement = document.getElementById("platos");
    let contenido = "";
    platos.forEach(function(plato) {    
        let claseicon = "rico";
        if (plato.isRico) {
            claseicon = "rico";
        } else {
            claseicon = "no-rico";
        }
        const template = `
            <div class="platos">
                <div class="icon icon-${claseicon}"></div>
                <div class="data">
                    <h4>${plato.nombre}</h4>
                    <p>${plato.opinion}</p>
                </div>
                <div class="isfavorito">
                    <h4>${plato.isFavorito}</h4>
                </div>
            </div>
        `;
        contenido = contenido + template;
    });

    platosElement.innerHTML = contenido;

}

asignarPlatos();

const boton = document.getElementById("sendPlatillo");

boton.addEventListener("click", function(){
    //alert("ESTAS INGRESANDO UN NUEVO PRESIDENTE");
    const nombre = document.getElementById("nombrePlato").value;
    const isRico = document.getElementById("isRico").value;    
    let isPlatoRico = true;
    if (isRico == "NO") {
        isPlatoRico = false;
    }
    const isFavorito = document.getElementById("platFavorito").value;
    //PRINCIPIO SOLID RESPONSABILIDAD UNICA
    //CREAR EL OBJETO. 
    const newPlato = new Object();
    newPlato.nombre = nombre;   
    newPlato.isRico = isPlatoRico;
    newPlato.isFavorito = isFavorito;
    //push para agregar al array
    platos.push(newPlato);
    /* alert("Has agregado un nuevo pr"); */
    //repetir la funcion
    asignarPlatos();
});    