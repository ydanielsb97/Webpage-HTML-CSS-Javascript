$(document).ready(function(){

	// Slider

	if(window.location.href.indexOf("index") > -1){

		var slider = $('.bxslider')

		slider.bxSlider({
			mode: "fade",
			captions: true,
			slideWidth: 1200
		});

		}

	// Artículos
	if(window.location.href.indexOf("index") > -1){
		var  fecha_hoy = "Publicado el "+moment().date()+" de "+moment().format("MMMM")+" del año "+moment().format("YYYY")+""

		var articulos = [{
			title: "Titulo de prueba 1",
			fecha: fecha_hoy,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu semper ipsum. In at lobortis libero. Maecenas placerat est velit, id dictum purus faucibus sit amet. Vivamus suscipit libero est, at molestie eros gravida in. Nam varius purus eu iaculis commodo. Pellentesque congue interdum turpis, ut accumsan elit scelerisque elementum. Maecenas eget malesuada ligula. Morbi dignissim, enim dignissim accumsan vestibulum, dolor neque feugiat justo, non dignissim tortor nisi eu ex. Ut in urna finibus, pulvinar massa a, porttitor urna. Donec in orci ac diam imperdiet congue id non ligula. Integer velit nibh, semper a velit at, vehicula condimentum libero. Pellentesque tempor, enim congue rhoncus pretium, neque tortor interdum dui, sed tristique odio dui eu ex. Donec ut lacus sit amet dui maximus efficitur. Donec lorem mauris, sodales in eleifend sit amet, feugiat eget ante. Etiam volutpat lectus vitae erat molestie, vel fringilla quam viverra."
			},
			{
			title: "Titulo de prueba 2",
			fecha: fecha_hoy,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu semper ipsum. In at lobortis libero. Maecenas placerat est velit, id dictum purus faucibus sit amet. Vivamus suscipit libero est, at molestie eros gravida in. Nam varius purus eu iaculis commodo. Pellentesque congue interdum turpis, ut accumsan elit scelerisque elementum. Maecenas eget malesuada ligula. Morbi dignissim, enim dignissim accumsan vestibulum, dolor neque feugiat justo, non dignissim tortor nisi eu ex. Ut in urna finibus, pulvinar massa a, porttitor urna. Donec in orci ac diam imperdiet congue id non ligula. Integer velit nibh, semper a velit at, vehicula condimentum libero. Pellentesque tempor, enim congue rhoncus pretium, neque tortor interdum dui, sed tristique odio dui eu ex. Donec ut lacus sit amet dui maximus efficitur. Donec lorem mauris, sodales in eleifend sit amet, feugiat eget ante. Etiam volutpat lectus vitae erat molestie, vel fringilla quam viverra."
			},
			{
			title: "Titulo de prueba 3",
			fecha: fecha_hoy,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu semper ipsum. In at lobortis libero. Maecenas placerat est velit, id dictum purus faucibus sit amet. Vivamus suscipit libero est, at molestie eros gravida in. Nam varius purus eu iaculis commodo. Pellentesque congue interdum turpis, ut accumsan elit scelerisque elementum. Maecenas eget malesuada ligula. Morbi dignissim, enim dignissim accumsan vestibulum, dolor neque feugiat justo, non dignissim tortor nisi eu ex. Ut in urna finibus, pulvinar massa a, porttitor urna. Donec in orci ac diam imperdiet congue id non ligula. Integer velit nibh, semper a velit at, vehicula condimentum libero. Pellentesque tempor, enim congue rhoncus pretium, neque tortor interdum dui, sed tristique odio dui eu ex. Donec ut lacus sit amet dui maximus efficitur. Donec lorem mauris, sodales in eleifend sit amet, feugiat eget ante. Etiam volutpat lectus vitae erat molestie, vel fringilla quam viverra."
			}

		]

		var posts = $("#posts");

		articulos.forEach((elemento, index) => {
			var post = `<article class="post">
						<h2>${elemento.title}</h2>
						<span class="date">${elemento.fecha}</span>
						<p>${elemento.text}</p>
						<a href="#" class="button-more">Ver más</a>
						</article>
						`;
			posts.append(post);
		});
	}
	// Cambiador de Temas

	var temas = $("#csstemas");

	$("#red").click(function(){
		temas.attr("href", "css/red.css");
		slider.goToSlide("1");
	})

	$("#green").click(function(){
		temas.attr("href", "css/green.css");
		slider.goToSlide("0");
	})

	$("#blue").click(function(){
		temas.attr("href", "css/blue.css");
		slider.goToSlide("2");
	})

	// Botón Arriba

	$(".subir").click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0 
		}, 500);

		return false;
	});


	// Login


	$("#login form").submit(function(){
		var nombre = $("#name_input").val();

		localStorage.setItem("nombre", nombre);
		
	});

	var form_nombre = localStorage.getItem("nombre");

	if (form_nombre != null && form_nombre != undefined){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_nombre+"</strong></br>");
		about_parrafo.append("<a href='#' id='logoff'>Cerrar Sesión</a>");

		$("#login").hide();
	}

	$("#logoff").click(function(){
		localStorage.clear();
		location.reload();
	})

	// Acordeon

	if(window.location.href.indexOf("aboutme") > -1){
		$("#acordeon").accordion();
	}

	// Reloj

	if (window.location.href.indexOf("clock") > -1){
		

		setInterval(function(){
			var clock = moment().format("hh:mm:ss");
			$("#reloj").html(clock);
			}, 1000);

	}

	// Validacion Formulario Contactos

	if (window.location.href.indexOf("contact") > -1){
		$.validate({
			lang: 'es',
			errorMessagePosition: "top",
			scrollToTopOnError: true
		})
	}

	$("form input[name='date']").datepicker({
		dateFormat: "dd-mm-yy"
	});

});

	