let bolos = [
    {
        "nome": "Milho",
        "imagem": "img/milho.webp", 
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Nata",
        "imagem": "img/nata.webp",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Goiabada",
        "imagem": "img/goiabada.webp",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Comum",
        "imagem": "img/comum.jpg",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Formigueiro",
        "imagem": "img/formigueiro.webp",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Cenoura",
        "imagem": "img/cenoura.webp",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Leite",
        "imagem": "img/leite.jpg",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Mesclado",
        "imagem": "img/mesclado.jpg",
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Chocolate",
        "imagem": "img/chocolate.webp",
        "link": "TelaDetalheMilho.html",
    },
]



bolos.map((bolo)=> {
    let cardBolo = document.getElementById("cardbase");
    cardBolo.innerHTML += `
        
        <form action="${bolo.link}" class="card">
            <button>
                <img src="${bolo.imagem}" alt="">
                <h2>${bolo.nome}</h2>
            </button>                
        </form>
    
    
    `

})