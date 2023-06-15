
/*GESTION CLIENTES*/

const clientes =[];

const formularioclientes = document.getElementById("formularioclientes");
const cedula =document.getElementById("cedula");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const placa = document.getElementById("placa");
const tipo = document.getElementById("tipo");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const padretabla = document.getElementById("padretabla");
let contador = 1;

formularioclientes.addEventListener("submit",function(event){
    event.preventDefault();

    let nuevocliente= {};
    nuevocliente.codigo = contador;
    nuevocliente.cedulaN = cedula.value;
    nuevocliente.nombreN = nombre.value;
    nuevocliente.apellidoN = apellido.value;
    nuevocliente.placaN = placa.value;
    nuevocliente.tipoN = tipo.value;
    nuevocliente.correoN = correo.value;
    nuevocliente.telefonoN = telefono.value;
    nuevocliente.puntoscliente = 0;

    contador++

    clientes.push(nuevocliente);

    formularioclientes.reset();

    listarclientes();
    crearselectorcliente();
})


function listarclientes() {
    padretabla.innerHTML = "";

    clientes.forEach((e, index) => {
        let hijo = document.createElement("tr")
        hijo.classList.add('table-secondary', 'tabla')
        

        let codigo = document.createElement("td");
        codigo.textContent = `${e.codigo}`;
        hijo.appendChild(codigo);

        let cedula = document.createElement("td");
        cedula.textContent = `${e.cedulaN}`;
        hijo.appendChild(cedula);
        

        let nombre = document.createElement("td");
        nombre.textContent = `${e.nombreN}`;
        hijo.appendChild(nombre);

        let apellido = document.createElement("td");
        apellido.textContent = `${e.apellidoN}`;
        hijo.appendChild(apellido);
        
        let placa = document.createElement("td");
        placa.textContent = `${e.placaN}`;
        hijo.appendChild(placa);

        let tipo = document.createElement("td");
        tipo.textContent = `${e.tipoN}`;
        hijo.appendChild(tipo);

        let correo = document.createElement("td");
        correo.textContent = `${e.correoN}`;
        hijo.appendChild(correo);

        let telefono = document.createElement("td");
        telefono.textContent = `${e.telefonoN}`;
        hijo.appendChild(telefono);


        let botoneditar = document.createElement("td");
        editarboton = document.createElement("button");
        editarboton.textContent = "Editar"
        elimminarboton = document.createElement("button");
        elimminarboton.textContent = "Eliminar"
        botoneditar.appendChild(editarboton);
        botoneditar.appendChild(elimminarboton)
        hijo.appendChild(botoneditar);

        padretabla.appendChild(hijo)

        editarboton.addEventListener("click", function () {
            editarclientes(index);
        })


        elimminarboton.addEventListener("click", function () {
            eliminarcliente(index);
        })
    })

}

/*BOTON ELIMINAR FUNCION*/
function eliminarcliente(index) {
    clientes.splice(index, 1);
    listarclientes();

}

/*GESTION PRODUCTOS*/

const servicios = [];

const formularioservicios = document.getElementById("formularioservicios");
const nombreservicio = document.getElementById("nombreservicio");
const valorservicio = document.getElementById("valorservicio");
const descripcion = document.getElementById("descripcion");
const puntos = document.getElementById("puntos");
const padretabla2 = document.getElementById("padretabla2");
let contador2 = 1;


formularioservicios.addEventListener("submit", function(event){
    event.preventDefault();

    let nuevoservicio={};
    nuevoservicio.codigoservicio = contador2;
    nuevoservicio.nombreservicioN = nombreservicio.value;
    nuevoservicio.valorservicioN = valorservicio.value;
    nuevoservicio.descripcionN = descripcion.value;
    nuevoservicio.puntosN = puntos.value;

    contador2++

    servicios.push(nuevoservicio);

    formularioservicios.reset();

    listarservicios();
    crearselectorservicios();

})

