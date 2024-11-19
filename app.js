function criaCartao(categoria, pergunta, resposta){
    let Cartao = document.createElement('article')
    Cartao.className = 'Cartao'
    Cartao.innerHTML = `
   <div class="Cartao__Conteudo">
                    <h3>${categoria}</h3>
                    <div class="Cartao_Conteudo_Pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="Cartao__Conteudo_Resposta">
                        <p>${resposta}</p>
                    </div>
                </div>
    `
    let respostaEstaVisivel = false
    function viraCartao (){
        respostaEstaVisivel = !respostaEstaVisivel
        Cartao.classList.toggle('active', respostaEstaVisivel)
    }
cartao.addEventListener('click', viraCartao)
    let container = document.getElementById('container')
    container.appendChild(cartao)
}
