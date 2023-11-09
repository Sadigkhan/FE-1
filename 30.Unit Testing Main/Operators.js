function sum(a, b) {
    if(typeof a === "string" || typeof b === "string"){
        throw new Error('tereflerden hec biri string ola bilmez')
    } else {
        return a+b;
    }
}

function chixma (a,b) {
    if(typeof a === "string" || typeof b === "string"){
        throw new Error('tereflerden hec biri string ola bilmez')
    }else {
        return a-b 
    }
   
}

function devide(a,b){
    if (a!==0 && b === 0) {
        throw new Error('Cannot divide by zero');
    }
    else if(a===0 && b===0){
        throw new Error('Invalid Format');
    }
    return a / b;
}

function multiply(a,b){
    if(a<=0 || b<=0){
        throw new Error(`one of the operand cannot be negative number or zero`)
    }
    else if(typeof a === "string" || typeof b === "string"){
        throw new Error('tereflerden hec biri string ola bilmez')
    }
    else{
         return a*b
    }
}
module.exports={sum,chixma,devide,multiply}
