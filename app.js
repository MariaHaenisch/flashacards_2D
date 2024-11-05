function criaCartao(categoria, pergunta, resposta){
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
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
    let container = document.getElementById('container')
    container.appendChild(cartao)
}
