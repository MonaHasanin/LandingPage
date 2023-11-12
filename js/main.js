let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains1 = document.getElementById('mountains1');
let mountains2 = document.getElementById('mountains2');
let mountains3 = document.getElementById('mountains3');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let name = document.querySelector('.name');


window.onscroll = function (){
    let value = scrollY;
    //console.log(value);
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains1.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value *3  + 'px';
    
    name.style.fontSize = value  + 'px';
    if (scrollY >= 67) {
        name.style.fontSize = 67 + 'px';
        name.style.position = 'fixed';
        if (scrollY >= 478) {
            name.style.display = 'none';
        } else {
            name.style.display = "block";
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #100011)';
        }
    }
}