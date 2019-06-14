var letters = [];
var string = "Backend As A Service";
var arr = string.split(" ")
for (i = 0; i < arr.length; i++) {
    letters.push(arr[i].substr(0, 1))
}
console.log(letters);
console.log(letters.join(""));