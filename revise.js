// // let name = prompt("Enter your name");
// // console.log(name);

// let myName = "   Krushna    ";
// console.log(myName.length);

// for(let i = 1; i<=10; i++){
//     if(myName === "krushna"){
//         console.log("my dream is become a famous person in india");
//         console.log("My name is :"+myName);
//     }else{
//         console.log("my name is not krushna");
//     }

// }

// // String methods revision 

// console.log(myName.trim());
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase().trim());
// console.log(myName.toUpperCase().trim().slice(0,3));
// console.log(myName.toUpperCase().trim().slice(0,2).concat("ish").toUpperCase());


// let table = [2,4,6,8,10,12,14,16,18,20];
// console.log(table);

// // array methods revision
// console.log(table.length);
// console.log(table[0]);
// console.log(table.push(22));
// console.log(table.shift());

// console.log(table);

// console.log(table.pop(22));
// console.log(table.unshift(2))

// console.log(table);

// console.log(table.includes(8));

// let boys = ["krushna","sarthak"];
// let girls = ["Aishwarya","Kashish"];
// console.log(boys.concat(girls));

// console.log(boys.join("girls"));
// console.log(boys.reverse());
// console.log(boys.slice());
// console.log(girls.splice(0,1));
// console.log(girls);

// let students = ["krushna","sarthak","Hariom", "pavan","Aishwarya","kashish","shreya","vishal"];
// console.log(students.sort());

// let classmates = [["Hariom","pavan","krushna","Kashish"],["sarthak","Aishwarya","Shreya"]];
// console.log(classmates);

// let n = 20;
// console.log(`table of ${n}:\n`);
// for(let i=n; i<= n*10; i=i+n){
//     console.log(i);
// }

// // Now start the revision of function 
// let a=34 , b=2;

// function adition() {
//     let c=a+b;
//     console.log("addition of two numbers: "+c);
// } ;

// adition();

// const multiplication=()=>{
//     let d = a*b;
//     console.log("multiplication of a*b = "+ d);
// }

// multiplication();

// // Object concet revision 

// let studentInfo ={
//     Krushna: {
//         name:"krushna Mahalle",
//         cast: "OBC",
//         Eduction : "B tech",
//         branch : "Electronics and tellicommunition of Engineering",
//         age : 20,
//     },

//     Harion:{
//         name:"Hariom Narwade",
//         cast: "OBC",
//         Eduction : "B tech",
//         branch : "Electronics and tellicommunition of Engineering",
//         age : 20,
//     },

    
//     Pavan:{
//         name:"Pavan Lokhande",
//         cast: "NT",
//         Eduction : "B tech",
//         branch : "Electronics and tellicommunition of Engineering",
//         age : 20,
//     },

//     Sarthak:{
//         name:"Sarthak tayde",
//         cast: "OBC",
//         Eduction : "B tech",
//         branch : "Computer Engineering",
//         age : 20,
//     },

//     Rohan :{
//         name:"Rohan shinde",
//         cast: "OPEN",
//         Eduction : "B tech",
//         branch : "Computer Engineering",
//         age : 20,
//     }
 
// }

// // Object call 
// console.log(studentInfo);
// console.log(studentInfo.Harion);
// console.log(studentInfo.Krushna);
// console.log(studentInfo.Pavan);
// console.log(studentInfo.Sarthak);
// console.log(studentInfo.Rohan);
// console.log(studentInfo.Krushna.name);

// // Inbuild object 

// // first method
// let num = Math.random();
// num *10;
// num = Math.floor(num) + 1;
// console.log("print random number: "+num);

// // seconde method is best

// let random = Math.floor(Math.random()*10)+1;
// console.log("Another random number : "+ random);


// // New small project 

// switch(random){
//     case 1:{
//         console.log("I love you MOM");
//     }
//     break;

//     case 2:{
//         console.log("I Love You Pappa");
//     }
//     break;
//     case 3:{
//         console.log("I Love you shilpa tai");
//     }
//     break;
//     case 4:{
//         console.log("I love Rani tai");
//     }
//     break;
//     case 5:{
//         console.log("I love you Lavanya Dada");
//     }
//     break;
//     case 6:{
//         console.log("I Love you Krushna");
//     }
//     break;
//     case 7:{
//         console.log("My Best Friend Name is Kashish");
//     }
//     default:{
//         console.log("Number is 8 and 9");
//     }
// }


const myFacMovie = "Krish";
let guess = prompt("Guess my favourite movie name");

while(true){
    if(guess !== myFacMovie){
        guess = prompt("Wrong guess! Try again:");
    }else if (guess === myFacMovie){
        console.log("Congratulations! You guessed it right!");
        break;
    }else{
        console.log("Invalid input. Please try optin :1.M.S Dhoni 2. Krish 3. Bahubali");
    }
}