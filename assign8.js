//function that prints my name and age

function myNameDynamic(Name) {
    console.log (Name)
}
myNameDynamic("Suzan Apolot, 38yrs")
myNameDynamic("Joyce Makoma, 27yrs")
myNameDynamic("Daisy Kamusiime, 21yrs")
myNameDynamic("Kayaga Sophie, 23yrs")
myNameDynamic("Kabahita Victoria, 30yrs")


/*A function that takes another function as a parameter and 
returns the result of calling the parameter function*/

function calculateMyAge (yearOfBirth) {
    let currentYear=new Date().getFullYear();
    myAge=currentYear-yearOfBirth;
    return myAge
}
function displayAge(name, yearOfBirth){
    let age=calculateMyAge(yearOfBirth);
    message="Your Name is " + name + " and Your age is " + age;
    console.log(message);}
    
    displayAge("Suzan Apolot",1988) 


/*arrow function and in it have two local variables concatenated together and assign 
the result to a new variable and the function call should print to the console.*/
let join = (a, b) => { 
    return ("a" + " b") 
 }
 console.log (join(a,b))

// loop of your choosing to print I love Uganda 19 times.

let loveUg =19; 
for (num=0; num <= loveUg; num++);
{
    console.log("I Love Uganda!", num)
}
