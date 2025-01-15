//? Q1.   
let N = 5;

//!       *****
//!       *****
//!       *****
//!       *****
//!       *****

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<N; j++){
//         str+='*';
//     }
//     console.log(str);
// }


//? Q 2.
//!   00000
//!   11111
//!   22222
//!   33333
//!   44444

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<N; j++){
//         str+=i;
//     }
//     console.log(str);
// }




//? Q3.
//!   01234
//!   01234
//!   01234
//!   01234
//!   01234

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<N; j++){
//         str+=j;
//     }
//     console.log(str);
// }


//? Q4.

//!  01234
//!  12345
//!  23456
//!  34567
//!  45678

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<N; j++){
//         str+=j+i;
//     }
//     console.log(str);
// }


//? Q5.
//!  *****
//!  ****
//!  ***
//!  **
//!  *


// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=i; j<N; j++){
//         str+='*';
//     }
//     console.log(str);
// }



//? Q6.
//!  *
//!  **
//!  ***
//!  ****
//!  *****

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<=i; j++){
//         str+='*';
//     }
//     console.log(str);
// }



//? Q7.

//!  *
//!  **
//!  ***
//!  ****
//!  *****
//!  ****
//!  ***
//!  **
//!  *


// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }
// for (let i = 1; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N; j++) {
//         str += '*';
//     }
//     console.log(str);
// }



//? Q8.

//!  *****
//!  ****
//!  ***
//!  **
//!  *
//!  **
//!  ***
//!  ****
//!  *****


// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N; j++) {
//         str += '*';
//     }
//     console.log(str);
// }
// for (let i = 1; i < N; i++) {
//     let str = '';
//     for (let j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }



//? Q9.

//!      *
//!     **
//!    ***
//!   ****
//!  *****

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N-1; j++) {
//         str += ' ';
//     }

//     for (let j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }


//? Q10.

//!  *****
//!   ****
//!    ***
//!     **
//!      *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += ' ';
//     }

//     for (let j = i; j < N; j++) {
//         str += '*';
//     }
//     console.log(str);
// }



//? Q11.

//!      *
//!     **
//!    ***
//!   ****
//!  *****
//!   ****
//!    ***
//!     **
//!      *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N-1; j++) {
//         str += ' ';
//     }

//     for (let j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }
// for (let i = 1; i < N; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += ' ';
//     }

//     for (let j = i; j < N; j++) {
//         str += '*';
//     }
//     console.log(str);
// }


//? Q12.

//!      *
//!     * *
//!    * * *
//!   * * * *
//!  * * * * *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N-1; j++) {
//         str += ' ';
//     }

//     for (let j = 0; j <= i; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }


//? Q13.
//!      *
//!     ***
//!    *****
//!   *******
//!  *********

//*  First Approach
// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N-1; j++) {
//         str += ' ';
//     }

//     for (let j = 0; j < i*2+1; j++) {
//         str += '*';
//     }
//     console.log(str);
// }



//*  Second Approach
// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N-1; j++) {
//         str += ' ';
//     }

//     for (let j = 0; j <= i; j++) {
//         str += '*';
//     }

//     for (let j = 1; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }


//? Q14.

//!  * * * * *
//!   * * * *
//!    * * *
//!     * *
//!      *

// for(let i=0; i<N; i++){
//     let str ='';
//     for(let j=0; j<i; j++){
//         str+=' '
//     }
//     for(let j=i; j<N; j++){
//         str+='* ';
//     }
//     console.log(str);
// }


//? Q15.

//!  *********
//!   *******
//!    *****
//!     ***
//!      *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += ' '
//     }
//     let J = (N - i);
//     for (let j = 0; j < J * 2 - 1; j++) {
//         str += '*';
//     }
//     console.log(str);
// }

//? Q16.

//!  *****
//!   ****
//!    ***
//!     **
//!      *
//!     **
//!    ***
//!   ****
//!  *****

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<i; j++){
//         str+=" ";
//     }
//     for(let j=i; j<N; j++){
//         str+= '*';
//     }
//     console.log(str)
// }
// for(let i=1; i<N; i++){
//     let str = '';
//     for(let j=i; j<N-1; j++){
//         str+=' ';
//     }
//     for(let j=0; j<=i; j++){
//         str+='*';
//     }
//     console.log(str )
// }


//? Q17.

//!  *****
//!   ****
//!    ***
//!     **
//!      *
//!      **
//!      ***
//!      ****
//!      *****


// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<i; j++){
//         str+=' ';
//     }
//     for(let j=i; j<N; j++){
//         str+='*';
//     }
//     console.log(str);
// }
// for(let i=1; i<N; i++){
//     let str = '';
//     for(let j=1; j<N; j++){
//         str+=' ';
//     }
//     for(let j=0; j<=i; j++){
//         str+='*';
//     }
//     console.log(str);
// }


//? Q18.

//!  *********
//!   *******
//!    *****
//!     ***
//!      *
//!     ***
//!    *****
//!   *******
//!  *********

// for(let i=0; i<N; i++){
//     let str='';
//     for(let j=0; j<i; j++){
//         str+=' ';
//     }
//     for(let j=0; j<(N-i)*2-1; j++){
//         str+='*';
//     }
//     console.log(str);
// }
// for(let i=1; i<N; i++){
//     let str="";
//     for(let j=i; j<N-1; j++){
//         str+=' ';
//     }
//     for(let j=0; j<i*2+1; j++){
//         str+='*'
//     }
//     console.log(str);
// }


//? Q19.

//!  * * * * *
//!   * * * *
//!    * * *
//!     * *
//!      *
//!     * *
//!    * * *
//!   * * * *
//!  * * * * *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += ' ';
//     }
//     for (let j = i; j < N; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }
// for (let i = 1; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N-1; j++) {
//         str += ' ';
//     }
//     for (let j = 0; j <= i; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }


//? Q21.

//!      *
//!     ***
//!    *****
//!   *******
//!  *********
//!   *******
//!    *****
//!     ***
//!      *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N - 1; j++) {
//         str += ' ';
//     }
//     for (let j = 0; j < i * 2 + 1; j++) [
//         str += '*'
//     ]
//     console.log(str)
// }
// for (let i = 1; i < N; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += ' ';
//     }
//     let J = N - i//1 2 3 4
//     for (let j = 1; j <= J * 2 - 1; j++) {
//         str += '*';
//     }
//     console.log(str);
// }

//? Q22.

//!      *
//!     * *
//!    * * *
//!   * * * *
//!  * * * * *
//!   * * * *
//!    * * *
//!     * *
//!      *

// for (let i = 0; i < N; i++) {
//     let str = '';
//     for (let j = i; j < N - 1; j++) {
//         str += ' '
//     }
//     for (let j = 0; j <= i; j++) {
//         str += '* '
//     }
//     console.log(str);
// }
// for(let i=1; i<N; i++){
//     let str='';
//     for(let j=0; j<i; j++){
//         str+=' ';
//     }
//     for(let j=i; j<N; j++){
//         str+='* ';
//     }
//     console.log(str);
// }