function padIt(str,n){
  
    while(n>0){
      if(n%2===0)
      {
      str = str+'*'
    } 
    else { str ='*'+str}
      n--
    }
   
     return str
   };

   const teste = padIt('a',1);
   const teste2 =padIt('a',2);
   const teste3=padIt('a',3);
   const teste4=padIt('a',4);
   const teste5=padIt('a',5);

   console.log(teste);
   console.log(teste2);
   console.log(teste3);
   console.log(teste4);
   console.log(teste5);