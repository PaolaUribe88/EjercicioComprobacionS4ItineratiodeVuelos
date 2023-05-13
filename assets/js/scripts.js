function enviarListaOrigen(){
    let valorListaOrigen = document.getElementById('listaOrigen').value;
    let valorListaOrigenInt = parseInt(valorListaOrigen);

    let elParrafoOrigen = document.getElementById('parrafoOrigen');
    elParrafoOrigen.classList.add('fs-3');
    
    switch(valorListaOrigenInt){
        case 1: 
            elParrafoOrigen.innerText = 'New York,USA';
            break;
        case 2: 
            elParrafoOrigen.innerText = 'Chile';
            break;
        case 3: 
            elParrafoOrigen.innerText = 'Mexico';
            break;    
        case 4: 
            elParrafoOrigen.innerText = 'Colombia';
            break;
        case 5: 
            elParrafoOrigen.innerText = 'Perú';
            break;
        case 6: 
            elParrafoOrigen.innerText = 'España';
            break;
        case 7: 
            elParrafoOrigen.innerText = 'Venezuela';
            break;
        case 8: 
            elParrafoOrigen.innerText = 'London, UK';
            break;
    }
    validacionEscalas();
}
function enviarListaDestino(){
    let valorListaDestino = document.getElementById('listaDestino').value;
    let valorListaDestinoInt = parseInt(valorListaDestino);
    let elParrafoDestino = document.getElementById('parrafoDestino');
    elParrafoDestino.classList.add('fs-3');
   
    
    switch(valorListaDestinoInt){
        case 1: 
            elParrafoDestino.innerText = 'New York,USA';
            break;
        case 2: 
            elParrafoDestino.innerText = 'Chile';
            break;
        case 3: 
            elParrafoDestino.innerText = 'Mexico';
            break;    
        case 4: 
            elParrafoDestino.innerText = 'Colombia';
            break;
        case 5: 
            elParrafoDestino.innerText = 'Perú';
            break;
        case 6: 
            elParrafoDestino.innerText = 'España';
            break;
        case 7: 
            elParrafoDestino.innerText = 'Venezuela';
            break;
        case 8: 
            elParrafoDestino.innerText = 'London, UK';
            break;
    }
    validacionEscalas();
}
function enviarFechaOrigen(){
    let valorFechaOrigen = document.getElementById('fechaOrigen').value;
    let elParrafoFechaOrigen =document.getElementById('parrafoFechaOrigen');
    elParrafoFechaOrigen.innerText = valorFechaOrigen;
    elParrafoFechaOrigen.classList.add('text-success');
    elParrafoFechaOrigen.classList.add('text-center');
    elParrafoFechaOrigen.classList.add('fs-2');

}
function enviarFechaDestino(){
    let valorFechaDestino = document.getElementById('fechaDestino').value;
    let elParrafoFechaDestino =document.getElementById('parrafoFechaDestino');
    elParrafoFechaDestino.innerText = valorFechaDestino;
    elParrafoFechaDestino.classList.add('text-success');
    elParrafoFechaDestino.classList.add('text-center');
    elParrafoFechaDestino.classList.add('fs-2');

}
function validacionEscalas(){
    let valorListaOrigen = document.getElementById('listaOrigen').value;
    let valorListaDestino = document.getElementById('listaDestino').value;
    let elParrafoNotificacion = document.getElementById('parrafoNotificacion');

    let tieneEscala = 
    (
        (valorListaOrigen == '1' && valorListaDestino == '5') ||
        (valorListaOrigen == '1' && valorListaDestino == '4') ||
        (valorListaOrigen == '1' && valorListaDestino == '3') ||
        (valorListaOrigen == '1' && valorListaDestino == '2') ||
        (valorListaOrigen == '1' && valorListaDestino == '6') ||
        (valorListaOrigen == '1' && valorListaDestino == '7') ||
        (valorListaOrigen == '2' && valorListaDestino == '1') ||
        (valorListaOrigen == '2' && valorListaDestino == '3') ||
        (valorListaOrigen == '2' && valorListaDestino == '4') ||
        (valorListaOrigen == '2' && valorListaDestino == '5') ||
        (valorListaOrigen == '2' && valorListaDestino == '6') ||
        (valorListaOrigen == '2' && valorListaDestino == '7') ||
        (valorListaOrigen == '5' && valorListaDestino == '1') ||
        (valorListaOrigen == '4' && valorListaDestino == '2') ||
        (valorListaOrigen == '2' && valorListaDestino == '4') ||
        (valorListaOrigen == '7' && valorListaDestino == '3') 
        

    ) ? true:false;

    if(tieneEscala == true){
        let mensaje = 'EL VUELO TIENE ESCALA';
        elParrafoNotificacion.innerText = mensaje;
        elParrafoNotificacion.classList.add('text-primary');
        elParrafoNotificacion.classList.add('text-center');
        elParrafoNotificacion.classList.add('fs-1');

    }
    else{
        let mensaje = '';
        elParrafoNotificacion.innerText = mensaje;
        elParrafoNotificacion.classList.add('text-light');
        elParrafoNotificacion.classList.add('text-center');
        elParrafoNotificacion.classList.add('fs-1');
    }
  

}

function asignarEventos(){
    let laListaOrigen = document.getElementById('listaOrigen');
    laListaOrigen.addEventListener('change', enviarListaOrigen);

    let lalistaDestino = document.getElementById('listaDestino');
    lalistaDestino.addEventListener('change',enviarListaDestino);

    let laFechaOrigen = document.getElementById('fechaOrigen');
    laFechaOrigen.addEventListener('change', enviarFechaOrigen);

    let laFechaDestino = document.getElementById('fechaDestino');
    laFechaDestino.addEventListener('change', enviarFechaDestino);
}