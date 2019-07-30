var request = require('request');

listOfHolidays = [];

function call(year, month, day) {
    request(('https://pholiday.herokuapp.com/gdate/'+ year + "-" + month + "-" + day), function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);

            if(info.isHoliday == true) {
                let isItFriday = false;

                info.events.forEach(event => {
                    if (event.isFriday != undefined) {
                        isItFriday = true;
                    }
                });

                if (!isItFriday) {
                    listOfHolidays.push(info);
                    console.log(info.date, ", It's a non-friday holiday!");
                    nextDay(year, month, day);
                }
                else {
                    nextDay(year, month, day);
                }
            }
            else {
                nextDay(year, month, day);
            }
        }
        else {
            nextDay(year, month, day);
        }
    })

}

function nextDay(y, m, d) {
    d += 1;

    if (d == 31) {
        d = 1;
        m += 1;
    }

    if(m == 13) {
        m = 1;
        y += 1;
    }

    if(y <= 2020) {
        call(y, m, d);
    }
    else {
        console.log(listOfHolidays);
    }
}

console.log("Please wait a moment...")
call(2019, 1, 1);