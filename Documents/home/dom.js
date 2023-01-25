////////////////////////homework DOM///////////////////////////////
//////////////////////////////1////////////////////////////
// function enterSum (){
//     if(enterSum){
//         let lastNumber = document.getElementById('ipnutSum').value % 10;
//         max = parseInt(lastNumber / 10);
//         let maxSum=lastNumber + max;
//         console.log(maxSum+lastNumber); 
//     }
// }
////////////////////////////2/////////////////////////

// function entertext(){
//  let input1 = document.getElementById('input1');
// 	let input2 = document.getElementById('input2');
// 	let input1Value = input1.value;
// 	let input2Value = input2.value;
// 	input1.value = input2Value;
// 	input2.value = input1Value;
// }



////////////////////////3////////////////////
// const btn = document.getElementById('btn');

// btn.onclick = () =>{
//     if(btn.style.background === 'red'){
//         btn.style.backgroun12d = 'yellow';
//     }else{
//            btn.style.background = 'red';
//     }
// }
////////////////////4/////////////////////
// function btnBlock(){
//     let input = document.getElementById('input');
//     input.desabled = true;
// }
// function btnUnblock(){
//     let input = document.getElementById('input');
//     input.desabled = false;
// }



/////////////////class work//////////////

// const btn = document.getElementById('btn');
// function flipflap(){
//    if(btn.innerHTML==='Flip'){
//       btn.innerHTML = 'Flop'
//    }else{
//       btn.innerHTML='Flip';
//    }  
// }


///////////////////2/////////////////

// function enterMe(){
//    let input=  document.getElementById('input');
//    alert(input.value**2);

// }



//////////////////////4/////////////////////////


// const cars=['Toyota', 'BMW', 'Mercedes', 'KIA'];


// const div = document.getElementsByTagName('div')[0];


// cars.map((car_name,index) => {
//    div.innerHTML +=  `<p>Машина #${index+1}: ${car_name}</p`; 
// });


// function hello(){
//    alert('привет');
// }

// const btn=document.getElementById('btn');
// function buttonClick(){
//    if(btn.innerHTML === '!!!'){
//       btn.innerHTML = 'flop';
//    }else{
//       btn.innerHTML='!!!';
//    }
// }

// const inpText=document.getElementById('inpText');
// function buttonClick(){
//    alert(inpText.value);
// }

// const inpNumber1 = document.getElementById('inpNumber1');
// const inpNumber2 = document.getElementById('inpNumber2');

// function buttonClick(){
//    alert((Number(inpNumber1.value))+(Number(inpNumber2.value)));
// }

// function buttonClick1(){
//    alert((Number(inpNumber1.value))-(Number(inpNumber2.value)));
// }

// function buttonClick2(){
//    alert((Number(inpNumber1.value))*(Number(inpNumber2.value)));
// }

// function buttonClick3(){
//    alert((Number(inpNumber1.value))/(Number(inpNumber2.value)));
// }


// let block = document.getElementById('one');

// один клик
// block.onclick = function(){
//    this.style.background = 'red';
// }


//////двойвой клик
// block.ondblclick = function(){
//    this.style.background = 'red';
// }
// block.oncontextmenu = function(){
//    this.style.background = 'black';
// }


// block.onmouseenter = function() {
//    alert('hello world !!!');
// }

// const btn = document.getElementById('btn');
// let count = 0;
// function btnClick(){
//   count++;
//   btn.innerHTML=count;
// } 

// const btn = document.gete('btn2'); 
// function btnHide(){
//    btn.style.display = 'none';
// }

// function btnShow(){
//    btn.style.display = 'inline-block';
// }


// document.getElementById('show').addEventListener('click',displayDate);
// function displayDate() {
//    document.getElementById("demo").innerHTML = Date();
//  }


// const iin_client =document.getElementById('iin_client'); 


// function clickME(){
//    if(isNaN(Number(iin_client.value)) === false){
//       console.log(iin_client.value);
//    }else{
//       console.log('иин должно состоять только из чисел');
//    }
//    if(iin_client.value.length !== 12){
//       console.log('Длина ИИН должен быть 12 чисел');
//    }
  
// }

const images = ['1.JPG','2.HEIC', '3.HEIC'];
let counter=0;
let input = document.getElementById("foto");
function click_left(){
   if(counter==0){
      counter= images.length-1;
   }else{
      counter-=1;
   }
   input.src = images[counter];
   

}

function click_right(){
   if(counter==images.length-1){
      counter=0;
   }else{
      counter+=1;
   }
   input.src = images[counter];
   
}





   