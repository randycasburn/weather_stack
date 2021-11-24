import express from "express";
//import path from "path";
import fs from "fs";
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    calcWeather1()
});

function calcWeather1() {
    //var data = fs.readFileSync("./json/data2.json", "utf8");
    const json = fs.readFileSync("./json/data2.json", "utf8");
    const data = JSON.parse(json);
    console.log(typeof data)
    /*const data = [{
        "latjson": "33.44",
        "lonjson": "-94.04",
        "IdOficina": "1"
    },
    {
        "latjson": 2,
        "lonjson": 2,
        "IdOficina": "2"
    }
    ];*/

    for (let item of data) {
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${item.latjson}&lon=${item.lonjson}&exclude=hourly,daily&appid=123`;

        console.log(`Official Id: ${item.IdOficina}`);
        console.log(url);
        console.log('-----------');
    }
    // let base = `https://api.openweathermap.org/data/2.5/weather?lat=${item.latjson}&lon=${item.lonjson}&appid=${api_key}&units=metric&lang=sp`;
}