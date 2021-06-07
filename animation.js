//@ts-check
console.log('linked successfully');

// an interval timed while loop

function animate(){

    // get orbit origin
    var svg = document.getElementById('target');
    let originX = parseInt(svg.style.width)/2;
    let originY = parseInt(svg.style.height)/2;

    // Get css selectors
    let priPlanet = window.document.getElementById('primary-planet');
    let secPlanet = window.document.getElementById('secondary-planet');

    // get current x and y co-ordinates
    let curPriPoint = [parseInt(priPlanet.getAttribute('cx')), parseInt(priPlanet.getAttribute('cy'))];
    let curSecPoint = [parseInt(secPlanet.getAttribute('cx')) , parseInt(secPlanet.getAttribute('cy'))];
    
    console.log('Current primary X-coordinate: ', curPriPoint);
    console.log('Current secondary Y-coordinate: ', curSecPoint);

    // convert to get phi, then increment phi and convert back


    // set new x and y co-ordinates

    let timeoutId = setTimeout(animate, 1000);

}

function convXYToPhi(Point, Origin){
    // a function that converts x, y of a phi value given a centre point reference

}

function convPhiToXY(Phi, Origin){
    // a function that converts a phi angle to an x, y with an origin reference
}