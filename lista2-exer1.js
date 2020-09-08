chefe()
function chefe(){

    //escopo local
    let vendas = []
    let vendedores = []
    cadastraVendedor(vendedores)//essa passagem é por referencia e torna o vetor de escopo local
    do{
        let opcao = Number(prompt(`escolha \n [1], cadastrar vendedor\n [2], cadastra venda \n[3], \n[4], \n[5] \n[6], \n[7] sair`))
        switch(opcao){
            case 1 : cadastraVendedor(vendedores)
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: ConsultaVendasFuncionario(vendas)
                    break
            case 5: consultaVendedorMes(vendas)
                    break
            case 6: consultaMes(vendas) 
                    break
            case 7: console.log(`tchau`)
            default: console.log(`tente novamente`)
        }
    }
    while(opcao != 7)
}

function consultaMes(vdas){
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    //vamos preenchendoo vetor com as somas
    for(let i=0; i<vdas.length; i++){
        let posicao = vdas[i].mes -1 //descubro a posição para colocar  
        meses[posicao] = meses[posicao] + vdas[i].valor //acumula valor  
        
    }
    let maiorValor = meses[0]//assumo que é janeiro
    for(let i=0; i<meses.length; i++){
        if(meses[i] > maiorValor){
            maiorValor = meses[i]
        }
    }
    //encontramos a posicao do maior valor vendido  
    let posicao = meses.indexOf(maiorValor)
    console.log(`o mês que mais vendeu ${posicao+1}`)

}


function consultaVendedorMes (vdas){
    let mes = Number(prompt(`informe o mês`))
    let maiorVenda = 0
    let vendedorMaisVendeu = 0
    for(let i=0; i<vdas.length; i++){
        if (vdas[i] == mes){
            if(vdas[i].valor > maiorVenda){
                maiorVenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor
            } 
        }
    }
    console.log(`vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)

}

function consultaVendasFuncionarioMes(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`informe o mes da venda`))
    //percorre vetor vendas
    for (let i=0; i<vdas.length; i++){
        //recupera somente o mes da data -> getMonth()
        if((vdas[i].vendedor == vendedor)&& (vdas[i].mes.getMonth() == mes)){//encontrei a venda naquele mes
            console.log(`valor da venda ${vdas[i].valor}`)
            return//sai da funcao
        }
    }
    console.log(`não existe venda para este funcionário neste mês`)
}

function consultaVendasFuncionario(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    //percorre vetor vendas
    let soma = 0
    for (let i=0; i<vdas.length; i++){
        if(vdas[i].vendedor == vendedor){ //encontrei a venda 
           soma = soma + vdas[i].valor 
            
        }
    }
    console.log(`A soma das vendas é ${soma}`)
}

function cadastraVendedor(vended){ //vended representa o vetor vendedores

    let objeto = new Object()
    objeto.codigo = Number(prompt(`informe o codigo do vendedor`))
    objeto.nome = prompt(`informe o nome do vendedor`)
    //verifica se o codigo existe
    for (let i=0; i < vended.length; i++){
        if(vended[1].codigo == objeto.codigo){
          console.log(`cadastro cancelado pois ja existe um vendedor com este codigo `)
        return 0 //sai da função pois n vamos cadastrar  
        }
        
    }
    //insere no vended, mas na verdade insere nos vendedores
    vended.push(objeto)
}

function cadastraVendas(vdas, vdes){//vdas =vendas    vdes=vendedores

    let objeto = new Object()
    objeto.codigo = Number(prompt(`informe o codigo da venda`))
    objeto.vendedor = prompt(`informe o codigo do vendedor`)
    objeto.mes = Number(prompt(`informe mes da venda`))
    objeto.valor = Number(prompt(`informe o valor da venda`))
    //verifica se o vendedor existe 
    //percorre o vetor de vdes
    for(let i=0; i<vdes.length; i++){
        if(objeto.vendedor == vdes[i].codigo){//achamos o vendedor
            //verifica se existe venda para este vendedor nesse mes - nao podemos registrar venda
            for(let j = 0; j < vdes.length; j++){
                if((objeto.mes == vdes[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                    console.log(`nao podemos registrar a venda`)
                    return 0 //sai da funcao
                }
            }
            //ja percorreu e n achou, entao vamos inserir   
            vdas.push(objeto)
            console.log(`venda registrada`)
            return 0 //sai da funcao

        }
    }
    console.log(`vendedor n existe`)
}
