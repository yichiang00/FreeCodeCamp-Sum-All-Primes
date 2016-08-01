
function sumPrimes(num) {
  var myArr=[];
  for (var i = 2; i <=num; i++) {
    var isPrime=true;
    for (var j = 2; j <i; j++) {
      if (i%j===0) {
        isPrime=false;
        }
    }
    if(isPrime)
    {
      myArr.push(i);
    }
  }
  var total=0;
  myArr.forEach(function(number){
    total+=number;
  });
  return total;
}

sumPrimes(10);
