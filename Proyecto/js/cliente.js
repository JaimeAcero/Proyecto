
var nuevo = getRandomArbitrary(1, 15);
//indexConsulta();

// JQUERY Consultar base de datos y mostrar en una tabla
$("#table-tab" ).click(function() {
	
	submitConsulta();
	
});


$("#Serie" ).click(function() {
	localStorage.setItem("Type", "serie"); 
});

$("#Peli" ).click(function() {
	localStorage.setItem("Type", "pelicula"); 
});

$("#Corto" ).click(function() {
	localStorage.setItem("Type", "cortometraje"); 
});

 var IndexSave;
 var NickSave;
 var PassSave;
 var MailSave;
 var UserSave;
 var VerMenu;

$("#Fav2" ).click(function() {
	submitFormUpdate();
});


$("#buttonacep" ).click(function() {
	UserConsulta();
});

$("#buttonacep2" ).click(function() {
	UserEntrar();
});


$("#ComGO" ).click(function() {

	submitFormInsertComment();
});

function indexConsulta(){
	console.log("Entró a llamar");
	const rand = [];
	fetch('http://localhost/Proyecto/server/business/ItemConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
	
				
				ActualizarIndex(result);
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function SerieConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost/Proyecto/server/business/ItemConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
				ActualizarSeries(result);
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}


function itemConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost/Proyecto/server/business/ItemConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                ActualizarItem(result);
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}
itemExtra();
function itemExtra(){
	console.log("Entró a llamar");
	fetch('http://localhost/Proyecto/server/business/ItemConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                var i = localStorage.getItem("Index");
				var itemindex = parseInt(i);
				var item = result[itemindex].idItem;
				localStorage.setItem("Find", item); 
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function UserConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost/Proyecto/server/business/UsuarioConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                AdminInsert(result);
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function UserEntrar(){
	console.log("Entró a llamar");
	fetch('http://localhost/Proyecto/server/business/UsuarioConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                InUser(result);
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function VerComentarios(){
	$("#ComSect").remove();
	console.log("Entró a llamar");
	fetch('http://localhost/Proyecto/server/business/ComentariosConsulta.php',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
				$("#ComSect").remove();
                cargarDatos(result);
				
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function getRandomArbitrary(min, max) {
	var aux = Math.random() * (max - min) + min;
	
  return aux.toFixed();
}

VerComentarios();
//	
function cargarDatos(data){
$("#ComSect").remove();
	var selector=localStorage.getItem("Titulo");
	
	console.log("1="+selector);
    for (x in data) {
	if(selector==data[x].item){
		console.log("2="+data[x].item);
	var name = data[x].usuario;
	var body = data[x].cuerpo;
    $("#comments").append("<li class="+"cmmnt"+" id="+"ComSect>"+
	"<div class="+"avatar>"+
	"<img src="+"https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg"+" width="+"55"+" height="+"55"+">"+
	"</div>"+
    "<div class="+"cmmnt-content "+"id="+"CommentBody>"+
    "<header>"+
    "<a"+"class="+"userlink"+"></a>"+name+"<span class="+"pubdate"+"></span>"+
    "</header>"+
	body+
    "</div>"+
    "</li>");
		}
	}
}
  
function ActualizarIndex(data){
	var porcam;
	var porcam1;
	const rand = [];
	const randfix = [];
	var aux;
	var auxfix;
	for (var i=1;i<16;i++){
		rand[i]=Math.random() * (46 - 1) + 1;
		
		auxfix =  rand[i].toFixed();
		randfix[i]= auxfix;
		porcam = "Item"+i+"Portada";
		porcam1 = "Item"+i+"URL";
		aux = randfix[i];
		
	document.getElementById(porcam).src=data[aux].portada;
	document.getElementById(porcam).width=100;
	document.getElementById(porcam).height=250;
	document.getElementById(porcam1).value=randfix[i];
	console.log(porcam1+""+randfix[i]);
	}
	{
	$("#Item1URL").click(function() {
	IndexSave = document.getElementById("Item1URL").value;
	 localStorage.setItem("Index", IndexSave); 
$("#ComSect").remove();	 
	});
	
		$("#Item2URL").click(function() {
	IndexSave = document.getElementById("Item2URL").value;
	 localStorage.setItem("Index", IndexSave);   
	 $("#ComSect").remove();
	});
	
		$("#Item3URL").click(function() {
	IndexSave = document.getElementById("Item3URL").value;
	 localStorage.setItem("Index", IndexSave);   
	 $("#ComSect").remove();
	});
	
		$("#Item4URL").click(function() {
	IndexSave = document.getElementById("Item4URL").value;
	 localStorage.setItem("Index", IndexSave); 
$("#ComSect").remove();	 
	});
	
		$("#Item5URL").click(function() {
	IndexSave = document.getElementById("Item5URL").value;
	 localStorage.setItem("Index", IndexSave);   
$("#ComSect").remove();
	});
	
	$("#Item6URL").click(function() {
	IndexSave = document.getElementById("Item6URL").value;
	 localStorage.setItem("Index", IndexSave);  
$("#ComSect").remove();	 
	});
	
		$("#Item7URL").click(function() {
	IndexSave = document.getElementById("Item7URL").value;
	 localStorage.setItem("Index", IndexSave);  
$("#ComSect").remove();	 
	});
	
		$("#Item8URL").click(function() {
	IndexSave = document.getElementById("Item8URL").value;
	 localStorage.setItem("Index", IndexSave);   
	 $("#ComSect").remove();
	});
	
		$("#Item9URL").click(function() {
	IndexSave = document.getElementById("Item9URL").value;
	 localStorage.setItem("Index", IndexSave);   
	 $("#ComSect").remove();
	});
	
		$("#Item10URL").click(function() {
	IndexSave = document.getElementById("Item10URL").value;
	 localStorage.setItem("Index", IndexSave);  
$("#ComSect").remove();	 
	});
	
		$("#Item11URL").click(function() {
	IndexSave = document.getElementById("Item11URL").value;
	 localStorage.setItem("Index", IndexSave); 
$("#ComSect").remove();	 
	});
	
		$("#Item12URL").click(function() {
	IndexSave = document.getElementById("Item12URL").value;
	 localStorage.setItem("Index", IndexSave);  
$("#ComSect").remove();	 
	});
	
		$("#Item13URL").click(function() {
	IndexSave = document.getElementById("Item13URL").value;
	 localStorage.setItem("Index", IndexSave);  
$("#ComSect").remove();	 
	});
	
		$("#Item14URL").click(function() {
	IndexSave = document.getElementById("Item14URL").value;
	 localStorage.setItem("Index", IndexSave);   
	 $("#ComSect").remove();
	});
	
		$("#Item15URL").click(function() {
	IndexSave = document.getElementById("Item15URL").value;
	 localStorage.setItem("Index", IndexSave);  
$("#ComSect").remove();	 
	});
}
}
function ActualizarItem(data){
	var IndexSave2=localStorage.getItem("Index"); 
	localStorage.setItem("Titulo", data[IndexSave2].titulo); 
	console.log(data[IndexSave2].URL);
	document.getElementById("Portada").src=data[IndexSave2].portada;
	document.getElementById("Titulo").innerHTML=data[IndexSave2].titulo;
	document.getElementById("Trailer").href=data[IndexSave2].trailer;
	var n = data[IndexSave2].año;
	var aux = n.toString();
	document.getElementById("Anio").innerHTML= aux;
	document.getElementById("Sinopsis").innerHTML=data[IndexSave2].contenido;
	document.getElementById("URL").href=data[IndexSave2].URL;
}

// insertar información a la base de datos capturados desde interfaz gráfica

$(document).ready(function(){
	$("#cancionForm").submit(function(event){
		console.log("entro");
		event.preventDefault();
		submitFormInsert();
	});
});

function AdminInsert(data){
	var usuervalido=document.forms["myForm"]["Usuario"].value; 
	var password1=document.forms["myForm"]["Pass1"].value; 
	var password2=document.forms["myForm"]["Pass2"].value; 
	var correo=document.forms["myForm"]["Mail"].value; 
	var valido = 1;
	var validoP = 1;
	var validoM = 1;
	
	
	
	for (x in data){
		if(usuervalido==data[x].nickname || correo==data[x].email){
		valido = 0;
		}
	}
	

	if(password1!=password2){
		validoP = 0;
	}
		
	if(!document.forms["myForm"]["Mail"].checkValidity()){
		validoM = 0;
	}	
		
		
		

		
	console.log(valido);
	console.log(validoP);

	
	if(valido == 1 && validoP ==1 && validoM ==1){
		alert("Registro Existoso");
		submitFormInsert();
		window.location.href = 'http://localhost/Proyecto/index.html';
		}else
		if(valido == 0){{
		alert("Nickname o Correo Ocupado");
		}
		}else
		if(validoP == 0 ){{
		alert("Error en confirmar contraseña");
		}
		}else
		if(validoM == 0 ){{
		alert("Correo Incorrecto");
		}
		}
	}	
	
function InUser(data){
	var usuerIN=document.forms["myForm2"]["UsuarioEntrar"].value; 
	var passwordIN=document.forms["myForm2"]["PassEntrar"].value; 
	console.log(usuerIN);
	console.log(passwordIN);
	var valido = 0;

	for (x in data){
		if(usuerIN==data[x].nickname && passwordIN==data[x].contrasenia && data[x].idUsuario!=7){
			NickSave=data[x].nickname;
			MailSave=data[x].email;
			UserSave=data[x].idUsuario;
			VerMenu=1;
		localStorage.setItem("Nickname", NickSave);   
		localStorage.setItem("Mail", MailSave);   
		localStorage.setItem("Menu", VerMenu); 
		localStorage.setItem("User", UserSave);  
		valido = 1;
		window.location.href = 'http://localhost/Proyecto/index.html';
		}
	}
	if(valido==1){alert("Ingreso Exitoso")}
	else {alert(":(")}
	
}


function submitFormInsert(){
	
	var nickname = $("#Usuario").val();
    var email = $("#Mail").val();
    var contrasenia = $("#Pass1").val();


    var object = {"nickname":nickname, "contrasenia":contrasenia, "email":email};
	
    console.log(object);
		
	fetch('http://localhost/Proyecto/server/business/UsuarioInsert.php',{
	method:	'POST',
	headers:{
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify(object),
	cache: 'no-cache'
	
	})
	.then(function(response){
		console.log("entró");
		return response.text();
	})
	.then(function(data){
		if(data === " 1"){
			formSuccess();
        }
        else{
            alert("Error al insertar");
        }
	})
	.catch(function(err){
		console.error(err);
	});
}

function UserComeHere(){
	
	var u = localStorage.getItem("User");
	var nickname = parseInt(u);
	return nickname;
}


function submitFormInsertComment(){
	var hoy = new Date();
	var cuerpo = $("#textarea").val(); 
	var fecha = "2021-31-05";
	var puntuacion = "5";
	
	var AUX = localStorage.getItem("Find");
if(cuerpo!=""){
	
    var object = {"cuerpo":cuerpo, "fecha":fecha, "puntuacion":"5", "usuario":UserComeHere(), "item":AUX};
	
    console.log(object);
		
	fetch('http://localhost/Proyecto/server/business/ComentariosInsert.php',{
	method:	'POST',
	headers:{
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify(object),
	cache: 'no-cache'
	
	})
	.then(function(response){
		console.log("entró");
		return response.text();
	})
	.then(function(data){
		if(data === " 1"){
			formSuccess();
        }
        else{
            alert("Error al insertar");
        }
	})
	.catch(function(err){
		console.error(err);
	});
window.location.href = 'http://localhost/Proyecto/item.html';}else{alert("Comentario Vacio")}
	
}

function formSuccess(){
	alert("Datos almacenados");
}

function submitFormUpdate(){
	
	var idUsuario = localStorage.getItem("User");
	var Lista = "2";
	var nickname = localStorage.getItem("Nickname");
	var email = localStorage.getItem("Mail");
	var pass = localStorage.getItem("Pass");
	
	
	
    var object = {"nickname":nickname, "constrasenia":pass, "email":email, "lista":Lista, "idUsuario":idUsuario};
	
    console.log(object);
		
	fetch('http://localhost/Proyecto/server/business/UsuarioUpdate.php',{
	method:	'POST',
	headers:{
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify(object),
	cache: 'no-cache'
	
	})
	.then(function(response){
		console.log("entró");
		return response.text();
	})
	.then(function(data){
		if(data === " 1"){
			formSuccess();
        }
        else{
            alert("Error al insertar");
        }
	})
	.catch(function(err){
		console.error(err);
	});
}

function ActualizarSeries(data){
	var SerieLoc;
	var SerieLocU;
	
	var SerieLocB;
	var SerieLocBU;
	var SerieLocBN;
	
	var ACT=localStorage.getItem("Type");
	console.log(ACT);
	
	var randS;
	var randfixS;
	var auxS;
	var auxfixS;
	
	var terS=0;
	var terSBODY=0;
	var terSBODYcont=0;
	do{
		randS=Math.random() * (46 - 1) + 1;
		auxfixS =  randS.toFixed();
		randfixS= auxfixS;
		auxS = randfixS;
		if(data[auxS].tipo==ACT){
			terS=terS+1;
			console.log(terS);
		SerieLoc= "TopS"+terS;
		SerieLocU= "URLTopS"+terS;
		document.getElementById(SerieLoc).src=data[auxS].portada;
		document.getElementById(SerieLoc).width=100;
		document.getElementById(SerieLoc).height=250;
		document.getElementById(SerieLocU).value=auxS;
		console.log(document.getElementById(SerieLocU).value);
	
		}
	}while(terS<10);
	
	
	do{
	if(data[terSBODYcont].tipo==ACT){
		terSBODY=terSBODY+1;
		console.log(terSBODYcont);
		SerieLocB= "NorS"+terSBODY;
		SerieLocBU= "URLNorS"+terSBODY;
		SerieLocBN= "NameNorS"+terSBODY;
		document.getElementById(SerieLocB).src=data[terSBODYcont].portada;
		document.getElementById(SerieLocBU).value=terSBODYcont;
		document.getElementById(SerieLocBN).innerHTML=data[terSBODYcont].titulo;
		terSBODYcont=1+terSBODYcont;
	}else{
		terSBODYcont=1+terSBODYcont;
		}
	}while(terSBODY<12);
	
	{
	$("#URLTopS1").click(function() {
	IndexSave = document.getElementById("URLTopS1").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLTopS2").click(function() {
	IndexSave = document.getElementById("URLTopS2").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLTopS3").click(function() {
	IndexSave = document.getElementById("URLTopS3").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLTopS4").click(function() {
	IndexSave = document.getElementById("URLTopS4").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLTopS5").click(function() {
	IndexSave = document.getElementById("URLTopS5").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLTopS6").click(function() {
	IndexSave = document.getElementById("URLTopS6").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLTopS7").click(function() {
	IndexSave = document.getElementById("URLTopS7").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	$("#URLTopS8").click(function() {
	IndexSave = document.getElementById("URLTopS8").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	
	$("#URLTopS9").click(function() {
	IndexSave = document.getElementById("URLTopS9").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	
	$("#URLTopS10").click(function() {
	IndexSave = document.getElementById("URLTopS10").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	}

	{
	$("#URLNorS1").click(function() {
	IndexSave = document.getElementById("URLNorS1").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLNorS2").click(function() {
	IndexSave = document.getElementById("URLNorS2").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLNorS3").click(function() {
	IndexSave = document.getElementById("URLNorS3").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLNorS4").click(function() {
	IndexSave = document.getElementById("URLNorS4").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLNorS5").click(function() {
	IndexSave = document.getElementById("URLNorS5").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLNorS6").click(function() {
	IndexSave = document.getElementById("URLNorS6").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
		$("#URLNorS7").click(function() {
	IndexSave = document.getElementById("URLNorS7").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	$("#URLNorS8").click(function() {
	IndexSave = document.getElementById("URLNorS8").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	
	$("#URLNorS9").click(function() {
	IndexSave = document.getElementById("URLNorS9").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	
	$("#URLNorS10").click(function() {
	IndexSave = document.getElementById("URLNorS10").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	
	$("#URLNorS11").click(function() {
	IndexSave = document.getElementById("URLNorS11").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	
	$("#URLNorS12").click(function() {
	IndexSave = document.getElementById("URLNorS12").value;
	 localStorage.setItem("Index", IndexSave); 	 
	});
	}

}

