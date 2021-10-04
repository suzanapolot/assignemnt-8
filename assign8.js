// function myNameDynamic(Name) {
//     console.log ('Name,')
// }
// myNameDynamic("Suzan Apolot")
// myNameDynamic("Joyce Makoma")
// myNameDynamic("Daisy Kamusiime")
// myNameDynamic("Kayaga Sophie")
// myNameDynamic("Kabahita Victoria")

/*A function that takes another function as a parameter and 
returns the result of calling the parameter function*/
function calculateMyAge (yearOfBirth){
    let currentYear=new Date().getFullYear()
    myAge=currentYear-yearOfBirth;
    return myAge
}
function displayAge(name, yearOfBirth){
    let age=calculateMyAge(yearOfBirth);
    message="Your Name is" + name + " and Your age is "+age;
    console.log(message);
    displayAge("Suzan Apolot",1990) 
}