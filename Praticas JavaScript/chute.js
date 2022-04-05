function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
};


let acertou = false 

while (acertou === false) {

    const aleatorio = getRandom(10);
    const numeroChute = getRandom(10)
    
    if(numeroChute > aleatorio){
        console.log('Seu chute foi maior que  o valor gerado')
    }
    if(numeroChute < aleatorio){
       console.log('Seu chute foi menor que o valor gerado')
    }
    if(numeroChute === aleatorio){
        acertou = true
        console.log('Você acertou!') 
    }
}

