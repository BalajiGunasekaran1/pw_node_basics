const http = require('http');
const port = 4000;
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


const server = http.createServer((req,res)=>{
    res.statusCode == 200;
    res.write('<h1>I am happy to learn full stack development in pw skills</h1>')

})
eventEmitter.on('subscribe', () => {
    console.log(' subscribe college wallah');
  });
//   eventEmitter.off('subscribe', () => {
//     console.log(' subscribe college wallah');
//   });

// Off the emitter it will not triggered
eventEmitter.emit('subscribe')

//Get listeners
const maxListeners = eventEmitter.getMaxListeners();
console.log(`Default maximum number of listeners are : ${maxListeners}`);

eventEmitter.setMaxListeners(5);
const updated = eventEmitter.getMaxListeners()
console.log(`Updated maximum number of listeners are: ${updated}`);
server.listen(port,()=>{
    console.log(`server running at http://localhost: ${port}`);
})

