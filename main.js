//number 1
// function maxMin(){
//     var num = prompt("give a number");
//     var max = 0;
//     var min = num;
//     while(num != 0){
//         if(num >= min && num >= max){
//             max = num;
//         }
//         if(num <= min){
//             min = num;
//         }
//         num = prompt("give another number");

//     }
//     console.log("max",max,"min",min);
// }
// maxMin();

//number 2 
// function even(){
//     var arr = [];
//     var arr2 = [];
//     for(var i=0; i < 10; i++){
//         var num  = +prompt("give a number");
//         arr.push(num);


//     }
//     console.log(arr,arr2);
//     for(var j = 0; j < 10; j++){
//         console.log(arr);
//         if(arr[j]% 2 === 0) {
//             arr2.push(arr[j]);
//         }
//     }

//     console.log(arr);
//     return arr2;

// }
// var result = even();
// console.log(result);


//number 3 
// function rndLotto(){
//     var arr = [];
//     var counter = 0;
//     var userNumber = +prompt("give a number");
//     if(userNumber < 100){
//     for(i=0; i < 100; i++){
//         var x = Math.floor(Math.random() * 100)
//         arr.push(x);

//             if(arr[i] === userNumber){
//                counter++;
//             }

//         }



//     if(counter > 0){
//         var message = "yay";
//     }
//     else{
//         var message = "ohh";
//     }
// }
// else{
//     console.log("give a number below");
// }
//     console.log(message, arr);
// }
// rndLotto();

//number 4 
// function names(str){
//     var lenStr = str.length;
//     var name = prompt("give me a name");
//     var len = name.length;
//     for(i=0; i < 1; i++){
//         if(str[0] === name[0]){
//             console.log("Nice");
//         }
//         else{
//             console.log("the first letter not A");
//         }
//         if(str[lenStr - 1] === name[0]){
//             console.log("Good");
//         }
//         else{
//             console.log("the first letter not Z");
//         }
//     }

// }
// names("abcdefghiz");

//number 5
// function fizzBuzz(){
//     for(i=1; i < 100; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz",i);
//      }


//         if(i % 3 === 0){
//             console.log('fizz',i);

//         }
//         if(i % 5 === 0){
//             console.log("buzz",i);
//         }
//         else if(i % 3 !== 0 && i % 5 !== 0){
//             console.log(i);
//         }

//     }
// }
// fizzBuzz();

// lotto mission
function lotto() {
    var userArray = [];
    var randomArray = [];
    var userName = " ";
    var userNumber = 0;
    var counterWin = 0;
    var randomNum = 0;
    userName = prompt("please enter your name");
    for (var j = 0; j < 50; j++) {
        randomNum = Math.floor(Math.random() * 100);
        randomArray.push(randomNum);
    }
    for (var index = 1; index < 50; index++) {
        if (index > 0) {
            if (randomArray[index] === randomArray[index + 1]) {
                randomArray.pop();
                index--;
                randomArray[index] = Math.floor((Math.random() * 100));
                if (randomArray[index] === randomArray[index + 1]) {
                    randomArray.pop();
                    randomArray[index] = Math.floor((Math.random() * 100));

                }
            }

        }
    }

        userNumber = +prompt(`please enter a number`);
        userArray.push(userNumber);
        for (var i = 0; i < 9; i++) {
            userNumber = +prompt(`please enter a number ${i}`);
            userArray.push(userNumber);     
                if (userArray[i + 1] === userArray[i]) {
                    userArray.pop();
                    userNumber[i] = +prompt(`please enter a number again ${i}`);
                    userArray.push(userNumber); 
                    i--;
                 
                }
            
        }

    
 
   console.log(randomArray,userArray);

    for (var h = 0; h < 10; h++) {
        for( var i = 0; i < 50; i++){
            if(userArray[h] === randomArray[i]){
                counterWin++;
            }
        }
    }

    console.log(`you right in ${counterWin} in ${randomArray} with your number${userArray} lets try again`);
}
lotto();

// function firstLast(firstName,lastName){
//     var firstLatter = firstName.substr(0,1);
//     var upperLetters = lastName.toUpperCase();
//     console.log(firstLatter, "."," ", upperLetters); 
// }
// firstLast("Lior","solomon");

// function lastNames(last1,last2){
//     var last1Len = last1.length;
//     console.log(last1Len);
//     var last2Len = last2.length;
//     if(last1Len > last2Len){
//         console.log(last2.toLowerCase());
//         return last1.toUpperCase();
//     }
//     if(last1Len < last2Len){
//         console.log(last1.toLowerCase());
//         return last2.toUpperCase();
//     }
//     else{
//         console.log("equal");
//     }
// }
// var result = lastNames("solo","mon");
// console.log(result);

// function signName(sign1,name){
//       if(name.match(sign1)){
//          console.log(`the sign ${sign1} is in the name ${name} `);
//      }
//      else{
//          console.log("the sign is not in the name");
//      }
// }
// signName("r","lior");