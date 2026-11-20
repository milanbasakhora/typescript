const name:string = 'Milan';
const age:number = 25;

function greet(person:string, years: number): string{
    return `Hi ${person}, you are ${years}.`
}
console.log(greet(name,age));