const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (fName,isLogged)=>{
    console.log(`${isLogged} : ${fName}`);
})

customEmitter.on('response', ()=>{
    console.log('data received');
})

customEmitter.emit('response','Hazar',false)