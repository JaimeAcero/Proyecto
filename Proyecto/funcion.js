

function global(){

if(localStorage.getItem("Menu")==0){
document.getElementById("Entrar").hidden = false;
document.getElementById("Salir").hidden = true;
document.getElementById("userpic").hidden = true;
document.getElementById("Res").hidden = false;
	}
	
if(localStorage.getItem("Menu")==1){
document.getElementById("Entrar").hidden = true;
document.getElementById("Salir").hidden = false;
document.getElementById("userpic").hidden = false;
document.getElementById("Res").hidden = true;
	}
}

function salir(){
	 
	window.location.href = 'http://localhost/Proyecto/index.html';
	localStorage.setItem("Menu",0);
	window.localStorage.removeItem('Nickname');
window.localStorage.removeItem('Mail');
window.localStorage.removeItem('List');
window.localStorage.removeItem('User');
}


function userpage(){
	
	document.getElementById("UsuReg").innerHTML = localStorage.getItem("Nickname");
	document.getElementById("CorReg").innerHTML = localStorage.getItem("Mail");
		
}