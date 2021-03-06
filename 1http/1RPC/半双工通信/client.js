/*
 * @Author: TerryMin
 * @Date: 2022-05-19 17:58:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-19 17:58:57
 * @Description: file not
 */
const net = require('net');
const { getRandomBookId } = require('../code');

const socket = new net.Socket();

let currentBookId = null;

socket.connect({
    host: '127.0.0.1',
    port: 3000,
});

/**
 * 数据打包
 * @param {string} bookId
 * @returns {buffer}
 */
const encode = (bookId) => {
    const buffer = Buffer.alloc(2);
    buffer.write(bookId);
    return buffer;
}

/**
 * 发送请求
 */
const sendRequest = () => {
    currentBookId = getRandomBookId();
    socket.write(encode(currentBookId));
}

sendRequest();

socket.on('data', (buffer) => {
    console.log(`书籍 ${currentBookId}: ${buffer.toString()}`);
    sendRequest();
});