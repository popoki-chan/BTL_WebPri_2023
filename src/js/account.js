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
            const checkPassword = $(".signup .passwordCheck")

            checkPassword.onblur = (e) => {
                if(e.target.value != $(".signup .password").value) 
                    e.target.parentNode.parentNode.classList.add("error")
            }
            
            checkPassword.oninput = (e) => {
                e.target.parentNode.parentNode.classList.remove("error")
            }

            registPassword.onblur = (e) => {
                if(e.target.value == $(".signup .password").value || $(".signup .password").value.trim() == "") 
                    checkPassword.parentNode.parentNode.classList.remove("error")

            }

            registPassword.oninput = (e) => {
                const value = e.target.value

                const check = (require, requireName) => {
                    if(require) {
                        $(`.below-desc.${requireName}`).classList.add('checked')
                    } else {
                        $(`.below-desc.${requireName}`).classList.remove('checked')
                    }
                }

                check(value.length >= 8, "length")

                const charRegex = /(?=.*[a-z])(?=.*[A-Z])/
                check(charRegex.test(value), "char")

                const digitRegex = /(.*\d.*)/
                check(digitRegex.test(value), "numRequire")
            }


            // fix submit 
            const submitBtns = $$(".submit")
            for(submitBtn of submitBtns) {
                submitBtn.onclick = (e) => {
                    e.preventDefault()
                }
            }

        })();