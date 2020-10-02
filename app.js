const resp = document.querySelector("#resp")
const btn = document.querySelector(".btn")
const btn_cadastro = document.querySelector(".btn-cadastro")
const autor = document.querySelector("#autor")

const frases = [
    {
        frase: '"Para dobrar a minha alma é preciso fazer o que eu não quero para um dia ter a capacidade de não fazer o que quero."',
        autor: 'São João da Cruz'
    },
    {
        frase: '"A tristeza não terá lugar no coração que ama a vontade de Deus. O meu coração, na saudosa ânsia de Deus, experimenta toda esta miséria do exílio. Sigo corajosamente - embora os meus pés se machuquem - até a minha pátria, e nesse caminho fortifico-me com a vontade de Deus, que é o meu alimento. Ajudai-me, também vós felizes moradores da pátria celeste, para que esta vossa Irmã não caia pelo caminho. Embora seja terrível o deserto, ando com a cabeça erguida e olho para o Sol- isto é, para o coração misericordioso de Jesus. "',
        autor: 'diário, 886'
    }, 
    {
        frase: 'Não sei verdadeiramente como se pode pensar na Rainha dos Anjos, no tempo em que passou com o Menino Jesus, sem dar graças a São José, pelo auxílio que lhes prestou.', 
        autor: ' Santa Teresa de Jesus'
    },
    {
        frase: 'Aprenda no coração de sua Mãe como se ama a Jesus.',
        autor: 'Beata Maria Maravilhas de Jesus'
    },
    {
        frase: 'Não te iludas: precisas de amparo. E esse amparo é a humilde Virgem Maria, posta por Deus para ser esteio de nossa fragilidade, como outrora para sustento, defesa e guarda da infância do Verbo Encarnado.',
        autor: 'Serva de Deus, Madre Maria José de Jesus'
    }
    
]


function sorteio() {
    let i = Math.random()*frases.length //Math.random() retorna um número entre 0 e 1. Ao multiplicar pelo tamanho do array eu garanto que não vá vir números maiores que o length
    console.log(Math.floor(i)) // Math.floor(num) retorna o maior inteiro que é menor que num
    i = Math.floor(i)
    resp.innerHTML=frases[i].frase
    autor.innerHTML=frases[i].autor
}

function aparecer() {
    document
        .querySelector(".entrada")
        .classList
        .toggle("hide")
        
}


btn.addEventListener("click", sorteio)
btn_cadastro.addEventListener("click", aparecer)

