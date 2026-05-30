let bolos = [
    {
        "nome": "Milho",
        "imagem": "img/milho.webp",
        "link":"TelaDetalheMilho.html" 
    },
    {
        "nome": "Nata",
        "imagem": "img/nata.webp",
        "link":"TelaDetalheNata.html"
    },
    {
        "nome": "Goiabada",
        "imagem": "img/goiabada.webp",
        "link": "TelaDetalheGoiabada.html"
    },
]



bolos.map((bolo)=> {
    let cardBolo = document.getElementById("cardbase");
    cardBolo.innerHTML += `
        
        <form action="${bolo.link}">
            <button class="card">
                <img src="${bolo.imagem}" alt="">
                <h2>${bolo.nome}</h2>
            </button>                
        </form>
    
    
    `

})