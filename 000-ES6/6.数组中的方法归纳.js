/*
* 数组方法大归纳:
*   1.ES5
*       原有数组改变 push pop unshift shift reverse sort splice
*       原有数组不变 slice reduce concat join indexOf lastIndexOf filter map
*   2.ES6
*       entries Array.of Array.from find findIndex some every includes fill copyWithin
*   3.从Object继承的方法
*       toString keys(es6)
*
*   部分方法用法参见1.js_free 6.1数组及扩展.html
* */

//reduce 原数组不发生变化 返回叠加后的结果 回调函数(四个参数)中return的值会作为下一次的prev

// let sum=[1,2,3,4,5].reduce(function(prev,next,index,arr){
//     return prev+next;
// });
// console.log(sum);
// var arr4=[{price:30,count:2},{price:40,count:3},{price:50,count:4}];
// //arr4.unshift(0);//小技巧 如果不设置按正常走会NaN
// let sum4=arr4.reduce(function(prev,next,index,arr){
//     return prev+next.price*next.count;
// },0);//默认指定第一次prev
// console.log(sum4)

//面试:数组扁平化(降纬)

let arr5=[[1,2,3],[4,5,6],[7,8,9]];
let sum6=arr5.reduce(function(prev,next,index,arr){
    return prev.concat(next);
})
console.log(sum6);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// //以下不推荐 数组中的项变为字符串
// console.log(arr5.join(',').split(','));//[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
// let sum5=arr5.reduce(function(prev,next,index,arr){
//     return prev+next.join('');
// },'')//默认指定第一次prev
// console.log(sum5.split(''));//[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]


//filter 原数组不变 返回值为过滤后新数组 回调函数的返回结果: 如果返回true,表示该项放到新数组中

// let newArr=[1,2,3,4,5].filter(function(value,index){
//     return value>2 && value<5
// })
// console.log(newArr);//[ 3, 4 ]
// console.log(1===1===1)//false 先执行1===1 true  然后true===1 false
// console.log(1===1==1)//true


//map 映射 将原有数组映射成一个新数组 如[1,2,3] 变为<li>1</li><li>2</li><li>3</li>
//原数组不变 返回新数组 回调函数中返回这一项就是什么

// let arr=[1,2,3].map(function(item){
//     return item*3
// })
// console.log(arr);//[ 3, 6, 9 ]

// let arr1=[1,2,3].map(function(item){
//     return `<li>${item}</li>`
// })
// console.log(arr1.join(''));


//ES6-entries() 原数组不变 返回[object Array Iterator](通过Object.prototype.toString.call()检测)

// for(let [key,value] of ['a','b','c'].entries()){
//     console.log(key,value)
// }

//ES6-Array.of(args) 返回一个数组 参数args不分类型只分数量(数量为0返回[])

// console.log(Array.of());//[]
// console.log(Array.of('123'));//[ '123' ]
// console.log(Array.of('1','2','3'));//[ '1', '2', '3' ]
// console.log(Array.of(['1','2','3']));//[ [ '1', '2', '3' ] ]
// console.log(Array.of(undefined));//[ undefined ]

/*
* 详情参见150...@163.com账号的ES6笔记
* ES6-Array.from(arrayLike[, mapFn[, thisArg]]) 将其它对象转化为数组
* 可以转化的对象分为两类:
*   - 部署了Iterator接口的对象，比如：Set，Map，Array
*   - 类数组对象
* */

// console.log(Array.from('123'));//[ '1', '2', '3' ]
// console.log(Array.from({'0':'w','1':'b',length:2}))//["w", "b"],返回数组的长度取决于对象中的length，故此项必须有！
// console.log(Array.from({'0':'w','1':'b',length:4}))//["w", "b", undefined, undefined],数组后2项没有属性去赋值，故undefined
// console.log(Array.from({'0':'w','1':'b',length:1}))//["w"],length小于key的数目，按序添加数组
// let aa=Array.from([1,2,3],function(x){
//     return x+1;
// })
// console.log(aa);

//ES6-includes
//ES6-find 原数组不变 返回找到的那一项(没找到返回undefined) 回调函数中返回true表示找到了,找到后停止循环
//ES6-some 结构同find 找true 找到true后停止 返回true 找不到返回false
//ES6-every 结构同some 找false 找到false后停止 返回false

// let arr2=[1,2,3,4,55,555];
// console.log(arr2.includes(5));//false
// let arr3=arr2.some(function (item, index) {
//     return item.toString().indexOf(5)>-1
// })
// console.log(arr3);

//ES6-findIndex

// var arr6=[1,2,3,4,-2];
// let arr7=arr6.findIndex(function(value){
//     return value<2;
// })
// arr6.findIndex(function(value,index,arr){
//     if(value<2){
//         console.log(index,value)
//     }
// })
// console.log(arr6, arr7);


// function a(b){
//     return function(c){
//         return b+c;
//     }
// }
// console.log(a(1)(2));
/*
* 上述函数执行完作用域会销毁
* 不销毁作用域:当执行后返回结果为引用数据类型,并且被外界变量接收
*   如下:
* */
// let a=function(b){
//     return function(c){
//         return b+c;
//     }
// }();

// let a=b=>c=>b+c;
// console.log(a(1)(2));


