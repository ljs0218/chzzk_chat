let params = new URLSearchParams(window.location.search);
let id = params.get('id');
console.log(id);

fetch('http://api.chzzk.naver.com/polling/v1/channels/' + id + '/live-status')
    .then(response => response.json())
    .then(data => console.log(data));

// let socket = new WebSocket('wss://kr-ss4.chat.naver.com/chat');

// socket.addEventListener('open', (event) => {
//     console.log('[Connection Opened]');
// });

// socket.addEventListener('message', (event) => {
//     console.log(`[Received Message] \n\tType: ${event.type}\n\tContent > ${event.data}`);
// });

// socket.addEventListener('error', (event) => {
//     console.log(`[An error occurred: ${event.error}]`);
// });

// socket.addEventListener('close', (event) => {
//     console.log(`[Connection closed. Reason: ${(event.wasClean ? 'Clean close' : 'Unclean close')}] \n\tType: ${event.type}`);
// });