window.onload = function main() {
    //Create Buttons
    var start = document.createElement('button');
    var stop = document.createElement('button');
    var brake = document.createElement('br');
    //Creating Squares
    var big = document.createElement('big');
    var small = document.createElement('small');
    start.innerHTML = 'Start';
    stop.innerHTML = 'Stop';
// //
    var body = document.getElementById('body');
    body.appendChild(start);
    body.appendChild(stop);
    body.appendChild(brake);
    body.appendChild(big);
    big.appendChild(small);
//Describe big square
    big.style.width = '350px';
    big.style.height = '350px';
    big.style.border = '1px solid';
    big.style.backgroundColor = 'aqua';
    //big.style.margin = '50px';
    big.style.margin = '2px';
    //big.style.top = '50px';
    big.style.position = 'absolute';
//Describe small square
    small.style.width = '50px';
    small.style.height = '50px';
    small.style.border = '1px solid';
    small.style.backgroundColor = 'green';
    small.style.position = 'absolute';
    small.style.left = '0px';
    small.style.top = '0px';

    //Event handlers
    // function trueFalse() {
    //     return true;
    // }

    //stop.addEventListener('click', !trueFalse);
    start.addEventListener('click', function Circle() {
            var xPos = 0;
            var yPos = xPos;
//stop.addEventListener('click',!trueFalse )
            while (true) {
                if (xPos == 0 && yPos == 0 || xPos <= 350) {
                    for (; xPos <= 350; xPos + 5) {
                        small.style.left = xPos + 'px';
                    }

                }
                // if (xPos == 395 && xPos > 0 && yPos == 395 && yPos > 0) {
                //     xPos -= 5;
                //     small.style.left = xPos + 'px';
                // }
                //
                // if (xPos == 395 && xPos > 0 && yPos < 395 && yPos == 0) {
                //     yPos += 5;
                //     small.style.top = yPos + 'px';
                // }
                //
                // if (xPos < 395 && xPos == 0 && yPos < 395 && yPos == 0) {
                //     yPos -= 5;
                //     small.style.top = yPos + 'px';
                // }
            }
            // stop.addEventListener('click', !trueFalse);
        }
    )
    ;

};

