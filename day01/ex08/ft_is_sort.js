/*
    Type 
    node ft_is_sort.js
    in the command line to execute
*/

function ft_is_sort(arr) {
    if(arr) {
        var temp = arr.slice(0, arr.length).sort();
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] !== temp[i]) {
                console.log("The array is not sorted");
                return;
            }
        }
        console.log("The array is sorted");
        return;
    }
}

// example1
var example1 = ["!/@#;^", "42", "Hello World", "hi", "zZzZzZz"];
example1.push("What are we doing now ?");
ft_is_sort(example1);

// example2
// var example2 = ["1", "2", "3", "4"];
// example2.push("5");
// ft_is_sort(example2);
