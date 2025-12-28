/* JavaScript execution context... means jo bhi file maine 
 banayi hai run kaise karegi aur usme function ka call stack kaise 

! 1. Global Execution Context (GEC):

 brwoser me jab bhi koi js file load hoti hai to sabse pehle global execution context create hota hai hai jo ki global scope me hota hai

 iske andr do phase hote hai
  ?1. Creation Phase:
    - Is phase me memory allocate hoti hai variables aur functions ke liye
    - Variables ko undefined se initialize kiya jata hai
    - Functions ko pura define kar diya jata hai
  ?2. Execution Phase:
    - Is phase me code line by line execute hota hai
    - Variables ko unke assigned values milti hai
    - Functions ko call kiya jata hai jab unhe invoke kiya jata hai


! 2.Function Execution Context (FEC):

 Jab bhi koi function call hota hai to uske liye ek naya execution context create hota hai jise function execution context kehte hai
  bna jata hai jo ki us function ke scope me hota hai
  iske andr bhi do phase hote hai
  ?1. Creation Phase:
    - Is phase me memory allocate hoti hai function ke parameters aur local variables ke liye
    - Parameters ko unke passed arguments se initialize kiya jata hai
    - Local variables ko undefined se initialize kiya jata hai
  ?2. Execution Phase:
    - Is phase me function ka code line by line execute hota hai
    - Local variables ko unke assigned values milti hai
    - Function ke andar defined functions ko call kiya jata hai jab unhe invoke kiya jata hai

! 3. Eval execution Context:

 Eval execution context tab create hota hai jab eval() function call hota hai
  jo ki ek special function hai jo ki string ke form me code ko execute karta hai
  iske andr bhi do phase hote hai
  ?1. Creation Phase: 
    - Is phase me memory allocate hoti hai eval ke andar defined variables aur functions ke liye
    - Variables ko undefined se initialize kiya jata hai
    - Functions ko pura define kar diya jata hai
  ?2. Execution Phase:
    - Is phase me eval ke andar ka code line by line execute hota hai
    - Variables ko unke assigned values milti hai
    - Functions ko call kiya jata hai jab unhe invoke kiya jata hai

 */
