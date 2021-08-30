// properties
    // can hold different types of values
    // length is dynamically sized and auto-growing-no need to define size upfront
    //creating array's
        let scores=new Array();     //empty array defination->Array() is a constructor
        let score = new Array(10); //if size of defining array is known

        //you can skip new keywords 
        let artists=Array(); //without new keyword


        //most prefered way 
        let arrayName = [element1, element2, element3, '...'];

        //defining empty array 
        let emptyArray = []; 

        //accessing array elements
        console.log(arrayName[0]);

        //changing the value of elements
        arrayName[0] = element22;

        //printing the size of array 
        console.log(arrayName.length);

//basic operations on array

        //1.adding an elements
        let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
        seas.push('Red Sea');

        console.log(seas); 

        //2.Adding an element at begining of the array
        seas.unshift('kiran sea');


        //3.Removing an element from end of an array
        seas.pop();     //it deletes last element of seas->i.e. 'Baltic Sea'

        //4.Removing an element from starting of the array
        seas.shift();       //it deletes first element of seas->i.e. 'kiran sea'

        //finding an index of an element in the array
        let index=indexOf('North sea');

        //check if value is an array
        console.log(isArray(seas));         //returns true if value is an array

//javascript array length
    //unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

    //two types of array

        //1.Dense Arrays->an array where its elements have contiguous indexes starting at zero.
        let colors = ['red', 'green', 'blue'];
        console.log(colors.length); // 3

        //2.Sparse Arrays->an array where its elements don’t have contiguous indexes starting at zero.
        let numbers = [10, , 20, 30];
        console.log(numbers.length); // 4

        //Modifying Javascript Array length property

        //1.Empty an array
        numbers.length=0;       //This action empties the array

        //2.Remove elements
        const fruits = ['Apple', 'Orange', 'Strawberry'];
        fruits.length = 2;
        console.log(fruits);    // [ 'Apple', 'Orange' ]

        //3.Make array spars
        const fruits=['Apple', 'Orange', 'Strawberry']
        fruits.length = 5;
        console.log(fruits);    // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]

//Basic Array Programms

//1.Find minimum and maximum element in an array
// Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

var max=arr[0],min=arr[0];
        for(var i=0;i<n;i++)
        {
            if(arr[i]<min)
            {
                min=arr[i];
            }
            if(arr[i]>max)
            {
                max=arr[i];
            }
            
        }

//2.