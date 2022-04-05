function saudacao(hora){
    if( hora >= 6 && hora <= 12) console.log('Bom dia!');
    if( hora >= 13 && hora <= 18) console.log('Boa tade!');
    else console.log('Boa noite!');
};

saudacao(17)