function listarservicios(){
    padretabla2.innerHTML= "";

    servicios.forEach((e,index)=>{
        let hijo = document.createElement("tr")
        hijo.classList.add('table-secondary','tabla')

        let codigo = document.createElement("td");
        codigo.textContent = `${e.codigoservicio}`;
        hijo.appendChild(codigo);

        let nombreservicio = document.createElement("td");
        nombreservicio.textContent = `${e.nombreservicioN}`;
        hijo.appendChild(nombreservicio);

        let valorservicio = document.createElement("td");
        valorservicio.textContent = `${e.valorservicioN}`;
        hijo.appendChild(valorservicio);

        let descripcion = document.createElement("td");
        descripcion.textContent = `${e.descripcionN}`;
        hijo.appendChild(descripcion);

        let puntos = document.createElement("td");
        puntos.textContent = `${e.puntosN}`;
        hijo.appendChild(puntos);

        let botoneliminar = document.createElement("td");
        elimminarbotonR = document.createElement("button");
        elimminarbotonR.textContent = "Eliminar"
        botoneliminar.appendChild(elimminarbotonR)
        hijo.appendChild(botoneliminar);

        padretabla2.appendChild(hijo)



        elimminarbotonR.addEventListener("click", function () {
            eliminarruta(index)
        })
    })
}

function eliminarruta(index) {
    servicios.splice(index, 1);
    listarservicios();
}

/*GESTION DE COMPRAS*/

const formulariocompras = document.getElementById("formulariocompras");
const selectcliente = document.getElementById("selectcliente");
const selectservicio = document.getElementById("selectservicio");

formulariocompras.addEventListener("submit", function(event){
    event.preventDefault();

    let cedula = '';
    let valorservicios = 0;
    let dcto = 0.06;
    let iva = 0.14;
    let valorpuntos = 0;


    for (let indice of servicios) {
        if (indice.nombreservicioN == selectservicio.value) {

            valorservicios = parseFloat(indice.valorservicioN*dcto);
            valort1 = parseFloat(indice.valorservicioN-valorservicios);
            valort2= parseFloat(valort1*iva)
            valortotal= parseFloat(indice.valorservicioN-valorservicios+valort2);
            valorpuntos = parseFloat(indice.puntosN);
        }
    }
    for (let indicecliente of clientes) {
        if (indicecliente.nombreN = selectcliente.value) {
            /*id del cliente cedula*/
            cedula = indicecliente.cedulaN;
            indicecliente.puntoscliente += valorpuntos;
        }
    }

    

    alert(`   FACTURA FINAL

        IDENTIFICACIÓN:      ${cedula}
        NOMBRE CLIENTE:      ${selectcliente.value}
        NOMBRE DEL SERVICIO: ${selectservicio.value}
        VALOR DCTO:          ${valorservicios}
        VALOR IVA:           ${valort2}
        VALOR TOTAL:         ${valortotal}
        PUNTOS RECIBIDOS:    ${valorpuntos}`)

    totalpuntos();
});

function crearselectorcliente() {
    selectcliente.innerHTML = '<option selected>Seleccione el cliente</option>';
    for (let pasajero of clientes) {
        if (clientes.length === 0) {
            return;
        }
        const opcionpasajero = document.createElement("option");
        opcionpasajero.textContent = pasajero.nombreN;
        selectcliente.appendChild(opcionpasajero)
    }

}

function crearselectorservicios() {
    selectservicio.innerHTML = '<option selected>Seleccione el servicio</option>';

    for (let opcionservicio of servicios) {
        if (servicios.length === 0) {
            return;
        }
        const opcionservicios = document.createElement("option");
        opcionservicios.textContent = opcionservicio.nombreservicioN;
        selectservicio.appendChild(opcionservicios)
    }

}

/*PUNTOS DE FIDELIZACION*/

const padretabla3 = document.getElementById("padretabla3");

function totalpuntos() {
    padretabla3.innerHTML = "";
    
    for (let clientee of clientes) {
        if (clientee.puntoscliente != 0) {
            const hijopuntos = document.createElement("tr");
            hijopuntos.innerHTML = `<td>${clientee.cedulaN}</td>
            <td>${clientee.nombreN}</td>
            <td>${clientee.apellidoN}</td>
            <td>${clientee.puntoscliente}</td>`
            padretabla3.appendChild(hijopuntos);
        }
    }
}