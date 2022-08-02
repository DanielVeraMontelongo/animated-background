let ancho = screen.width + 220;
let alto = screen.height + 220;
let content = ''
let container = document.querySelector('.container')

while(ancho > 0){
    content += '<div class="hexagon"></div>'
    ancho -= 100;
}

while(alto > 0){

    container.innerHTML += '<div class="row">'+ content +'</div>'
    alto -= 110;
}

let persona = {

    nombre: "Paco",
    apellidos: "García"
}







