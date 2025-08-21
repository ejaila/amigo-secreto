// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES INICIALES
let arregloAmigos = [];

const listaAmigosElem = document.getElementById('listaAmigos');
const resultadoAmigoElem = document.getElementById('resultado');

function agregarAmigo(){
    let extraeAmigo = document.getElementById('amigo').value.trim();
    let addAmigo = extraeAmigo.charAt(0).toUpperCase() + extraeAmigo.slice(1);
    if (addAmigo === '') {
         alert('Ingrese un nombre Valido, al menor debe contener 2 caracteres');
         return
    }
    arregloAmigos.push(addAmigo);
    imprimirAmigoHtml();
    limpiarImput();
    return
}

function imprimirAmigoHtml(){
    resultadoAmigoElem.innerHTML='';
    listaAmigosElem.innerHTML='';
    arregloAmigos.forEach((nombreAmigo, ind) =>{
        const li = document.createElement('li');
        li.textContent =`${ind +1}. ${nombreAmigo}        `;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent='Quitar';
        btnEliminar.classList.add('button-delete');
        btnEliminar.onclick = () => borrarAmigo(ind);

        li.appendChild(btnEliminar);
        listaAmigosElem.appendChild(li);
    });
}

function borrarAmigo(ind){
    arregloAmigos.splice(ind,1);
    imprimirAmigoHtml();
    //alert('presiono Eliminar '+ ind);
    //console.log(arregloAmigos);
}

function sortearAmigo(){
    resultadoAmigoElem.innerHTML='';
    if (arregloAmigos.length===0){
        resultadoAmigoElem.textContent='No Hay amigos para realizar el sorteo';
        return;
    }
    const amigoSorteado = Math.floor(Math.random() * arregloAmigos.length);
    //console.log(amigoSorteado);
    //console.log(arregloAmigos[amigoSorteado]);
    resultadoAmigoElem.textContent=` 🎉 El amigo secreto es:  ${arregloAmigos[amigoSorteado]}`
    return;
}

function limpiarImput(){
    document.querySelector('#amigo').value ="";
}

function reiniciarJuego(){
    arregloAmigos = [];
    imprimirAmigoHtml();
}

