let form = document.getElementById('form-atividade')
let imgAprovado = '<img src="images/images/aprovado.png" alt="Emoji festejando">'
let imgReprovado = '<img src="images/images/reprovado.png" alt="Emoji triste">'

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let inputAtividade = document.getElementById('nome-atividade')
    let inputNota = document.getElementById('nota')

    let linha = '<tr>'
    linha += `<td>${inputAtividade.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha

    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputAtividade.value = ''
    inputNota.value = ''
})