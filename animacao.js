$(document).ready(function(){
    let navCount = 0;
    $('#botao-sideBar').click(function(){
        let nav = document.querySelector("#nav-sideBar");
        nav.classList.toggle("aparecer");
        if(navCount>0){
            nav.classList.toggle("desaparecer");
        }else if(navCount==0){
            nav.classList.toggle("pre-aparecer");
        }
        navCount++;
    });
});