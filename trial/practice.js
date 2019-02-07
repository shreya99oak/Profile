
var counter=1;


var divContainer=document.getElementById("info");
var btn=document.getElementById("btn");

btn.addEventListener("click",function (){

	var ourRequest= new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')
ourRequest.onload=function(){
	//console.log(ourRequest.responseText);
	//var ourData=ourRequest.responseText;
	//browser need to know its json type of data, so parse it
	var ourData=JSON.parse(ourRequest.responseText);
	display_info(ourData);
	//console.log(ourData[0]);
};
ourRequest.send();

//btn.classList.add("hide-me");}//css to diable a button
});

function display_info(ourData){

	var str="";
	for(i=0;i<ourData.length;i++)
	{
		str+="<p>"+ ourData[i].name +"</p>";
	}

	divContainer.insertAdjacentHTML('beforeend',str);

}


