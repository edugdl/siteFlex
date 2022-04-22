$(document).ready(function(){
    if(window.screen.width <= 800 
        && !window.location.href.includes("index-mo.html")){
        window.location.href = 'index-mo.html';
    }else if(window.screen.width > 800 
        && !window.location.href.includes("index.html")){
        window.location.href = 'index.html';
    }
    let sideBarN = 2;
    $('#botao-sideBar').click(function(){
        document.querySelector("#nav-sideBar").classList.toggle("aparecer");
        if(sideBarN % 2 == 0){
            document.getElementById("nav-sideBar").style.display = "flex";
        }else{
            document.getElementById("nav-sideBar").style.display = "none";
        }
        sideBarN++;
    });
});