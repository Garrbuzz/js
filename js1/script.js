window.onload = function() {
    let str = "i am in the easycode";
let strWords = str.split(' ');
let newStrWords = [];
let newStr = '';
for (var i = 0; i < strWords.length; i++) {
    newStrWords[i] = strWords[i][0].toUpperCase();
    for (let j = 1; j < strWords[i].length; j++) {
        newStrWords[i] += strWords[i][j];
    }
}
newStr = newStrWords.join(' ');
console.log(str);
console.log(newStr);


    // let str = 'tseb eht ma i';
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // console.log(str);
    // console.log(newStr);


    // let factorial = 1;
    // for (i = 2; i <= 10; i++) {
    //     factorial *= i;
    // }
    // console.log(factorial);



    // let str = 'JavaScript is a pretty good language';
    // let strWords = str.split(' ');
    // let newStrWords = [];
    // let newStr = '';
    // for (var i = 0; i < strWords.length; i++) {
    //     newStrWords[i] = strWords[i][0].toUpperCase();
    //     for (let j = 1; j < strWords[i].length; j++) {
    //         newStrWords[i] += strWords[i][j];
    //     }
    // }
    // newStr = newStrWords.join('');
    // console.log(str);
    // console.log(newStr);


    // let arr = [];
    // let newArr = [];
    // for (let i = 0; i < 15; i++) {
    //     arr[i] = i + 1;
    // }
    // let i = 0;
    // for (el of arr) {
    //     if (el % 2 !== 0) {
    //         newArr[i] = el;
    //         i++;
    //     }

    // }
    // console.log(newArr);


    let list = {
        name: 'denis',
        work: 'easycode',
        age: 29
    }
    for (el in list) {
        if (typeof(list[el]) === 'string') {
            list[el] = list[el].toUpperCase();
        }
    }

    console.log(list);

}