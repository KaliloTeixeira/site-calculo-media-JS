function iniciar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var data = new Date();
    var hora = data.getHours();
    var nome = window.prompt("Qual é o seu nome?");

    if(nome == 'null'){
        nome='';
    }
    if(hora >= 5 && hora <13){
        img.src='images/manha.png';
        msg.innerHTML=`Bom Dia, ${nome}`;
        document.body.style.background='rgb(113, 175, 233)';
    } else {
        if (hora >= 13 && hora < 18){
            img.src='images/tarde.png';
            msg.innerHTML=`Boa Tarde, ${nome}`;
            document.body.style.background='rgb(235, 171, 88)';
        } else {
            img.src='images/noite.png';
            msg.innerHTML=`Boa Noite, ${nome}`;
            document.body.style.background='rgb(54, 61, 68)';
        }
    }
}
function media(){
    var not1 = parseFloat(document.getElementById('nota1').value);
    var not2 = parseFloat(document.getElementById('nota2').value);
    var not3 = parseFloat(document.getElementById('nota3').value);
    med = (no1+not2+not3)/3;
    document.getElementById('resultado')=med;
}