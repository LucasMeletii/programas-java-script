chefe()

function chefe(){
    var vetor = []//declara vetor
    exer7(vetor)//estamos passando o vetor como parametro - escopo global
    calculaMedia(vetor)

}

function exer7(vet){//vet representa vetor -> o que fizemos com vet, será feito em vetor   

    var numero = Number(prompt(`informe um numero`))
    do{
        
        //coloca o numero em vet
        vet.push(numero)
        numero = Number(prompt(`informe outro numero, informe negativo para encerrar`))

    }
    while(numero >= 0)

}
function calculaMedia(){
    var soma =0
    for(var i=0; i < vet.length; i++){
        soma = soma +vet[i]
    }
    console.log(`a média é ${soma/vet.length}`)
}