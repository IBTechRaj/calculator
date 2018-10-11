var num="";
var op="";
var prevOp="";
var n1=0;
var n2=0;
var nums = document.querySelectorAll('.digits');
var displayText=document.querySelector('#resultBox');
var h2=document.querySelector('#resultBox h2');
var calcDone;

function doDel(){
	h2.textContent=h2.textContent.slice(0, - 1);
	num=num.slice(0,-1);
}
function doAllClear(){
num="";
op="";
prevOp="";
n1=0;
n2=0;
h2.textContent='';
}

function doOper(num1, num2, oper){
	var res=0;
	switch(oper){
		case '+':
		res= n1 + n2;
		n1=res;
		break;
		case '-':
		res = n1 - n2;
		n1=res;
		break;
		case '*':
		res = n1 * n2;
		n1=res;
		break;
		case '/':
		res = n1/n2;
		n1=res;
		break;
		default :
		alert('invalid oper');
	}
	return res;
}


var getNum = function (e) {
//console.log(e.target.textContent);
if(calcDone){
doAllClear();
calcDone=false;
}

 
num+=e.target.textContent;
	h2.textContent=num;

}


nums.forEach(nums => {
	nums.addEventListener("click", getNum);
});



var getOps = function (e) {
	calcDone=false;
	prevOp=op;
//console.log(e.target.textContent);
if(num.length == 0) return;
op=e.target.textContent;
if(n1==0){
	n1=parseFloat(num);
	num='';
}
else{
n2=parseFloat(num);
num='';
}

if(op==="="){
h2.textContent='';
//console.log('=val' + " " +n1 + " " + n2 + " " + prevOp);
res=doOper(n1,n2,prevOp);
n1=res;
n2=0;
num="";
h2.textContent=res;

calcDone=true;

}else{
	if (n1 != 0 )
	if(n2!=0)
		if(prevOp != '='){
//console.log('oval' + " " +n1 + " " + n2 + " " + prevOp);
res=doOper(n1,n2,prevOp);
}
	h2.textContent+=e.target.textContent;
	
}

}



var ops = document.querySelectorAll('.opers');

ops.forEach(ops => {
	ops.addEventListener("click", getOps);
});

