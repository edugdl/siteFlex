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
    $('#avaliacao').click(function(){
        document.getElementById("estrelas").style.display = 'flex';    
    });
    $('#sugestao').click(function(){
        document.getElementById("estrelas").style.display = 'none';    
    });
    $('#btn_enviar').click(function(){
        let nome = document.querySelector("#input-nome").value;    
        let email = document.querySelector("#input-email").value;    
        let telefone = document.querySelector("#input-telefone").value;    
        let check_sugestao = document.querySelector("#sugestao").checked;    
        let check_avaliacao = document.querySelector("#avaliacao").checked;      
        let textarea = document.querySelector("textarea").value;   
        
    });
});
