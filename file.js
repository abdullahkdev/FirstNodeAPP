const fs = require('fs');

//read
fs.readFile('./docs/mydocument.txt', ((err,_res)=>{

    if(err){
        console.log(err);
    }
   else if(_res)
    console.log(_res.toString());
    
}));

//write


fs.writeFile('./docs/mydocument.txt','Heellow Abdullah this is writing to file through node js', () =>{
    console.log('writing is successful');
})

fs.writeFile('./docs/mydocument2.txt','Heellow Abdullah this is writing to file through node js', () =>{
    console.log('writing is successful');
})

//directories


if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('hello world');
})
} else {
    fs.rmdir('./assets', ()=>{
        console.log('remove');
    })
}
//deleting files

if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt',()=>{
        console.log('deleted');
    })
}