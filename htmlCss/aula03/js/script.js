// espera o navegador ler todo o HTML antes de ativar os seletores
document.addEventListener('DOMContentLoaded', () => {
    
    // mapeia dos elementos do HTML
    const htmlTag = document.getElementById('html-theme');
    const botaoTema = document.getElementById('btn-tema');
    const botaoBuscar = document.getElementById('btn-buscar');
    const container = document.getElementById('container-cards');

    // Tema claro e escuro --> as variáveis foram p o mapa acima
    function alternarTema() {
        if (htmlTag.getAttribute('data-bs-theme') === 'light') {
            htmlTag.setAttribute('data-bs-theme', 'dark');
            botaoTema.innerHTML = 'Modo Claro';
        } else {
            htmlTag.setAttribute('data-bs-theme', 'light');
            botaoTema.innerHTML = 'Modo Escuro';
        }
    }

    // cosnumindo da API com Cards do Bootstrap
    async function buscarGatinhos() {
        // spinner de carregamento do Bootstrap
        container.innerHTML = `<div class="spinner-border text-primary my-5" role="status"></div>`;

        try {
            const resposta = await fetch('https://api.thecatapi.com/v1/images/search?limit=3');
            const gatinhos = await resposta.json();

            // limpando o Spinner
            container.innerHTML = '';

            // os cards usando o forEach
            gatinhos.forEach(gato => {
                const cardHtml = `
                    <div class="col">
                        <div class="card h-100 shadow-sm bg-body">
                            <img src="${gato.url}" class="card-img-top object-fit-cover" alt="Gatinho" style="height: 250px;">
                            <div class="card-body">
                                <h5 class="card-title text-start">Gatinho #${gato.id}</h5>
                                <p class="card-text text-muted text-start">Gerado dinamicamente via API externa!</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHtml;
            });

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            container.innerHTML = `<div class="alert alert-danger">Ops! Erro ao carregar gatinhos.</div>`;
        }
    }

    // eventos de clique e tirando o onclick q estava dando problema na serialização do HTML
    botaoTema.addEventListener('click', alternarTema);
    botaoBuscar.addEventListener('click', buscarGatinhos);

    // busca os cats automático, depois do carregamento
    buscarGatinhos();
});