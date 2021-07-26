const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {
        user,
        email,

    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    

    let formGroup = document.getElementById('form-group');
    let loading = `<img src=https://static.vecteezy.com/ti/vetor-gratis/t2/2427868-simple-loading-round-black-icon-design-white-background-vetor.jpg">`
    let cadastrado = `<p style="font-size:30px;text-align:center;">Cadastro realizado com sucesso! Aproveite!</p>`
    let retorno = `<p>Seja bem vindo ${user}</p> você se cadastrou `  
   
    formGroup.innerHTML = loading
    
    setTimeout(() => {
        formGroup.innerHTML = cadastrado  
    }, 1000)

    loading
});

function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu')
    const navigation = document.querySelector('.navigation')
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}
/*
var logado = false;
var mostrarFormProduto = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log("Bem vindo, Entrou")
};

if(logado != true){
    alert("Voce não está autenticado!!! retorne e faça login");
    window.location.href = "login.html";
}

function controleFormProduto(){
    mostrarFormProduto = !mostrarFormProduto;
    var form = document.getElementById("formProduto");


    if(mostrarFormProduto){
        form.style.display = "block";

    }else{
        form.style.display = "none";
    }
}

function cadastraProduto(){
    var login-form = document.getElementById("login-form");

    
}
*/
