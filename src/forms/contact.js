document.addEventListener('DOMContentLoaded', function() {
  asignarFuncionalidad();
})

let asignarFuncionalidad = () => {
	let button = document.getElementById('submitForm');
	let form = document.getElementById('formularioContacto');
	let data = new FormData(form);
	console.log(data);
	button.addEventListener('click', function(){
		Email.send({
			Host: "smtp.gmail.com",
			Username: "mailsenderdmc@gmail.com",
			Password: "franise123",
			To: 's.mendoza99@outlook.com',
			From: "mailsenderdmc@gmail.com",
			Subject: "Nuevo mensaje de tu pagina web!"
			Body: "" + data.get("name") + "\n" + data.get("email") + "\n" + data.get("subject") + "\n" + data.get("message") + "",
		}).then(
			message => alert("mail sent succesfully")
		);
	})
}