var Postrow=document.getElementById("Postsrow");

var posts="";

var req = new XMLHttpRequest();

var po="";

All();

$('#sidebar-wrapper ul li').on('click', function() {
    $('#sidebar-wrapper ul li.active').removeClass('active');
    $(this).addClass('active');
});

function All(){
	
	var url = 'https://api.themoviedb.org/3/trending/All/day?api_key=172487b9891a5020f990ed40ad4b7e6c';
	
	
	req.open("GET",url ,false);
	
	req.onreadystatechange = function(){
		
		if(req.readyState == 4 && req.status == 200){
			posts=JSON.parse(req.response);
			po=posts.results;
			console.log(po);
		
			displayposts();
			
		}
		else{
			console.log("connection error");
			}
		
	}
	
	req.send();
	
	
	
	function displayposts(){
		
		var temps="";
		
		for(var i=0;i<po.length;i++){
			
			temps+=`<div class="col-md-4">
			<div class="thumb position-relative my-5 text-light">
			<img class="img-fluid"  src="https://image.tmdb.org/t/p/w500`+po[i].poster_path+`"/>
			
			<div class="details d-flex">
			<div class="short-details">
			<div class="vote"><p>`+po[i].vote_average+`</p><img src="imgs/heart.png" width="30" height="30"/></div>
	<h3>`+po[i].original_title+`</h3>
	<p>`+po[i].overview+`</p>
	</div>
	</div>
	</div>
	</div>`
		
		}
		
		Postrow.innerHTML= temps;
		
	}
	
}

$(".All").on('click',function(){
	All();
});

$('.Movies').on('click', function(e){
  
var url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=172487b9891a5020f990ed40ad4b7e6c';

console.log("llllllllllllllll");
req.open("GET",url ,false);

req.onreadystatechange = function(){
	
	if(req.readyState == 4 && req.status == 200){
		posts=JSON.parse(req.response);
		po=posts.results;
		console.log(po);
	
		displayposts();
		
	}
	else{
		console.log("connection error");
		}
	
}

req.send();
function displayposts(){
	
	var temps="";
	
	for(var i=0;i<po.length;i++){
		
		temps+=`<div class="col-md-4">
		<div class="thumb position-relative my-5 text-light">
		<img class="img-fluid"  src="https://image.tmdb.org/t/p/w500`+po[i].poster_path+`"/>
		
		<div class="details d-flex">
		<div class="short-details">
		
<h3>`+po[i].original_title+`</h3>
<p>`+po[i].overview+`</p>
</div>
</div>
</div>
</div>`
	
	}
	
	Postrow.innerHTML= temps;
	
}


});	



$('.TV').on('click', function(e){
	  
	var url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=172487b9891a5020f990ed40ad4b7e6c';

	console.log("llllllllllllllll");
	req.open("GET",url ,false);

	req.onreadystatechange = function(){
		
		if(req.readyState == 4 && req.status == 200){
			posts=JSON.parse(req.response);
			po=posts.results;
			console.log(po);
		
			displayposts();
			
		}
		else{
			console.log("connection error");
			}
		
	}

	req.send();
	function displayposts(){
		
		var temps="";
		
		for(var i=0;i<po.length;i++){
			
			temps+=`<div class="col-md-4">
			<div class="thumb position-relative my-5 text-light">
			<img class="img-fluid"  src="https://image.tmdb.org/t/p/w500`+po[i].poster_path+`"/>
			
			<div class="details d-flex">
			<div class="short-details">
			
	<h3>`+po[i].original_name+`</h3>
	<p>`+po[i].overview+`</p>
	</div>
	</div>
	</div>
	</div>`
		
		}
		
		Postrow.innerHTML= temps;
		
	}


	});	




$('.People').on('click', function(e){
	  
	var url = 'https://api.themoviedb.org/3/trending/person/day?api_key=172487b9891a5020f990ed40ad4b7e6c';

	console.log("llllllllllllllll");
	req.open("GET",url ,false);

	req.onreadystatechange = function(){
		
		if(req.readyState == 4 && req.status == 200){
			posts=JSON.parse(req.response);
			po=posts.results;
			console.log(po);
		
			displayposts();
			
		}
		else{
			console.log("connection error");
			}
		
	}

	req.send();
	function displayposts(){
		
		var temps="";
		
		for(var i=0;i<po.length;i++){
			
			temps+=`<div class="col-md-4">
			<div class="thumb position-relative my-5 text-light">
			<img class="img-fluid"  src="https://image.tmdb.org/t/p/w500`+po[i].profile_path+`"/>
			
			<div class="details d-flex">
			<div class="short-details">
			
	<h3>`+po[i].name+`</h3>
	
	</div>
	</div>
	</div>
	</div>`
		
		}
		
		Postrow.innerHTML= temps;
		
	}


	});	


$(".search").on('click',function(){
	var searchValue = $(".searchValue").val();
	 if(searchValue.length < 1){
	     alert('Enter valid keyword to search, minimum 1 character');
	     return false;
	    }
	    
	var url = 'https://api.themoviedb.org/3/search/multi?api_key=172487b9891a5020f990ed40ad4b7e6c&query='+searchValue+'&language=en-US&page=1&include_adult=false';

	console.log("llllllllllllllll");
	req.open("GET",url ,false);

	req.onreadystatechange = function(){
		
		if(req.readyState == 4 && req.status == 200){
			posts=JSON.parse(req.response);
			po=posts.results;
			console.log(po);
		
			displayposts();
			
		}
		else{
			console.log("connection error");
			}
		
	}

	req.send();
	function displayposts(){
		
		var temps="";
		
		for(var i=0;i<po.length;i++){
			
			temps+=`<div class="col-md-4">
				<div class="thumb position-relative my-5 text-light">
				<img class="img-fluid" onerror='this.src="imgs/112815953-stock-vector-no-image-available-icon-flat-vector.jpg"' src="https://image.tmdb.org/t/p/w500`+po[i].poster_path+`"/>
				
				<div class="details d-flex">
				<div class="short-details">
				
		<h3>`+po[i].original_title+`</h3>
		<p>`+po[i].overview+`</p>
		</div>
		</div>
		</div>
		</div>`
		
		}
		
		Postrow.innerHTML= temps;
		
	}


	
})




