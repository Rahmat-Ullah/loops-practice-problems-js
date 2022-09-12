var items = ['laptop', 'soundbox', 'monitor', 'mouse'];

for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'monitor'){
        continue;
    }
    console.log(item);
}