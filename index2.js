let bolos = [
    {
        "nome": "Milho",
        "imagem": "img/milho.webp", 
        "link": "TelaDetalheMilho.html",
    },
    {
        "nome": "Nata",
        "imagem": "img/nata.webp",
        "link": "TelaDetalheNata.html",
    },
    {
        "nome": "Goiabada",
        "imagem": "img/goiabada.webp",
        "link": "TelaDetalheGoiabada.html",
    },
    {
        "nome": "Comum",
        "imagem": "img/comum.webp",
        "link": "TelaDetalheComum.html",
    },
    {
        "nome": "Formigueiro",
        "imagem": "img/formigueiro-removebg-preview.png",
        "link": "TelaDetalheFormigueiro.html",
    },
    {
        "nome": "Cenoura",
        "imagem": "img/cenoura.webp",
        "link": "TelaDetalheCenoura.html",
    },
    {
        "nome": "Leite",
        "imagem": "img/leite.jpg",
        "link": "TelaDetalheLeite.html",
    },
    {
        "nome": "Mesclado",
        "imagem": "img/mesclado.jpg",
        "link": "TelaDetalheMesclado.html",
    },
    {
        "nome": "Chocolate",
        "imagem": "img/chocolate.webp",
        "link": "TelaDetalheChocolate.html",
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