var form = document.getElementById('form-atividade')
var imgAprovado = '<img src="images/images/aprovado.png" alt="Emoji festejando">'
var imgReprovado = '<img src="images/images/reprovado.png" alt="Emoji triste">'
var atividades = []
var notas = []
var spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
var spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
var notaMinima = parseFloat(prompt('Digite a nota mínima: '))

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaNotaFinal()
})

function adicionaLinha() {
    let inputAtividade = document.getElementById('nome-atividade')
    let inputNota = document.getElementById('nota')

    if (atividades.includes(inputAtividade.value)) {
        alert(`A atividade: ${inputAtividade.value} já foi inserida.`)
    } else {
        atividades.push(inputAtividade.value)
        notas.push(parseFloat(inputNota.value))

        let linha = '<tr>'
        linha += `<td>${inputAtividade.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputAtividade.value = ''
    inputNota.value = ''
}

function atualizaTabela() {
    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaNotaFinal() {
    let mediaFinal = calculamediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal > notaMinima ? spanAprovado : spanReprovado

    console.log(somaDasNotas)
}

function calculamediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
    
}