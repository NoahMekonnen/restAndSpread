// filterOutOdds() refactor

const filterOutOdds = () => [...arguments].filter(num => num % 2 === 0)

// findMin() function

function findMin(){
    return [...arguments].reduce(min,next){
        if (min > next){
            return next
        }
        return min
    }
}

// mergeObjects

function mergeObjects(a,b){
    return {...a,...b}
}

// doubleAndReturnArgs

function doubleAndReturnArgs(arr,...nums){
    return nums.reduce(a,b){
        return [...arr,a,b]
    }
}