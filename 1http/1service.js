/*
 * @Author: TerryMin
 * @Date: 2022-05-19 15:43:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-20 10:47:05
 * @Description: file not
 */
const http = require('http');
let s = '';
for (let i = 0; i < 1024 * 10; i++) {
    s += 'a'
}

const str = s;
const bufStr = Buffer.from(s);
const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/buffer') {
        res.end(bufStr);
    } else if (req.url === '/string') {
        res.end(str);
    }
});

server.listen(3000);