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


    // ДЗ фунции вьісшего порядка
    // newValue(['my', 'name', 'is', 'Trinity'], words2phrase);
    // newValue([10, 20, 30, 12], multToTen);
    // newValue([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], ageOfEsers);
    // newValue(['abc', '123'], reverceString);

    // function newValue(arr, func) {
    //     console.log('New value: ' + func(arr));
    // }

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
}