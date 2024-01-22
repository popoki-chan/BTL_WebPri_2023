const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

;(() => {

    // Change form
    const changeBtns = $$(".form-change")

    changeBtns[0].onclick = () => {
        $('.signin').classList.remove('open')
        $('.signup').classList.add('open')
    }
    changeBtns[1].onclick = () => {
        $('.signup').classList.remove('open')
        $('.signin').classList.add('open')
    }

    // Check input
    const mtCheck = () => {
        const activeInputs = $$('.form.open .field')
        for(input of activeInputs) {
            if(input.value.trim() == '') return false
        }

        return true
    }

    const inputs = $$('.field')  
    for(input of inputs) {
        input.oninput = () => {
            const submitBtn = $('.form.open .submit')
            if(mtCheck() == true) {
                submitBtn.classList.add('active')
            } else {
                submitBtn.classList.remove('active')
            }
        }
    }
    
    // Toggle password
    const togglePasswords = $$(".togglePassword")         
    for(toggleBtn of togglePasswords) {
        toggleBtn.onclick = (e) => {
            const password = e.target.parentNode.querySelector('input')
            if(password.type == "password") {
                password.type = "text"
            } else {
                password.type = "password"
            }

            e.target.classList.toggle('fa-eye-slash')
            e.target.classList.toggle('fa-eye')
        }
    }

    // Validate password 
    const registPassword = $(".signup .password")
    const checkPassword = $(".signup .checkPassword")

    // fix submit
    const fixSubmits = $$('.submit')
    for (fixSubmit of fixSubmits) {
        fixSubmit.onclick = (e) => {
            e.preventDefault();
        }
    }
})();