//loop 
//while do while for  
// let i=0;
// while(i<5){
    
//     i++;
//     console.log(i)
    
// }
 let no=25;
 while(no<=30){
    let r=no%5 
    if(r==0)
     console.log(no)
    
     no++
 }
//do while 
 //let q="what is java script?"
 //do{
   // console.log(q)
   // console.log("Ans")
//}while(false);

 let  qus=["what is js?","what is css","what is html?"]
 let ans=["java script  to  web page functionality","to styling webpage","to create web page structue"]
 let i=0
 do{
    console.log(qus[i])
    console.log(ans[i])
    console.log("do u want to continue?")
     let ok=confirm("do u want to continue?")
    if(!ok){
        break
    }
    
    i++;
 }while(true);
//loop for 

for(let i=0;i<5; i++){
   console.log(i)
  }
  
  // let j=0;
  // for(;j<4;j++){
  
  // }
  // for(;j<4;){
  //     j++;
  // }
  
  // for(;;){
  
 // }