window.onload=function(){
	bar_search = document.getElementById("ctn-bar-search");
	cover_ctn_search= document.getElementById("cover-ctn-search");
	inputSearch = document.getElementById("inputSearch");
	box_search= document.getElementById("box-search");
	navegacion= document.getElementById("navegacion");

	navegacion.addEventListener("click", navegar);
	cover_ctn_search.addEventListener("click", ocultar_buscador);
	document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
	document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
	ingresarEnlaces();
}

function mostrar_buscador(){
	bar_search.style.top = "80px";	
	cover_ctn_search.style.display = "block";
	inputSearch.style.display = "block";	
	inputSearch.focus();
	if(inputSearch.value === ""){
		box_search.style.display = "none";
	}
}

function ocultar_buscador(){
	bar_search.style.top = "-80px";
	inputSearch.style.display = "none";	
	cover_ctn_search.style.display = "none";
	inputSearch.value = "";
	box_search.style.display= "none";
}


function buscador_interno(){
	let filter = inputSearch.value.toUpperCase();
	let li = box_search.getElementsByTagName("li");
	
	for(var i=0; i< li.length; i++){
		let a=li[i].getElementsByTagName("a")[0];
		let text = a.textContent || a.innerText;
		
		if(text.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";
			box_search.style.display = "block";
			
			if(inputSearch.value === ""){
				box_search.style.display = "none";
			}
		}else{
			li[i].style.display = "none";
		}
	}
}

function ingresarEnlaces() {
	lista= box_search;
     let opciones = header.getElementsByClassName("buscar");
     for (opcion of opciones) {
        	let li = document.createElement("li");
     		let enlace = document.createElement("a");
     		enlace.setAttribute("href", opcion.firstElementChild.getAttribute("href"));
     		let icono = document.createElement("i");
		icono.setAttribute('class', 'fas fa-search');
		enlace.appendChild(icono);	
		   
		enlace.insertAdjacentText('beforeend',opcion.textContent);
		console.log("No se agrego el enlace");
		li.appendChild(enlace);
	        li.addEventListener("click",ocultar_lista);
     		lista.appendChild(li);
     }    
}


function ocultar_lista() {
	box_search.style.display = "none";
	bar_search.style.top = "-50px";
	cover_ctn_search.style.display = "none";
	inputSearch.value = "";
}

function navegar(){
	 introJs().start();
}

