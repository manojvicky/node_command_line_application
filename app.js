const yargs=require('yargs');
const notes=require("./note-app/notes");
const argv=yargs.argv;
let command=argv["_"][0];
console.log(command);

let title= argv.title;
let body= argv.body;

if(command==="add"){
let note={title: title,body: body}
notes.add(note)
}else if(command==="remove"){

}else if(command==="list"){

}else if(command==="read"){

}else{
    console.log("command is not reconziable");
}