function calcularSalario (){
const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputSalario = e.target.querySelector('.salario') ;
    const inputHoras = e.target.querySelector('.horas');

    const salario = Number(inputSalario.value);
    const horas = Number(inputHoras.value);
    
    const salarioPorHoras = calcula(salario, horas);

    const msg = `Você ganha  R$ ${salarioPorHoras.toFixed(2)} por hora.`

    setResultado(msg)

});

function calcula (salario, horas) {
   const salarioPorHora = salario / horas;
   return salarioPorHora;

};

function criaP () {
    const p = document.createElement('p');
    return p;
};

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML =" ";
    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p)

};

};


const calcular = calcularSalario();

