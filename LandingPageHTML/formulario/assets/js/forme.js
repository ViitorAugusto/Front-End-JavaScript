 class ValidarFormulario {
        
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();

            }

        eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checkInputs();
        const senhaValidas = this.validaSenha();

        if(camposValidos && senhaValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    validaSenha() {
        let = valid = true;
        
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if ( senha.value !== repetirSenha.value) {
            valid = false;
            this.criarErro(senha, 'Senhas não conferem');
            this.criarErro(repetirSenha, 'Senhas não conferem');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criarErro(senha, 'Senha deve ter entre 6 e 12 caracteres');
        }

        return valid;
    }


    checkInputs() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error')) {
            errorText.remove();
        } // Faz com que nao carregue mais de uma vez o erro
        
        for(let campo of this.formulario.querySelectorAll(`.validar`)){
            const label = campo.previousElementSibling.innerText; // elemento irmao anterior
            
            if (!campo.value) {
                this.criarErro(campo,`Campo "${label}" tal não pode estar em branco`);
                valid = false;
            }

                if (campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
                }

                if (campo.classList.contains('usuario')) {
                    if(!this.validaUsuario(campo)) valid = false;
                    }

        }
        return valid;
    }
        validaUsuario(campo) {
            const usuario = campo.value;
            let valid = true;
           
            if (usuario.length <3 || usuario.length >12) {
                this.criarErro(campo, 'Usuário deve ter entre 3 e 12 caracteres');
                valid = false;
            }

            if (!usuario.match(/^[a-zA-z0-9]+$/g)) {
                this.criarErro(campo, ' Numero usuário precisa conter apenas letras e números');
                valid = false;
            }

            return valid;
        }




        validaCPF(campo) {
        const cpf = new ValidaCpf(campo.value);

        if(!cpf.valida()) {
            this.criarErro(campo, 'CPF Inválido');
            return false;
        }
        return true;
        }


    criarErro(campo, mensagem) { 
        const divErro = document.createElement('div');
        divErro.classList.add('error');
        divErro.innerHTML = mensagem;
        campo.insertAdjacentElement('afterend', divErro);
    }

     

    
 
}
   const validar = new ValidarFormulario();