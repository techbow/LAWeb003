function change(){
	var x = document.getElementById("star");
	if(x.value.length > 0){
		x.value = x.value.slice(0,-1) + '*';
	}
		
}