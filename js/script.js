function typeWord(element){
    var letterArray = element.html().split('');
    element.html('');
    letterArray.forEach((letter, i)=> {
        setTimeout(() => {
            var str = element.html();
            element.html(str += letter);
            // console.log(element.html(str += letter));
            // element.+= letter); 
        }, 80 * i);    
    });
}
var string = $('h1');
typeWord(string);

setTimeout(() => {
    window.location.href = 'https://github.com/lucasemanuel';
}, 3000);    

