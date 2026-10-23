// //10.
let num=5;
let fact=1;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact)

// //11.
let number=[1,2,3,4,5]



//2.
let number1=5
for(i=1;i<=5;i++){
    let row=" ";
    for(j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

//3.

let pali=121;
let original=num;
let rev=0;
while(num>0){
    let digit=num%10;
    rev=rev*10+digit;
    num=Math.floor(num/10)
}
if(original===rev){
    console.log("palindorme")
}
else{
    console.log("Not a palindrome")
}

//7.
 numb={23,43,6,12}
 largest=0;
 smallest=0;
 for(i=0;i<=numb;i++){
    if(num>largest && num>smallest)
        largest=numb[i]
    else{
        laregst=smallest
    }
 }

 //3.
 const count=document.getElementById("reset")
 



