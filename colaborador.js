function carregaInfoColab() {
    var strUser = localStorage.getItem("userHE");
    var objUser = JSON.parse(strUser);

    var img = `<img src="${objUser.linkFoto}" width="100%">`;
    var info = `Nome : ${objUser.nome} <br>
                RACF : ${objUser.racf} <br>
                Email: ${objUser.email} <br>`;

    document.getElementById("imgUsuario").innerHTML = img;
    document.getElementById("infoUsuario").innerHTML = info;

    var relatorio = "";
    for (i = 0; i < objUser.listaOcorrencias.length; i++) {
        var oc = objUser.listaOcorrencias[i];
        var just;
        if (oc.status == 1) {
            just = "Justificada";
        }
        else {
            just = "Pendente";
        }
        relatorio = relatorio +
           `<div class="row">
            <div class="col-2"><a href="justificativa.html?num=${oc.numSeq}">${oc.data}</a></div>
            <div class="col-4">${oc.atividade.nome_atividade}</div>
            <div class="col-1">${oc.numHoras}</div>
            <div class="col-4">${oc.descricao}</div>
            <div class="col-1">${just}</div>
            </div>`;
    }
    document.getElementById("relatorio").innerHTML = relatorio;
}

function logout() {
    localStorage.removeItem("userHE");
    window.location = "index.html";
}

