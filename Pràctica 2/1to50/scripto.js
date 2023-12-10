var arr=[0];
var index=0;
var start=1;
var flag=1;
var timerFlag = 0;
var tValue = 0;

function display(){
	var i=1;
	
	while(i<=25){
	var p=shuffle();
	document.getElementById(i).innerHTML=p;
	i++;
	}
	

}

function shuffle() {
	var x = Math.floor((Math.random() * 25) + 1);

	if(!arr.includes(x)){
	arr[index]=x;
	index++;
	
	return x;
	}

	else{
		var y=shuffle();
		return y;
	}
}

function game(i){
	
	var n=document.getElementById(i).innerHTML;
	
	if(timerFlag == 0){
		timerFlag = 1;
		tValue = 0;
		myTimer();
	}
	
	if(n >= 26 && n==start){
		document.getElementById(i).innerHTML='';
		if(n==50){
		flag=0;
		timerFlag = 0;
		document.getElementById("congotime").innerHTML=tValue;
		document.getElementById("congo").style.display="block";
		
		}
		start++;
	}
	else if(n==start){
		document.getElementById(i).innerHTML=shuffle2();
		start++;
	}
}

function shuffle2(){

	var x = Math.floor((Math.random() * 25) + 26);

	if(!arr.includes(x)){
		arr[index]=x;
		index++;

		return x;
	}
	else{
		var y=shuffle2();
		return y;
	}

}

function myTimer(){
	
	var x1 = setInterval(function() {
		if(timerFlag == 1){
			tValue++;
			document.getElementById("demo").innerHTML =  tValue + " s ";
		}
	}, 1000);

}






