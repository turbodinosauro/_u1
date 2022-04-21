
//gestisco il menu da mobile
function openMenu() {

    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}


const api_url =  "https://gitlab.tools.moocloud.ch/webhook/u1/test1";

//ottengo titolo e sconto
async function getapi(url) {

    const response = await fetch(url);
    var data = await response.json();
    show(data);

}

getapi(api_url);

function show(data) {


    //faccio partire il contatore fino allo sconto stabilito
    document.getElementById('mainTitle').innerHTML = data.title;
    var counter = 0
    countInterval = setInterval(function () {

        counter++;
        if (counter <= data.discount)
            document.getElementById('percentage').innerHTML = counter + '%';
        else
            clearInterval(countInterval)
    }, 50)
}

//mostro i box viola 
const showUpBoxes = document.getElementsByClassName('showUp');
setTimeout(() => {
    Array.prototype.forEach.call(showUpBoxes, function (box) {
        box.style.cssText = "visibility:visible;opacity:1"
    });
}, 500);