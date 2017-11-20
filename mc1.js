function NewObj(num1,num2){
  this.num1 = num1;
  this.num2 = num2;
  this.run = function(){
    otherFnc(this.num1,this.num2);
  }
}
function otherFnc(x,y){
  otherOtherFnc(x,y);
}

function otherOtherFnc(zebra, party){
  var answer = Math.pow(zebra,party);
  console.log(answer);
}

var obj = new NewObj(4,5);
obj.run();
