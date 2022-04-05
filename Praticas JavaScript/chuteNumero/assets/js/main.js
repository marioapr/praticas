function chute () {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
    const inputChute = e.target.querySelector('.chute');
    

    const aleatorio = getRandom(10)

    let acertou = false;
    let msg;
    let chute = Number(inputChute.value)
    while (acertou == false) {
        
    if(chute > aleatorio){
        return msg ='Seu chute foi maior que  o valor gerado'
    }
    if(chute < aleatorio){
        return msg = 'Seu chute foi menor que o valor gerado'
    }
    if(chute === aleatorio){
        acertou = true
        return msg ='Você acertou!'
    }
};

setResultado(msg);
    });

    function criaP() {
        const p = document.createElement('p')
        return p 
    };

    function setResultado (msg) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML =" ";
        const p = criaP();
        p.innerHTML = msg
        resultado.appendChild(p)
    
    };

    function getRandom(max) {
        return Math.floor(Math.random() * max + 1)
    };
};

const Tentativachute = chute();