window.onload = function main() {
    //Create Buttons
    var start = document.createElement('button');
    var stop = document.createElement('button');
    //Creating Squares
    var big = document.createElement('big');
    var small = document.createElement('small');
    start.innerHTML = 'Start';
    stop.innerHTML = 'Stop';
// //
    var body = document.getElementById('body');
    body.appendChild(start);
    body.appendChild(stop);
    body.appendChild(big);
    big.appendChild(small);
//Describe big square
    big.style.width = '350px';
    big.style.height = '350px';
    big.style.border = '1px solid';
    big.style.backgroundColor = 'aqua';
    big.style.margin = '50px';
    big.style.margin = '2px';
    big.style.top = '10px';
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
    start.addEventListener('click', function Circle() {
            var xAxis = 0;
            var yAxis = xAxis;

            while (true) {
                if (xAxis < 400 && xAxis == 0 && yAxis < 395 && yAxis == 0) {
                    xAxis += 5;
                    small.style.left = xAxis + 'px';
                }
                if (xAxis == 395 && xAxis > 0 && yAxis == 395 && yAxis > 0) {
                    xAxis -= 5;
                    small.style.left = xAxis + 'px';
                }

                if (xAxis == 395 && xAxis > 0 && yAxis < 395 && yAxis == 0) {
                    yAxis += 5;
                    small.style.top = yAxis + 'px';
                }

                if (xAxis < 395 && xAxis == 0 && yAxis < 395 && yAxis == 0) {
                    yAxis -= 5;
                    small.style.top = yAxis + 'px';
                }
            }
        }
    )
    ;
};
