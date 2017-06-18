$(document).ready(function(){
	// Información de claves Api de Marvel
	var publicKey='ba45fe682a39f87e7b4ba1806521f308';
	var privateKey='1a75ea670b6eb03297617e70b9709cd6761211aa';
	var ts=new Date().getTime();
	var hash=CryptoJS.MD5(ts+privateKey+publicKey).toString();
	// Imprime en consola la clave hash creada;
	console.log(hash);

	function getMarvelComics(){
		var name=$('#comics-name').val();;
		var url='http://gateway.marvel.com:80/v1/public/characters';
		console.log(url);
		$.getJSON(url, {
			ts:ts,
			apikey:publicKey,
			hash:hash,
			limit:10,
			name:name
		})
		.done(function(data){
			var response=data.data;
			console.log(response);
		});
	};

	$('#button').click(function(){
		//getMarvelComics();
		getListMarvel()
	});

	function getListMarvel() {
		var url='http://gateway.marvel.com:80/v1/public/comics';
		$.getJSON(url,{
			ts:ts,
			apikey:publicKey,
			hash:hash
		})
		.done(function(response){
			var results=response.data.results;
			var length=results.length;
			var output='<ul>';

			for(var i=0; i<length; i++){
				if(results[i].images.length>0){
					var image=results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
					output += '<li><img src="' + image + '"><br>'+results[i].title+'</li>';
				}
			}
			output+='</ul>';
			$('#results').append(output);
		})
	}








	// $('#button').click(function(){
	// 	var name=$('#comics-name').val(); // Obtenemos el valor del campo
	// 	var url='https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name='+name+'&apikey='+publicKey+'&hash='+hash;
	// 	// Imprime la URL de la Api
	// 	console.log(url);

	// 	$.get(url).then();
	// 	console.log(url.data);
	// });



	













	//var hash='ec4cd3afb9a48c4ee1b7a32bc248180a';

	// var name=$('#comics-name').val();
	// var url='https://gateway.marvel.com:443/v1/public/characters?ts=1&name='+name+'&apikey='+publicKey+'&hash='+hash;
	// Imprime en consola URL
	// console.log(url);

	// Obteniedo los valores del objeto
	// $.get(url).then(
	//   res => console.log(res.data)
	// );





	// $('#buscar').click(function(){
	// 	var name=$('#comics-name').val(); // Obtenemos el valor del campo
	// 	var url='https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name='+name+'&apikey='+publicKey+'&hash='+hash;
	// 	$.get(url).then(
	// 		result=>console.log(result.data)
	// 	);

	// })





	// var api = "6a9106d88c445b26b4f1a0d2d6b6a2a9";
	
	// $('#buscar').click(function(){
	// 	$('#fila').html("");

	// 	var idioma = $('#idioma').val();
	// 	var url = 'https://api.themoviedb.org/3/tv/popular?api_key='+api+'&'+'language='+idioma+'&'+'page=1';

	// 	console.log(url);

	// 	$.ajax({
	// 		url: url,
	// 		dataType: "json",
	// 		beforeSend: function(){
	// 			$('#loader').css('visibility','visible');
	// 		},
	// 		complete: function(){
	// 			$('#loader').css('visibility','hidden');
	// 		},
	// 		type: "GET"
	// 	})
	// 	.done(function(response){
	// 		console.log(response);

	// 		for(i in response.results){
	// 			var template = `
	// 				<article class="col-md-4">
	// 					<div class="box">
	// 						<header class="encabezado" style="background-image: url(https://image.tmdb.org/t/p/w500${response.results[i].poster_path});">
	// 							<div class="titulo">
	// 								<h3>${response.results[i].name}</h3>
	// 							</div>
	// 						</header>
							
	// 						<div class="content">
	// 							<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
	// 							  <div class="panel panel-default">
	// 							    <div class="panel-heading" role="tab" id="headingOne">
	// 							      <h4 class="panel-title">
	// 							        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#${response.results[i].id}" aria-expanded="true" aria-controls="collapseOne">
	// 							          Reseña
	// 							        </a>
	// 							      </h4>
	// 							    </div>
	// 							    <div id="${response.results[i].id}" class="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne">
	// 							      <div class="panel-body">
	// 							        ${response.results[i].overview}
	// 							      </div>
	// 							    </div>
	// 							  </div>						  
	// 						</div>
							
	// 						<div class="body-box">
	// 							<h4><b>Nombre Original:</b> ${response.results[i].original_name}</h4>
	// 							<h4><b>Fecha de Lanzamiento:</b> ${response.results[i].first_air_date}</h4>
	// 							<h4><b>Idioma Original:</b> ${response.results[i].original_language}</h4>
	// 							<h4><i class="fa fa-thumbs-o-up"></i> ${response.results[i].vote_count}</h4>
	// 						</div>					

	// 					</div>
	// 				</article>

	// 			`;

	// 			$("#fila").append(template);

	// 		}

	// 	});

	// });



});
// Activa detención automatica de altura en columnas
$('.col-eq').colequalizer();