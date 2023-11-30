lienzo = new fabric.Canvas("myCanvas");

ancho = 30
x = 20
y = 20
jugador = "" 

function acualizar_jugador(){
    fabric.Image.fromURL("player.png", function (img){
        jugador = img;
        jugador.set({left:x, top:y});
        lienzo.add(canvas);
    })
}






// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.

