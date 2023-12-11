function obterListaVeiculo(){
    return JSON.parse(localStorage.getItem('veiculo')) || [];
}

function salvarListaVeiculo(lista){
    localStorage.setItem('veiculo', JSON.stringify(lista));
}

let listaRevenda = obterListaVeiculo();

function Adicionar(){
    const modelo = document.getElementById("modelo").value;
    const preco = document.getElementById("preco").value;

    Number(preco);
    listaRevenda.push({modelo: modelo, preco: preco});
    console.log(listaRevenda);

    limparInput();
}

function limparInput(){
    document.getElementById("modelo").value = "";
    document.getElementById("preco").value = "";
}

function Listar(){
    if(listaRevenda.length == 0){
        alert("Não há veículos na lista!")
        return;
    }
    let vazio = "";
    for(let i = 0; i < listaRevenda.length; i++){
        vazio += listaRevenda[i].modelo + " • R$: " +  listaRevenda[i].preco + "<br>";
    }
    document.getElementById("texto").innerHTML = vazio;
    }

//let listaFiltrados = []; //criando uma lista de filtrados

function Filtrar(){
    let valorfiltro = prompt("Digite o preço que deseja filtrar:");
    Number(valorfiltro);
    console.log(valorfiltro);
    let lista = "";
    for(i = 0; i < listaRevenda.length; i++){
        if(listaRevenda[i].preco <= valorfiltro){
            lista += "Veículos com preço menor que R$ " + valorfiltro + ": " + "<br>" + listaRevenda[i].modelo + " • R$: " +  listaRevenda[i].preco + "<br>";
            document.getElementById("filtro").innerHTML = lista;
            console.log(lista);
        }
    }
}