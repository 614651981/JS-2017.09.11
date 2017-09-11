// 箭头函数  ES6新增
var fn2=function(a){
	return a;
}
var fn2=(a)=>a;


var arr=[-2,5,9,7,4,2,6,7,-3,2,8];
// var result= filter(arr,function(value){
// 	 return value>0;
// 	});
var result= filter(arr,value=>value>0);
document.write(result);
function filter(arr,fn){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
        newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}

// 闭包
function fn(){
   var num=10;
   return fn1;
   function fn1(){
	   num++;
	   return num;
   }
}
var result=fn();
console.log(result());

// 内置顶层函数
let str="张三"
//escape 编码 
console.log(escape(str));
//unescape 解码 
console.log(unescape('%u5F20%u4E09'));
console.log(Number(123));
console.log(Number(0b111));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number("0123"));
console.log(Number("0123.00"));
console.log(Number(123.00));
console.log(Number('123.01.2'));   
console.log(Number('123px'));   
console.log(Number('abcd'));   
// 只有数字型字符串才可以转数字，其他都为NaN
console.log(Number(true));
console.log(Number('true'));

console.log(String(true));
console.log(String(123));

console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean([]));


// parseInt  把字符串转换为整数
// 必须是以数字，正负号，空格开始，从第一个数字字符开始，到第一个非数字字符结束。
console.log(parseInt('1234'));
console.log(parseInt('0b1111'));
console.log(parseInt('0123c11'));
console.log(parseInt('10123c11'));
console.log(parseInt('100px'));
console.log(parseInt(' -1.00px200'));
console.log(parseInt('abc100px200'));

// //转换为小数
console.log(parseFloat('100.5px'));
console.log(parseFloat('123.456'));

// isNaN    is Not a Number
console.log(isNaN(false));
console.log(isNaN(''));
console.log(isNaN([]));
console.log(isNaN('100px'));

//对象{}
//json
let wangwu={};
console.log(typeof wangwu);

// 构造函数
function Person(){
}
let zhangsan=new Person();
let lisi=new Person();

// 添加属性、方法
// 谁   什么    等于
zhangsan.age=18;
zhangsan.name='zhangsan';
zhangsan.sex='女';
console.log(typeof zhangsan);
lisi.age=20;
lisi.name='lisi';
lisi.sex='男';
console.log(typeof lisi);
// 访问
// 谁  什么
console.log(zhangsan.age)
console.log(zhangsan.name)
console.log(zhangsan.sex)
console.log(lisi.age)
console.log(lisi.name)
console.log(lisi.sex)