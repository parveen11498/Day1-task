var json = [{
    "id" : "001", 
    "name" : "parvin khan",
    "task"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "submit": "github.com"
},
{
    "id" : "002", 
    "name" : "parvin khan",
    "task"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "submit": "github.com"
},
{
    "id" : "003", 
    "name" : "parvin khan",
    "task"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "submit": "github.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.task);
    console.log(obj.submit);

}
//for Each
json.forEach(function(obj) { console.log(obj.task); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  console.log(json[key].submit);
 
}
}
//for Of
let Name = "";
for (let x of json[key].id) {
 Name += x; 
}
 console.log(Name);
