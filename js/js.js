
function validar() {
var nome = form1.nome.value;
var email = form1.email.value;
var tel = form1.tel.value;
var assunto = form1.assunto.value;
var area = form1.area1.value;
var maxCaractere = 32;
var maxCaractereTel = 14;
var elemento = document.getElementById('valor');
var valor = elemento.value;

tel = tel + ""; 
tel= parseInt(tel.replace(/[\D]+/g,''));

if (nome == "") {
alert('Preencha o campo com seu nome');
form1.nome.focus();
form1.nome.style.borderColor = "red";
return false;
}

if (email == "") {
alert('Preencha o campo com seu email');
form1.email.focus();
form1.email.style.borderColor = "red";
return false;
}



if (valor == "") {
alert('Informe seu telefone para contato');
form1.tel.focus();
form1.tel.style.borderColor = "red";
return false;
}

if (valor.length < 14) {
alert('Número de telefone incompleto');
form1.tel.focus();
form1.tel.style.borderColor = "red";
return false;
}



if (assunto == "") {
alert('Informe o assunto');
form1.assunto.focus();
form1.assunto.style.borderColor = "red";
return false;
}

if (nome.length < 5) {
alert('Digite seu nome completo');
form1.nome.focus();
form1.nome.style.borderColor = "#e6b30ece";
return false;
}

if (area == "") {
alert("Qual sua duvida?");
form1.area1.focus();
form1.area1.style.borderColor = "red";
return false;
}

if (area.length < maxCaractere) {
  

  form1.area1.focus();
  form1.area1.style.borderColor = "#e6b30ece";
  
  
  var confirma = confirm("Quanto mais detalhes, melhor poderemos lhe ajudar, deseja proceguir?")
  if(confirma == true){
    return true;
  }else{
    return false;
  }
  }
 

}


function formatarMoeda() {
  var elemento = document.getElementById('valor');
  var valor = elemento.value;
  
  
  valor = valor + '';
  valor = parseInt(valor.replace(/[\D]+/g,''));

  if (!isNaN(valor)) {
    valor = valor + '';
    valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");
   
  }
  
 
  
  else {
     valor = '';
  }

  elemento.value = valor;
}
  
function checarEmail(){
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 
       || document.forms[0].email.value.indexOf('.')==-1 )
    {
       alert( "Por favor, informe um E-MAIL válido!" );
       return false;
    }
  }
  
function checarFile(){
   file = getElementById("input-file").value;

  if(file == null){
    alert("Anexe sua conta para analisarmos");
    file.focus();
    file.style.borderColor = "red";
    return false;
  }
}