function showDetail(){
    console.log("show")
  }
  
  showDetail()
  function addNumber(x,y){
    let c=x+y;
   
    console.log("sum of "+ x +" and "+ y +" is "+c);

  }
  addNumber(5,5)

  
  function person(name){
    return name
  }
  console.log(person("Rani"))
  const ram=person("Ram") 
  console.log(ram)
  
  const setStudent=function(name,age){
      console.log(name,age)
  }
  setStudent("james",21)
  //arrow function 
   /*  
   ()=>statement
   
   
   */
  const display=(price,color)=>
  {
    console.log(price);
    console.log(color);
  }
  
  //constructor function 
  const teacher= function (dep,erno){
    this.department=dep;
    this.regno=erno;
     
  }
  teacher("computer","E45269")
  console.log(teacher)
  console.log(teacher.valueOf())


 
  function Range(start, end) {
    let evenNumbers = [];
    if (start % 2 !== 0) {
        start++;
    }

    for (let i = start; i <= end; i += 2) {
        evenNumbers.push(i);
    }

    return evenNumbers;
}
const start = 10;
const end = 30;
const evenNumbers = Range(start, end);
console.log("Even numbers between", start, "and", end, ":", evenNumbers);



function evenCheck(num){
    if(num%2==0){
     return true;
    }
    else{
     return false;
    }
 }
 function  evenCount2(str,stp){
   var count=0;
   for(;str<=stp;str++){
       if(evenCheck(str)){
         count++;
       }    
   }
   return count;
 }
 
 console.log(evenCount2(1,10))