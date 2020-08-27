chefe()

function chefe(){
    var numero = Number(prompt(`informe um numero`))
    exerc9(numero)
}

function exerc9(num){//supondo num =6
    var soma = 0
    for(var divisor=num; divisor >= 1; divisor--){//divisor começa em 6 e vai ate 1
        if (num % divisor ==0){
            soma = soma + divisor
        }
    }
    console.log(`a soma do divisor de ${num} é ${soma}`)
}