// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*'){
    return function(adj='special'){
        return `You are ${string}${adj}${string}!`
    }
}

let Calculator = {
    add:    function(a,b){
        return a + b
    },
    subtract:   function(a,b){
        return a - b
    },
    multiply:   function(a,b){
        return a * b
    },
    divide:   function(a,b){
        return a / b
    }
}

function actionApplyer(int, ary){
    if (Array.isArray(ary) && ary.length){
        let a = int
        for (let i=0; i < ary.length; i++){
            a = ary[i](a)
        }
        return a
    } else {return int}
}