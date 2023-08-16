const fs = require('fs')
const os = require('os')
//Asynchronous
fs.readFile('nodejs_architecture.txt',(err,data)=>{
    if(err){
        console.log(err);

    }else{
        console.log('Asynchronous:' ,data.toString()); // we can use to string for read the content using string format otherwise use options - utf-8
    }
})

//synchronous
try{
const readFile = fs.readFileSync('nodejs_architecture.txt','utf-8')
console.log('Synchronous: ',readFile);
}catch(e){
    console.log(e);
}


// use append to add additional content to the text file
const textData = 'Node js can easily handle multiple client request without requiring multiple threads consuming less memory and threads';
fs.appendFile('nodejs_architecture.txt',textData,err =>{
    if(err){
        console.log(err);
    }
    console.log('File append Successfully');
});

//Delete the file
fs.unlink('nodejs_architecture.txt',err =>{
    if(err){
        console.log(err);
    }
    console.log('File deleted Successfully');
})

// os name and release information
const osName = os.type()
const osRelease = os.release()

console.log(`The os name is ${osName} and the release is ${osRelease}`);

