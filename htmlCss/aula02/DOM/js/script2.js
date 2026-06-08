
function mudarOpcao(corEscolhida) {
    

    const imagem = document.getElementById('imagem-produto');
    const titulo = document.getElementById('titulo-produto');

  
    let novaUrlImagem = '';
    let novaCorTexto = '';

    if (corEscolhida === 'azul') {
        novaUrlImagem = 'https://placehold.co/400x300/blue/white?text=Tenis+Azul';
        novaCorTexto = '#0000ff'; 
    } 
    else if (corEscolhida === 'vermelho') {
        novaUrlImagem = 'https://placehold.co/400x300/red/white?text=Tenis+Vermelho';
        novaCorTexto = '#cc0000'; 
    } 
    else if (corEscolhida === 'verde') {
        novaUrlImagem = 'https://placehold.co/400x300/green/white?text=Tenis+Verde';
        novaCorTexto = '#008000'; 
    }

 
    imagem.src = novaUrlImagem;
  
    titulo.style.color = novaCorTexto; 
}