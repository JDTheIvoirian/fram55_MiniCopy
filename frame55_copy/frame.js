
var write = document.querySelector('span')

var typewriter = new Typewriter(write, {
    loop: true
});

typewriter.typeString('écrivons')
    .pauseFor(2000)
    .deleteAll()
    .typeString('produisons')
    .pauseFor(2000)
    .deleteAll()
    .typeString('diffusons')
    .pauseFor(2000)
    .deleteAll()
    .typeString('co-créons')
    .pauseFor(1500)
    .start();



var img2 = document.getElementById('img2')

function change1() {
    img2.src = "img/position_left.png"
    img2.style.marginLeft = 0
    //img2.style.transition = "0.5s"
    img2.style.animation = "fadeout 0.7s 2 ease-in-out"
}

function change2() {
    img2.src = "img/position_right.png"
    img2.style.marginLeft = "150px"
    //img2.style.transition = "0.5s"
    img2.style.animation = "fadeout 1s 2"

}
//img2.addEventListener('mouseover', change1())

