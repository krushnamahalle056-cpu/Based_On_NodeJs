let myName = "   Krushna    ";
console.log(myName.length);

for(let i = 1; i<=10; i++){
    if(myName === "krushna"){
        console.log("my dream is become a famous person in india");
        console.log("My name is :"+myName);
    }else{
        console.log("my name is not krushna");
    }

}

// String methods revision 

console.log(myName.trim());
console.log(myName.toLowerCase());
console.log(myName.toUpperCase().trim());
console.log(myName.toUpperCase().trim().slice(0,3));
console.log(myName.toUpperCase().trim().slice(0,2).concat("ish").toUpperCase());


let table = [2,4,6,8,10,12,14,16,18,20];
console.log(table);

// array methods revision
console.log(table.length);
console.log(table[0]);
console.log(table.push(22));
console.log(table.shift());

console.log(table);

console.log(table.pop(22));
console.log(table.unshift(2))

console.log(table);

console.log(table.includes(8));

let boys = ["krushna","sarthak"];
let girls = ["Aishwarya","Kashish"];
console.log(boys.concat(girls));

console.log(boys.join("girls"));
console.log(boys.reverse());
console.log(boys.slice());
console.log(girls.splice(0,1,"kashish"));
console.log(girls);

let students = ["krushna","sarthak","Hariom", "pavan","Aishwarya","kashish","shreya","vishal"];
console.log(students.sort());




