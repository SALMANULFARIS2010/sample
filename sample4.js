function findSecondLowestAndGreatest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    // Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b;
    });

    // Remove duplicates
    arr = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    });

    var secondLowest = arr[1];
    var secondGreatest = arr[arr.length - 2];

    return [secondLowest, secondGreatest];
}

// Example usage:
var numbers = [1, 5, 3, 9, 7, 2];
var result = findSecondLowestAndGreatest(numbers);
console.log("Second lowest and second greatest numbers:", result);