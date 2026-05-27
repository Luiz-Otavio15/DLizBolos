let bolos = [
    {
        "nome": "Milho",
        "imagem": "img/milho.webp", 
    },
    {
        "nome": "Nata",
        "imagem": "img/nata.webp"
    },
    {
        "nome": "Goiabada",
        "imagem": "img/goiabada.webp"
    },
]



bolos.map((bolo)=> {
    let cardBolo = document.getElementById("cardbase");
    cardBolo.innerHTML += `
        
        <form action="" class="card">
            <div>
                <img src="${bolo.imagem}" alt="">
                <h2>${bolo.nome}</h2>
            </div>                
        </form>
    
    
    `

})