console.log("First program in node.js and javascript");
let x=1,y=2,z=3;
let k;
const kiran="kiran"
let kshirsagar="kshirsagar";
// once assigned value of const cannot be changed
//we cannot declare constant without initializing
//kiran="change";//not allowed
console.log(kiran+" "+kshirsagar);


//data types in js
/* primitive data type can only strore a single data whereas non-primitive 
data type like object can store collections of data*/

        //strings
        const name = "ram";
        const name1="laxman";
        const result=`the names are ${name} and ${name1}`;
        console.log(result);

        /* primitiveBackticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables 
        or expressions with ${variable or expression} as shown above.
        */


        //numbers
        const numbers1 = 3;
        const numbers2 = 3.3;
        const numbers3 = 3e3; //3*10^5
        //bigInt
        const numbers4=215613241651374;//number greter than2^53-1 and less than -)2^53-1) cannot be assigned


        //Boolean operator
        const dataCheck =true;
        const valueCounted=false;
        console.log(dataCheck+' '+valueCounted);

        //undefined value->defining but not assigning anything
        //let m;
        //console.log(m);

        //null value-> represents empty or unknown value.
        const nullvalue = null;

        //symbol->Symbol is an immutable primitive value that is unique.
        const value1=Symbol('hello');
        const value2=Symbol('world');
        

        //Object:- store collections of data.
        const student={
                firstName:'ram',
                lastName: null,
                class: 10
        }

        //JavaScript Type
        // data is of undefined type
        let data;
        // data is of integer type
        data=5;
        // data is of string type
        data="javascript programming";

        //JavaScript typeof
        const name5='ram';
        console.log(typeof(name5));//returns string

        const number5=4;
        console.log(typeof(number5));//returns "number"

        const valueChecked5=true;
        console.log(typeof(valueChecked5));//returns boolean

        const a5=null;
        console.log(typeof(a5));//returns object->this is an issue js facing since starting

        //JavaScript Operator Types

        //Assignment Operators
        //const a =1,b+=2,c-=3,d*=4,e//5,e/6,f**7;


        //Arithmetic Operators
                let x=5;
                let y=3;

                //addition
                console.log("x+y=",x+y);

                //substraction
                console.log("x-y=",x-y);

                //multiplication
                console.log("x*y=",x*y);

                //division
                console.log('x/y=',x/y);

                //remainder
                console.log('x%y=',x%y);

                //increament
                console.log('++x =',++x);
                console.log("x++ = ",x++);
                console.log("x=",x);

                //decreament
                console.log('--x=',--x);
                console.log('x--=',x--);
                console.log('x=',x);
                
                //exponentiation
                console.log('x**y=',x**y);
        
        //Comparison Operators->compare two values and return a boolean value

                //equal operator
                console.log(2==2);
                console.log(2=='2');

                //not equal operator
                console.log(3!==2);
                console.log('hello')

                //strict equal operator
                console.log(2===2);//true
                console.log(2==='2');//false

                //strict not equal operator
                console.log(2!=='2');//true
                console.log(2!==2);//false
        

        //Logical Operators

                //logical AND operator
                console.log(true && true);//true
                console.log(true && false);//false

                //logical OR operators
                console.log(true || false);//false

                //logical NOT
                console.log(!true);//false
        /*
                //JavaScript Bitwise Operators
                &	Bitwise AND
                |	Bitwise OR
                ^	Bitwise XOR
                ~	Bitwise NOT
                <<	Left shift
                >>	Sign-propagating right shift
                >>>	Zero-fill right shift
        */
        
        //JavaScript String Operators
        //concatenation operator
                console.log("Hello"+"World");
                let a='javascript';
                a+='tutorial'; //a=a+'tutorial';
                console.log(a);

        //tertiary operators
        // (5>3)?'success':'error'; return succes

        //comments in javascript
        //single line & mulit-line comments
        //shortcut for adding single line command ctrl+/

        //JavaScript Type Conversions

        //impicit-automatic type conversion

        let result;

                //impicit conversion to strings
                        result ="3"+2;
                        console.log(result);//"32"

                        result="3"+true;
                        console.log(result);//"3true"

                        result="3"+undefined;
                        console.log(result);//"3undefined"

                        result="3"+null;
                        console.log(result);//"3null"
        
                //impicit conversion to numbers
                        result='4'-'2';
                        console.log(result);//2

                        result="4"-2;
                        console.log(result);//2

                        result="4"*2;
                        console.log(result);//8

                        result="4"/2;
                        console.log(result);//2
                
                //Non-numeric String Results to NaN
                // non-numeric string used with - , / , * results to NaN
                        result="hello"-"world";
                        console.log(result);//NaN

                        result="4"-'hello';
                        console.log(result);//NaN

                //Implicit Boolean Conversion to Number
                        result="4"-true;
                        console.log(result);//3

                        result="4"+true;
                        console.log(result);//5

                        result=4+false;
                        console.log(result);//4

                //null Conversion to Number
                // null is 0 when used with number

                        result = 4 + null;
                        console.log(result);  // 4

                        result = 4 - null;
                        console.log(result);  // 4

                //undefined used with number, boolean or null
                // Arithmetic operation of undefined with number, boolean or null gives NaN

                        result=4+undefined;
                        console.log(result); //NaN

                        result=4-undefined; 
                        console.log(result); //NaN

                        result=true+undefined;
                        console.log(result); //NaN

                        result=null+undefined; 
                        console.log(result); //NaN

        //explicit type conversion

        //Convert to Number Explicitly
                        console.log(Number('3324'));//3324
                        console.log(Number('324e-1'));//32.4
                        console.log(Number('true'));//1
                        Console.log(Number('false'));//0
                //empty returns 0
                        console.log(Number('null'));//0
                        console.log(Number(''));//0
                //if string invalid->result NaN
                        console.log(Number('hello'));//Nan
                        console.log(Number(undefined));//NaN
                        console.log(Number(NaN));//NaN
                //can also use parseFloat parseInt Math.floor & unary operator +
                        console.log(parseFloat('20.01'));//20.01
                        console.log(parseInt('20.01'));console.log();
                        console.log(+'20.01');console.log();
                        console.log(Math.floor('20.01'));console.log();

        //Convert to String Explicitly
                console.log(String(324));//'324'
                console.log((324).toString());//'324'
                console.log(string(2+4));//'6'
                console.log(null);//"null" toString gives error in this case
                console.log(undefined);//"undefined" toString gives error in this case
                console.log(NaN);//"NaN"
                console.log(true);//"true"
                console.log(false);//"false"
        //Convert to Boolean Explicitly
                console.log(Boolean(''));//false
                console.log(Boolean(0));//false
                console.log(Boolean(undefined));//false
                console.log(Boolean(null));//false
                console.log(Boolean(NaN));//false
                //all other value returns true
                console.log(Boolean(324));//true
                console.log(Boolean('hello'));//true
                console.log(Boolean(' '));//true      
                /*
                Value	String Number   Boolean
                        Conve	Conv	Conv
                1	"1"	1	true
                0	"0"	0	false
                "1"	"1"	1	true
                "0"	"0"	0	true
                "ten"	"ten"	NaN	true
                true	"true"	1	true
                false	"false"	0	false
                null	"null"	0	false
                undefined	"undefined"	NaN	false
                ''	""	0	false
                ' '	" "	0	true
                */

        //JavaScript Comparison and Logical Operators
                //Equal to Operator
                        const a=5,b=2,c="Hello";
                        console.log(a==5);//true
                        console.log(b=='2');//true
                        console.log(c=="Hello");//true
                        
                // Not Equal to Operator
                // != Operator

                //Strict Equal to Operator
                        const g = 2;
                        console.log(g === 2); // true
                        console.log(g === '2'); // false

                //Strict Not Equal to Operator
                        const k=2,l='hello';
                        console.log(k !== 2); // false
                        console.log(k !== '2'); // true
                        console.log(l !== 'Hello'); // true

                /*
                Greater than Operator >
                Greater than or Equal to Operator >=
                Less than Operator <
                Less than or Equal to Operator <=
                */
                        const m=3,n=2;
                        console.log(m<n);//false
                        console.log(m<=n);//false
                        console.log(m>n);//true
                        console.log(m>=n);//true

       //JavaScript Logical Operators
        //Logical AND Operator
                const ANDa=true,ANDb=flase;
                const ANDc=4;
                console.log(ANDa && ANDa);//true
                console.log(ANDa && ANDb);//flase
                console.log((ANDc>2) && (ANDc>2));//false

        //Logical OR Operator
                const ANDa=true,ANDb=flase;
                const ANDc=4;
                console.log(ANDa || ANDa);//true
                console.log(ANDa || ANDb);//flase
                console.log((ANDc>2) || (ANDc>2));//false

        //Logical NOT Operator
                console.log(!true);//flase
                console.log(!false);//true

       //JavaScript if...else Statement
        /* 
        Here we can check condition for true and false condition which is evaluated
        and then if evaluation is true then code inside if executes and then if 
        evaluation is false then code inside else executes

        JavaScript if Statement
                if(condition){
                        //the body of if
                }

        Javascript if else Statement
                if(condition){
                        //block of code if condition is true
                }
                else{
                        //block of code if condition is flase
                }

        JavaScript if...else if statement

                if(condition){
                        //code if condition inside evaluates to be true
                }
                else if{
                        code if condition inside if false and code inside else if to be true
                }
                else{
                        code if conditon inside if above two condition's are not true
                }
        */

        
       //Nested if...else Statement
       /*
        if(condition){
                code executes if true
                if(condition){
                        code executes if both conditions are true
                }
                else{
                        code if first is true and second is false
                }
        }
        else{
                code executes if condition inside if fails
        }
       */

        //Body of if...else With Only One Statement
        /*
        if(conditions)
        statement to execute if condition inside if is true;
        else
        statement to execute if condition inside if is false;
        */

        //JavaScript Ternary Operator
        // condition ? expression 1 : expression 2 ;
        // console.log((marks>=35)?'pass':'fail');
        










       










        





