var searchStr =''
var letterCount = 0;
$('#dropdown1').css('width','500px')
$('#serching').css('overflow','hidden')
$('input').keyup(function(key){
		$('#dropdown1').css({width: '300px',position: 'absolute',top: '149.266px',left: '384.734px', opacity: '1', display: 'block'})
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
				
				var html =''
				data.forEach(function(result){
						html += "<form id='location' action='/location/searched' method='post'>"+
									"<input style='display:none' name='latitude' id='latitude' value="+result.latitude+">"+
									"<input style='display:none' name='longitude' id='longitude' value="+result.longitude+">"+
									"<button type='submit' class='btn transparent black-text col s12 m12'>"+result.name+"</button>"+
								"</form>";

				})
				$('#dropdown1').html(html)
		})
	}
})

 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
$('#res').css({marginTop:'-50%',position:'absolute'})