// Testing Numbers
const summ= (a,b)=>a+b;

// =======================
// Testing Strings
const greeting = (name)=> `Hello ${name}!`

// ========================================
// Testing Truthnes

const isEven = (number)=>{
    if(number %2 === 0)
        return true;
    else
        return false;
}

// ========================================
// Testing Arrays

const Animals = ['cat', 'dog', 'monkey'];
// ========================================

module.exports = {
    summ,
    greeting,
    isEven,
    Animals
}