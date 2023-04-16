1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"

var i = 1;

for(var i=1; i<101; i++) {
    if(i % 3) {
        console.log("Fizz");
    }else if(i % 5) {
        console.log("Buzz");
    }else if(i % 3 && i % 5){
        console.log("FizzBuzz");
    }else {
        console.log(i);
    }
}

