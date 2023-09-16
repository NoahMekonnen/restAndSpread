// filterOutOdds() refactor

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0)

// findMin() function

function findMin(...arguments){
    return arguments.reduce(function(min,next) {
        if (min > next){
            return next
        }
        return min
    })
}

// mergeObjects

function mergeObjects(a,b){
    return {...a,...b}
}

// doubleAndReturnArgs

function doubleAndReturnArgs(arr,...nums){
    return nums.reduce(function(a,b){
        a.push(b*2)
        return a
    },arr)
}

/** remove a random element in the items array
and return a new array without that item. */


const removeRandom = items => {
    items.splice(Math.floor(Math.random()*items.length),1)
    return items
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1,...array2]


/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
//     if (!obj[key])
//     {
//         obj[key] = val
//         return obj
//     }
//     return 'it be there already'
// }

const addKeyVal = (obj, key, val) => {
    if (!obj[key])
        {
        obj[key] = val
        return obj
        }
    return 'it be there already'
}


/** Return a new object with a key removed. */

// function removeKey(obj, key) {
//     delete obj[key]
//     return obj
// }

const removeKey = (obj, key) => {
    delete obj[key]
    return obj
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
//     return {...obj1,...obj2}
// }

const combine = (obj1,obj2) => ({...obj1,...obj2})


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {
//     if (obj[key])
//     {
//         obj[key] = val
//         return obj
//     }
//     return "Nah"
// }

const update = (obj, key, val) => {
    if (obj[key])
    {
        obj[key] = val
        return obj
    }
    return "Nah"
}