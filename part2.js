

const button = document.getElementById('hello');
// const result = document.getElementById('result');

button.addEventListener('change',function(event){

    const button = event.target.value;

    if(result){
        result.textContent = "Hello Student";
    }
    else{
        result.textContent ="Welcome to our class";
    }
});
console.log(result);

