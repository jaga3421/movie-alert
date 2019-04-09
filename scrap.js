
const makeCall = require('./makeCall');
const rp = require('request-promise');
const movieJson = 'https://www.jazzcinemas.com/FilmVista/GetNowShowingList';

const scrapp = new Promise(resolve => {
    rp(movieJson)
        .then(function (html) {
            html = JSON.parse(html);
            resolve(html.map(element => element.Name));
        })
})

const isAvengers = list=> {
    for(let i=0;i<list.length;i++){
        if (list[i].toLowerCase().includes('avengers')) {
            return true;
        }
    }
}

scrapp.then(data=>{
    console.log(data)
    if (isAvengers(data)) {
        makeCall();
        console.log(`Avengers Booking Opened: ${new Date}`)
    }
    else {
        console.log(`Not Opened: ${new Date}`)
    }
})



