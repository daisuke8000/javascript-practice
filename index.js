function showElements() {
    var elements = document.getElementsByName('div');
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].innerText);
        elements[i].innerText = 'divだよん'
    }
}
function nameElements(){
    var boot = document.getElementsByName('result');
    console.log(boot[0].value);
    document.write(boot[0].value);
}