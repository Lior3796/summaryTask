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
function even(){
    var arr = [];
    var arr2 = [];
    for(i=0; i < 10; i++){
        var num  = +prompt("give a number");
        arr.push(num);
      
        
    }
    console.log(arr,arr2);
    for(var j = 0; j < 10; j++){
        console.log(arr);
        if(arr[j]% 2 === 0) {
            arr2.push(arr[j]);
        }
    }
    
    console.log(arr);
    return arr2;

}
var result = even();
console.log(result);