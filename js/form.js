const botao = document.querySelector('#adicionar-aluno')

botao.addEventListener('click', function(){
    event.preventDefault()

    let formulario = document.querySelector('#form-aluno')
    let dadosAluno = validaForm(formulario)
	console.log(dadosAluno.jNome)
	console.log(dadosAluno.jN1)
	console.log(dadosAluno.jN2)
	console.log(dadosAluno.jN3)
	console.log(dadosAluno.jMediaFinal)
	console.log(dadosAluno.jSituacao)
	
})
function validaForm(meuForm){
    if(meuForm.querySelector('#nome').value == ""){
        alert('Obrigatório o preenchimento dos campos!!!')
        meuForm.querySelector('#nome').Focus()
    }
    else if (meuForm.querySelector('#n1').value == ""){
        alert('Informar a nota 1 do aluno!!')
        meuForm.querySelector('#n1').Focus()
    } else if(isNaN(meuForm.querySelector('#n1').value)){
        alert('Informar apenas valores numéricos no campo nota 1')
        meuForm.querySelector('#n1').value = ""
        meuForm.querySelector('#n1').Focus()
    } else if (meuForm.querySelector('#n1').value > 10){
        alert('Informar apenas valores numéricos entre 0 e 10')
        meuForm.querySelector('#n1').value = ""
        meuForm.querySelector('#n1').Focus()
    }
	
    else if (meuForm.querySelector('#n2').value == ""){
        alert('Informar a nota 2 do aluno!!')
        meuForm.querySelector('#n2').Focus()
    } else if(isNaN(meuForm.querySelector('#n2').value)){
        alert('Informar apenas valores numéricos no campo nota 2')
        meuForm.querySelector('#n2').value = ""
        meuForm.querySelector('#n2').Focus()
    } else if (meuForm.querySelector('#n2').value > 10){
        alert('Informar apenas valores numéricos entre 0 e 10')
        meuForm.querySelector('#n2').value = ""
        meuForm.querySelector('#n2').Focus()
    }
	
	else if (meuForm.querySelector('#n3').value == ""){
        alert('Informar a nota 3 do aluno!!')
        meuForm.querySelector('#n3').Focus()
    } else if(isNaN(meuForm.querySelector('#n3').value)){
        alert('Informar apenas valores numéricos no campo nota 3')
        meuForm.querySelector('#n3').value = ""
        meuForm.querySelector('#n3').Focus()
    } else if (meuForm.querySelector('#n3').value > 10){
        alert('Informar apenas valores numéricos entre 0 e 10')
        meuForm.querySelector('#n3').value = ""
        meuForm.querySelector('#n3').Focus()
    } else {
		let jsonAluno = {
			jNome: meuForm.querySelector('#nome').value,
			jN1: meuForm.querySelector('#n1').value,
			jN2: meuForm.querySelector('#n2').value,
			jN3: meuForm.querySelector('#n3').value,
			jMediaFinal:calcularMedia(meuForm.querySelector('#n1').value.replace(",", "."),
						meuForm.querySelector('#n2').value.replace(",", "."),
						meuForm.querySelector('#n3').value.replace(",", ".")),
			jSituacao: mostrarSituacao(calcularMedia(meuForm.querySelector('#n1').value.replace(",", "."),
													meuForm.querySelector('#n2').value.replace(",", "."),
													meuForm.querySelector('#n3').value.replace(",", ".")))[0]
		}
		return jsonAluno
	}
}   