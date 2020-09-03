chefe()

function chefe(){
    //nao vamos declarar variaveis usando a palavra-chave var(escopo global)
    //vamos usar let(escopo local)
    let vetor = []//vai existir apenas dentro desta função

    do{
        var opcao = Number(prompt(`digite \n [1]  entrada \n  [2]media idade \n [3] maior idade \n [4] qtde\n [5] percentual\n[6] sair`))
        switch(opcao){
            case 1: entrada(vetor)
                    break
            case 2: calcularMedia(vetor)
                    break
            case 3: calcularMaioridade(vetor)
                    break
            case 4: quantidade(vetor)
                    break
            case 5: percentual(vetor)
                    break
            case 6: console.log(`obrigado por usar nosso programa`)
                    break
            default: console.log(`opção inválida, tente novamente`)
        }

    }
    while(opcao !=6)

    
    }

    function entrada(vet){
        console.log(`entrou na função entrada`)
        //cria objeto
        let objeto = new Object()
        objeto.sexo = prompt(`qual o sexo? informe F para feminino e M masculino`).toUpperCase()//converte letra maiúscula
        objeto.altura = Number(prompt(`Informe a altura`))
        objeto.idade  = Number(prompt(`informe a idade`))
        objeto.olhos = prompt(`informe a cor dos olhos, A (azuis) C(castanho) V(verde)`).toUpperCase()
        //vamos inserir em vetor e nao em vet
        vet.push(objeto)
        console.log(`habitante inserido com sucesso`)
    }

    function calcularMedia(vet){//vet vai apontar para setor 
        console.log(`entrou na função calcular media`)
        let soma=0//soma das idades
        let qtde=0//conta as pessoas que tem olhos castanhos superiores a 1.60
        for(let i=0; i<vet.length; i++){
            if((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
                soma = soma + vet[i].idade
                qtde++
            }
        }
        console.log(`a media da idade é ${soma/qtde}`)
    }

    function calcularMaioridade(vet){
        let maiorIdade = vet[0].idade
        for(let i=1; i < vet.length; i++){
            if(vet[i.idade > maiorIdade]){
                maiorIdade = vet[i].idade //atualiza maior idade
            }
        }
        console.log(`entrou na função calcular maior idade  `)
    }

    function quantidade(vet){
        console.log(`entrou na função calcular quantidade`)
        let qtde =0
        for(let i=0;i<vet.length; i++ ){
            if(((vet[i].sexo == "F") && (vet[i].altura < 1.70))){
                qtde++
            }
        }
        console.log(`a qtde é de ${qtde}`)
    }

    function percentual(vet){
        console.log(`entrou na função calcular percentual`)
        let conta = 0
        for(let i=0; i<vet.length; i++){
            if(vet[i].sexo == "M"){
                conta++
            }
        }
        console.log(`o percentualde homens é ${(conta/vet.length)*100}`)

    }
    
    
