// for(var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i > 10){
//         break;
//     }
// }

var i =0;
while(i < 10){
    console.log(i);
    i++;
    if(i>4){
        break;
    }
}

var items = ['laptop', 'soundbox', 'monitor', 'mouse'];

for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'monitor'){
        break;
    }
    console.log(item);
}