window.onload = function() {
    // ДЗ фунции   
    // function multiple(...args) {
    //     if (args.length === 0) {
    //         return 0;
    //     }
    //     let res = 1;
    //     for (el of args) {
    //         res = res * el;
    //     }
    //     return (res);
    // }

    // console.log(multiple());


    // document.querySelector('#send').onclick = function() {
    //    let num = document.querySelector('#num').value;
    //    if (blackJack(num)) {
    //        alert('Yo are win! ');
    //    } else {
    //        alert('Try again, buddy. ');
    //    }
    // blackJack(8);

    // function blackJack(num) {
    //     let test = Math.ceil(Math.random() * 10);
    //     console.log('num: ' + num + ' test: ' + test);
    //     console.log(typeof(num));
    //     return test === +num;
    // }



    // console.log(num2arr(18));

    // function num2arr(num) {
    //     let arr = [];
    //     for (let i = 0; i < num; i++) {
    //         arr[i] = i + 1;
    //     }
    //     return arr;
    // }

    // console.log(doubleArray([5, 7, 8, 5, 4]));

    // // function doubleArray(arr) {
    // //     let newArr = [];
    // //     for (i = 0; i < arr.length; i++) {
    // //         newArr[i] = arr[i];
    // //         newArr[i + arr.length] = arr[i];
    // //     }
    // //     return newArr;
    // // }

    // function doubleArray(arr) {
    //     let newArr = [];
    //     return newArr.concat(arr, arr);
    // }




    // function reverseString(str) {

    //     let newStr = '';
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         newStr += str[i];

    //     }
    //     return newStr;
    // }
    // console.log('res : ' + reverseString('asdfghj'));


    // function getCodeStringFromText(str) {
    //     let newStr = '';
    //     for (let i = 0; i < str.length; i++) {
    //         newStr += (str.charCodeAt(i) + ' ');
    //     }
    //     return newStr.trim();
    // }
    // console.log(getCodeStringFromText('qwerty'));

    // let users = [{
    //         name: "John",
    //         age: "19",
    //         gender: "male"

    //     },
    //     {
    //         name: "sarah",
    //         age: "28",
    //         gender: "famale"
    //     },
    //     {
    //         nick: "pig",
    //         age: "28",
    //         name: "Paul"
    //     },
    //     {
    //         color: "yellow",
    //         height: "0.8 m",
    //         length: "3m"
    //     }

    // ]
// let res = funcGetUsers(users, "age", "29")
// console.log(res);

// function funcGetUsers(users, field, value) {
//     let newArr = [];
//     let i = 0;
//     if (Array.isArray(users) && field && value) {
//         let elStr = '';

//         for (el of users) {

//             // elStr = String(el[field]);

//             if (String(el[field]).toLowerCase() === value.toLowerCase()) {
//                 newArr[i] = el;
//             }
//         }
//     };
//     if (newArr.length > 0) {
//         return newArr;
//     } else return 'Співпадінь нема.';

// }
    // ДЗ фунции конец    


//     ДЗ фунции вьісшего порядка
    //     newValue(['my', 'name', 'is', 'Trinity'], words2phrase);
    //     newValue([10, 20, 30, 12], multToTen);
    //     newValue([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], ageOfEsers);
    //     newValue(['abc', '123'], reverceString);

    //     function newValue(arr, func) {
    //         console.log('New value: ' + func(arr));
    //     }
    // function multToTen(arr) {
    //     newArr = [];
    //     newStr = '';
    //     for (let i = 0; i < arr.length; i++) {
    //         newArr[i] = arr[i] * 10;
    //     }
    //     return newArr.join(', ');
    // }

    // function ageOfEsers(arr) {
    //     newArr = [];
    //     newStr = '';
    //     for (let i = 0; i < arr.length; i++) {
    //         newArr[i] = arr[i].name + ' is ' + String(arr[i].age);
    //     }
    //     return newArr.join(', ');
    // };

    // function reverceString(arr) {
    //     let newArr = [];

    //     for (let j = 0; j < arr.length; j++) {
    //         newArr[j] = '';
    //         for (let i = 0; i < arr[j].length; i++) {
    //             newArr[j] += arr[j][arr[j].length - i - 1];


    //         }
    //     }
    //     return newArr.join(', ');
    // }

    // function words2phrase(arr) {
    //     let phrase = '';
    //     let elTemp = '';
    //     for (el of arr) {
    //         elTemp = el[0].toUpperCase();
    //         for (let i = 1; i < el.length; i++) {
    //             elTemp += el[i];
    //         }
    //         phrase += elTemp;
    //     }
    //     return phrase;
    // }



    // console.log(every([1, 2, 3, 4.8], function(el, index, arr) { return el < 5 }));

    // function every(arr, func) {
    //     if (Array.isArray(arr) && (typeof(func) === 'function')) {
    //         let index = 0;
    //         for (el of arr) {
    //             if (!func(el, index, arr)) {
    //                 return false;
    //             }
    //             index++;
    //         }
    //         return true;
    //     } else {
    //         alert('Shitt');
    //     }
    // }







    // ДЗ фунции вьісшего порядка конец   


    // ДЗ контекст 
    // const rectangle = {
    //     width: 10,
    //     height: 5,
    //     getSquare() {
    //         return this.width * this.height;
    //     }
    // }

    // let rect1 = rectangle;
    // rect1.width = 30;
    // rect1.height = 20;
    // console.log(rect1.getSquare());


    // const price = {
    //     price: 100,
    //     discount: '15%',
    //     getPrice() {
    //         return this.ptice;
    //     },
    //     getPriceWithDiscount() {
    //         return this.price * (100 - this.discount.slice(0, this.discount.length - 1)) / 100;
    //     }
    // }
    // let price1 = price;
    // console.log(price1.getPriceWithDiscount());

    // const obj = {
    //     height: 0,
    //     heigtInc() {
    //         return ++this.height;
    //     },
    //     heigtDec() {
    //         return --this.height;
    //     }
    // }
    // console.log(obj);
    // obj.height = 100;
    // console.log(obj.heigtInc());
    // console.log(obj.heigtInc());
    // console.log(obj.heigtInc());
    // console.log(obj.heigtInc());
    // console.log(obj.heigtDec());
    // console.log(obj.heigtDec());
    // console.log(obj.heigtDec());

    // ДЗ контекст end


    // ДЗ arrow functions
    // function sum(...arg) {
    //     const params = Array.prototype.slice.call(arg);

    //     if (!params.length) return 0;

    //     return params.reduce(function(prev, next) { return prev + next; });
    // }

    // const sum = (...arg) => {
    //     const params = Array.prototype.slice.call(arg);
    //     if (!params.length) return 0;
    //     return params.reduce((prev, next) => { return prev + next; });
    // }
    // console.log(sum(0));


    // ДЗ arrow functions end


    // ДЗ переб. методи масивів

    // let arr = [1, 2, 3, 5, 8, 9, 10];
    // let newArr = arr.map(x => {
    //     let prop = {};
    //     prop.odd = (!(x % 2)) ? true : false;
    //     prop.digit = x;
    //     return prop;

    // });
    // console.log(arr);
    // console.log(newArr);

    // let arr = [12, 4, 50, 1, 0, 18, 40];
    // console.log(arr.some(x => x === 0));
    // console.log(['yes', 'hello', 'no', 'easycode', 'what'].some(x => x.length > 3));


    // let arr = [{ char: "a", index: 12 }, { char: "w", index: 8 }, { char: "Y", index: 10 }, { char: "p", index: 3 }, { char: "p", index: 2 },
    //     { char: "N", index: 6 }, { char: " ", index: 5 }, { char: "y", index: 4 }, { char: "r", index: 13 }, { char: "H", index: 0 },
    //     { char: "e", index: 11 }, { char: "a", index: 1 }, { char: " ", index: 9 }, { char: "!", index: 14 }, { char: "e", index: 7 }
    // ];

    // function charsToPhrase(arr) {
    //     return arr.sort((a, b) => a.index - b.index).map(x => x.char).join('');
    // }
    // console.log(charsToPhrase(arr));

    // let arr = [
    //     [14, 45],
    //     [1],
    //     ['a', 'c', 'd']
    // ];
    // console.log(arr.sort((a, b) => a.length - b.length));


    // console.log([
    //     { cpu: 'intel', info: { cores: 2, сache: 3 } },
    //     { cpu: 'intel', info: { cores: 4, сache: 4 } },
    //     { cpu: 'amd', info: { cores: 1, сache: 1 } },
    //     { cpu: 'intel', info: { cores: 3, сache: 2 } },
    //     { cpu: 'amd', info: { cores: 4, сache: 2 } }
    // ].sort((a, b) => a.info['cores'] - b.info['cores']));

    // let products = [
    //     { title: 'prod1', price: 5.2 }, { title: 'prod2', price: 0.18 },
    //     { title: 'prod3', price: 15 }, { title: 'prod4', price: 25 },
    //     { title: 'prod5', price: 18.9 }, { title: 'prod6', price: 8 },
    //     { title: 'prod7', price: 19 }, { title: 'prod8', price: 63 }
    // ];
    // let filterCollection = function(products, priceMin, priceMax) {
    //     return products.filter(x => x.price > priceMin && x.price < priceMax).sort((a, b) => a.price - b.price);
    // }
    // console.log(filterCollection(products, 15, 30));

    // ДЗ переб. методи масивів end


    // ДЗ  closures 

    // function minus(num1) {
    //     return function(num2) {
    //         return num1 - num2;
    //     }
    // }
    // console.log(minus(5)(12));
    // console.log(minus(5)(3));

    // function multiplyMaker(num1) {
    //     let res = num1;
    //     return function(num2) {
    //         res = res * num2;
    //         return res;
    //     }
    // }
    // const multiply = multiplyMaker(2);
    // console.log(multiply(2)); // 4 (2 * 2)
    // console.log(multiply(1)); // 4 (4 * 1)
    // console.log(multiply(3)); // 12 (4 * 3)
    // console.log(multiply(10)); // 120 (12 * 10)


    // let modStr = {
    //     str: '',
    //     setStr: (newStr) => (!newStr) ? str = '' : str = String(newStr),
    //     getStr: () => str,
    //     getStrLength: () => str.length,
    //     getStrReverce: () => str.split('').reverse().join('')
    // }
    // modStr.setStr('qwertyuiop');
    // console.log(modStr.getStrReverce());


    // let calc = function() {
    //     let res = 0;
    //     let set = (arg) => { res = arg; return this };
    //     let sum = (arg) => { calc.res += arg; return this }
    // }

    // console.log(calc().set(20).sum(30).sum(50));



    // ДЗ closures end

    // ДЗ деструктуризація end

    // function func(param1, ...others) {
    //     return { first: param1, other: [...others] }
    // }
    // console.log(func(1, 2, 3, 4, 5, 6, 7))


    // const organisation = {
    //     name: 'Company 1',
    //     employees: ['John', 'Stive', 'Anna', 'Mary'],
    //     partners: ['partner 1', 'partner2', 'partner2', 'partner2']
    // }

    // function getInfo(org) {
    //     let { name, partners: [partner1, partner2] } = org;
    //     name ? console.log(name) : console.log('Unnown');
    //     console.log('Name: ' + name);
    //     console.log('Partners: ' + partner1 + ' ' + partner2);
    // }
    // getInfo(organisation);


    // ДЗ деструктуризація end




}