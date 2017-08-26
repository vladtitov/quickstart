"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
let $;
request('https://coinmarketcap.com/gainers-losers/', function (err, r, body) {
    $ = cheerio.load(body);
    let ids = ['#gainers-1h', '#gainers-24h', '#gainers-7d', '#losers-1h', '#losers-24', '#losers-7d'];
    let i = 0;
    let data = [];
    ids.forEach(function (topic) {
        data.push([topic]);
        let rows = $(ids[i] + ' table>tbody').children('tr');
        let table = parseTableRows(rows);
        data = data.concat(table);
    });
    let fileData = JSON.stringify(data);
    fs.writeFile('gainers-losers.json', fileData, function (err) {
        console.log(err);
    });
});
let parseTableRows = function ($rows) {
    console.log($rows.length);
    let rows = [];
    $rows.each(function (i, item) {
        let cols = [];
        $(item).children('td').each(function (j, item) {
            let cell = $(item);
            let a = cell.find('a');
            let str = a.length ? a.text() + '__' + a.attr('href') : cell.text();
            cols.push(str);
        });
        rows.push(cols);
    });
    return rows;
};
