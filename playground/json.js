//var obj={
  //name:"Nishant"
//};
//var stringobj=JSON.stringify(obj);
//console.log(typeof stringobj);
//console.log(stringobj);
//var personString='{"name":"Nishant","age":"21"}';
//var person=JSON.parse(personString);
//console.log(typeof person);
//console.log(person);



const fs=require('fs');
var originalNote={
  title:'Some title',
  body:'Some Body'
};
var originalnoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalnoteString);
var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
