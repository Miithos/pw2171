const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $	   = require("jquery");
function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	  	$("#txtGender").html(data.results[0].gender)
	    $("#txtNombre").html(data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last)
	    $("#txtLocation").html(data.results[0].location.street+" "+data.results[0].location.city+" "+data.results[0].location.state+" "+data.results[0].location.postcode)
	    $("#txtEmail").html(data.results[0].email)
	    $("#imgFoto").attr("src",data.results[0].picture.large)
	   	$("#txtLogin").html("Usuario:<br>"+data.results[0].login.username+"<br>"
	    					+data.results[0].login.password+"<br>"
	    					+data.results[0].login.salt+"<br>"
	    					+data.results[0].login.md5+"<br>"
	    					+data.results[0].login.sha1+"<br>"
	    					+data.results[0].login.sha256)
	    $("#txtDob").html(data.results[0].dob)
	    $("#txtRegistered").html(data.results[0].registered)
	    $("#txtPhone").html(data.results[0].phone)
	    $("#txtCell").html(data.results[0].cell)
	    $("#txtId").html(data.results[0].id.name+" "+data.results[0].id.value)
	    $("#imgFoto2").attr("src",data.results[0].picture.medium)
	    $("#imgFoto3").attr("src",data.results[0].picture.thumbnail)
	    $("#txtNat").html(data.results[0].nat)
	    $("#txtInfo").html(data.info.seed+" "+data.info.results+" "+data.info.page+" "+data.info.version)

	    
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});

}
$("#btnInfo").on("click",datosRandom);
