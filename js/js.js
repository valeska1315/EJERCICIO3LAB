var btn_Destacado, btn_Proyecto, btn_Biografia;
 btn_Destacado = document.getElementById('Destacado');
 btn_Proyecto = document.getElementById('Proyectos');
 btn_Biografia = document.getElementById('Biografia');

var caja_destacado, caja_proyectos, caja_biografia;
caja_Destacado = document.getElementById('caja-Destacado');
caja_Proyectos = document.getElementById('caja-Proyectos');
caja_Biografia = document.getElementById('caja-Biografia');

function index(){
    caja_Destacado.classList.add("activarCaja");
}
index();
    
btn_Destacado.addEventListener("click", function(){
   
    caja_Destacado.classList.add("activarCaja");
    caja_Proyectos.classList.remove("activarCaja");
    caja_Biografia.classList.remove("activarCaja");
});


btn_Proyecto.addEventListener("click", function(){
   
    caja_Proyectos.classList.add("activarCaja");
    caja_Destacado.classList.remove("activarCaja");
    caja_Biografia.classList.remove("activarCaja");
});

btn_Biografia.addEventListener("click", function(){

    caja_Biografia.classList.add("activarCaja");
    caja_Proyectos.classList.remove("activarCaja");
    caja_Destacado.classList.remove("activarCaja");
});