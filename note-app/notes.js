const fs=require('fs');

add = (note) =>{
let notestr = fs.readFileSync("./note-app/notes.json");
let notes = JSON.parse(notestr);
console.log("hello", notes);

notes.push(note);
fs.writeFileSync("./note-app/notes.json", JSON.parse(notes));
console.log("notes", note)
}
remove = (notes) =>{
console.log("notes", notes)
}
list = (notes) =>{

}
read = (notes) =>{

}
module.exports={
    add, remove, list, read
};