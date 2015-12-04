var searchStr =''
var letterCount = 0;
$('input').keyup(function(key){
		
		if(key.which == 8 ){
			letterCount--;
			searchStr = searchStr.slice(0,searchStr.length-1)
		}
		else{
			letterCount++;
			searchStr+=String.fromCharCode(key.which)
			
		}


		console.log(searchStr)
		if(searchStr!='' && letterCount >= 3 ){
			$.post('/search',{find:searchStr.toLowerCase()},function(data){
				//alert(JSON.stringify(data));

				//$.post('/location', {})

				$.post('/whereami', data, function(result){
					$("#locationData").html(result);
				});

			})
		}
		
})