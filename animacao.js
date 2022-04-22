$(document).ready(function(){
    if(window.screen.width <= 800 
        && !window.location.href.includes("index-mo.html")){
        window.location.href = 'index-mo.html';
    }else if(window.screen.width > 800 
        && !window.location.href.includes("index.html")){
        window.location.href = 'index.html';
    }
    $('#botao-sideBar').click(function(){
        let nav = document.querySelector("#nav-sideBar");
        nav.classList.toggle("aparecer");
        nav.classList.toggle("desaparecer");
        navCount++;
    });
});