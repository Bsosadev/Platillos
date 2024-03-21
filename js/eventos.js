//arrays platos

const platos = [
    {
        "nombre": "Aji de gallina",
        "opinion": "Es rico",
        "isRico": true,
        "detalle" : "agradable"
    },
    {
        "nombre": "Pollo",
        "opinion": "Es rico",
        "isRico": true,
        "detalle" : "agradable"
    },
    {
        "nombre": "Mondongo",
        "opinion": "No es rico",
        "isRico": false,
        "detalle" : "feo"
    },
    {
        "nombre": "Higado Encebollado",
        "opinion": "No es rico",
        "isRico": false,
        "detalle" : "feo"
    },
    {
        "nombre": "Papa Rellena",
        "opinion": "Es rico",
        "isRico": true,
        "detalle" : "agradable"
    },
    {
        "nombre": "Ceviche",
        "opinion": "Es rico",
        "isRico": true,
        "detalle" : "agradable"
    },
    {
        "nombre": "Cuy",
        "opinion": "No es rico",
        "isRico": false,
        "detalle" : "feo"
    }
];


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
            <div class="detalle">
                <h4>${plato.detalle}</h4>
            </div>
        </div>
    `;
    contenido = contenido + template;
});

platosElement.innerHTML = contenido;