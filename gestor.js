function carregaInfo(){
    // recupero do LocalStorage aquilo que eu armazenei
    var strUser = localStorage.getItem("userHE");
    // vou converter essa string para um objeto e manipulá-lo
    var objUser = JSON.parse(strUser);
    
    var img = `<img src="${objUser.linkFoto}" width="100%">`;
    var info = `Nome : ${objUser.nome} <br>
                RACF : ${objUser.racf} <br>
                Email: ${objUser.email} <br>`;
    
    document.getElementById("imgUsuario").innerHTML = img;
    document.getElementById("infoUsuario").innerHTML = info;
   }
   function gerarRelatorio(){
    var status = document.getElementById("selectFiltro").value;
    console.log("Selecionado = "+status);
    var URL="http://localhost:8088/ocorrencias";
    if (status == 1){
    URL = URL + "/status/1";
    }
    else if (status == 0){
    URL = URL + "/status/0";
    }
    
    fetch(URL)
    .then(res => res.json()).then(lista => preencheLista(lista));
   }
    
   function preencheLista(lista){
    /*
    racf 1
    colab 2
    data 1
    horas 1
    atividade 2
    descricao 3
    ajuste 1
    status 1
    
    */
    var relatorio = "";
    
    for (i=0; i<lista.length; i++){
    // para facilitar leitura
    var oc = lista[i];
    relatorio = relatorio + 
    `
    <div class="row"> 
    <div class="col-1">${oc.colaborador.racf}</div>
    <div class="col-2">${oc.colaborador.nome}</div>
    <div class="col-1">${oc.data}</div>
    <div class="col-1">${oc.numHoras}</div>
    <div class="col-2">${oc.atividade.nome_atividade}</div>
    <div class="col-3">${oc.descricao}</div>
    <div class="col-1">${oc.pontoManual}</div>
    <div class="col-1">${oc.status}</div>
    
    </div> 
    `;
    
    }
    document.getElementById("relatorio").innerHTML = relatorio;
   }