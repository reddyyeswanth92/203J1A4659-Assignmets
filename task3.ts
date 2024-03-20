interface Person
{
    name:string;
    age:number;
    email:string;
}
let User=(u:Person)=>{
    console.log(u.name);
    console.log(u.age);
    console.log(u.email);
}
User({
    name :'yeswanth',
    age :20,
    email : 'ry@gmail.com'

})