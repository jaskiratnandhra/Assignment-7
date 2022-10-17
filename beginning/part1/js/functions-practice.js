//STEP 1
function halfnum(num){
    var b = num/2;
    window.console.log("Half of ",num, "=", b);
    return b;}   

//STEP 2
function squarenum(num){
    var a = num * num;
    window.console.log("Squaring the num ", num, " = ", a);
    return a;
}

//STEP 3
function percentOf(a, b)
{
    var r = a/b * 100;
    window.console.log(a," is ",r, "% of ",b);
    return r;
}
//STEP 4
function findModulus(x, y)
{
    var r = x % y;
    window.console.log(r," is the modulus of ",x, " and ",y);
    return r;
}

//STEP 5
function sumNumbers(num){
    var sum = 0;
    var i = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + parseInt(num[i]);
        window.console.log(sum);
    }
    return sum;
}

function main() {
    var choice, num, n1, n2, numarr;
    while(choice !== 6) {
        choice = parseInt(window.prompt("Menu:\n1: 1/2 a Number\n2: Square a Number\n3: Percent of a Number\n4: Modulus of Numbers\n5: Find sum of numbers\n6: Exit"));
        if(choice === 1) {
            num = window.prompt("Enter a number");
            window.alert(halfNumber(num));
        }
        else if(choice === 2) {
            num = window.prompt("Enter a number");
            window.alert(squareNumber(num));
        }
        else if(choice === 3) {
            n1 = window.prompt("Enter first number");
            n2 = window.prompt("Enter second number");
            window.alert(percentOf(n1, n2));
        }
        else if(choice === 4) {
            n1 = window.prompt("Enter first number");
            n2 = window.prompt("Enter second number");
            window.alert(findModulus(n1, n2));
        }
        else if(choice === 5) {
            num = window.prompt("Enter numbers separated by commas");
            numarr = num.split(",");
            window.alert(sumNumbers(numarr));
        }
        else if(choice === 6){
            break;
        }
    }
}

main();