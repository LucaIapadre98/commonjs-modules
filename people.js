const {names} = require("./names");
const{hobbys} = require("./hobbies");

console.log(names);
console.log(hobbys);


function final () {
    const namesHobbys = {
        fullName: names,
        hobbies: hobbys
    }
    console.log(namesHobbys);
}

final();
