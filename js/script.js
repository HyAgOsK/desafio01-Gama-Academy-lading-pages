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
    let loading = `<img src="./assets/loading.jpg">`
    let cadastrado = `<p style="font-size:30px;text-align:center;">Cadastro realizado com sucesso!</p>`

    formGroup.innerHTML = loading

    setTimeout(() => {
        formGroup.innerHTML = cadastrado
    }, 1000)
})

function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu')
    const navigation = document.querySelector('.navigation')
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}