var a = 0;


let big = document.createElement("div");
let small = document.createElement("div");
let l = 0, t = 0, posi = 'right', set, st;
window.onload = function createButtons() {

    const stop = document.createElement('button');
    const start = document.createElement('button');
    stop.innerHTML = 'Stop';
    start.innerHTML = 'Start';
    start.style.marginRight = '116px'
    document.body.appendChild(start);
    document.body.appendChild(stop);
    ///Styling of big square
    big.style.width = "200px";
    big.style.height = "200px";
    big.style.position = "relative";
    big.style.border = "solid";
    big.style.marginTop = "10px";
    document.body.appendChild(big);
    ///Styling of small square
    small.style.width = "30px";
    small.style.height = "30px";
    small.style.position = "relative";
    small.style.backgroundColor = "red";
    //small.style.marginBottom = "10px";
    /////////////
    big.appendChild(small);

    //start.addEventListener('click', set = () => setInterval(f, 150));
    start.addEventListener('click', changer(1));
    stop.addEventListener('click', changer(2));

    function f() {
        if (posi === 'right') {
            l += 20;
            if (l > 200) {
                posi = 'down';
            }
        }
        else if (posi === 'down') {
            t += 20;
            if (t > 200) {
                posi = 'left';
            }
        }
        else if (posi === 'left') {
            l -= 20;
            if (l > 200) {
                posi = 'up';
            }
        }
        else if (posi === 'up') {
            t -= 20;
            if (l > 200) {
                posi = 'right';
            }
        }
        small.style.top = t + 'px';
        small.style.left = l + 'px';
    }

    function changer(a) {
          if (a % 2 == 0) {
            clearInterval(set)
        }
        else {
            clearInterval(set)
            set = setInterval(f, 150)
        }
    }
};
