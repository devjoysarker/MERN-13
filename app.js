

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const output  = document.getElementById('output');
const button3 = document.getElementById('button-3'); 

love='';

button1.addEventListener('click', function() {
    
    output.innerHTML = 'love ashetache....'

    love = setTimeout(() => {
        output.innerHTML=`We love MERN Stack`;
    },5000);
});

button2.addEventListener('click' , function(){

    clearTimeout(love);
    output.innerHTML=`Noton love asitesee....`;

    setTimeout( () =>{
     output.innerHTML = 'We Love paython';
    }, 5000);

});
// 2nd way

// const start = document.querySelector('#start');
// const stop  = document.querySelector('#stop');
// const result= document.querySelector('#result');
// const reset = document.querySelector('#reset');

// let counter_value = 0;
// let counter;

// start.addEventListener('click',function(){
  

//   counter = setInterval(() => {
//         result.innerHTML = counter_value;
//         counter_value++;

//     },1000);
   
// });

// stop.addEventListener('click', function() {

//     clearInterval(counter);
// });

// reset.addEventListener('click', function(){
//     counter_value = 0;
//     result.innerHTML = counter_value;
//     clearInterval(counter);
// });

//3rd way
 
const start = document.querySelector('#start');
const stop  = document.querySelector('#stop');
const result= document.querySelector('#result');
const count = document.querySelector('#count');
const load  = document.querySelector('.loader'); 

// load.style.width = '10%';
let counter_value;
let counter;

start.addEventListener('click', () => {

    counter_value = count.value;
    // result.innerHTML = counter_value;

   counter = setInterval(() => {
    result.innerHTML=counter_value;
   

   load.style.width = `${loader(count.value , counter_value)}%`

    if (counter_value == 0 ) {
        clearInterval(counter);
    }

    counter_value--;
    },1000);

   
});





