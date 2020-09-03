chefe()
function chefe(){

    //escopo local
    let vendas = []
    let vendedores = []
    cadastraVendedor(vendedores)//essa passagem é por referencia e torna o vetor de escopo local
    do{
        let opcao = Number(prompt(`escolha \n [1], cadastrar vendedor\n [2], cadastra venda \n[3], sair`))
        switch(opcao){
            case 1 : cadastraVendedor(vendedores)
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: console.log(`tchau`)
            default: console.log(`tente novamente`)
        }
    }
    while(opcao != 3)
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