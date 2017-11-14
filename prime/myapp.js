var x= prompt("input a number");
function isPrime(x){
    if (x==1)
        {
            return false;
        }
    else if (x==2)
        {
            return true;
        }
    else{
        for (var i=2; i<x;i++){
        if(x%i==0)
            {
                return false;
            }
        }
        return true;
    }
    
    }

var result=isPrime(x);
if (result==true)
console.log("prime number");
else 
    console.log("not prime number");        