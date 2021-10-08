//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(a_list, a_str) {
    let text = "";
    for (let x in dog_names) {
        if (dog_names.includes(x)) {
            return "Matched Dog Name";
        } else {
            return "No Matches"
        }
    }
}
console.log(findWords(dog_string))
// This ^ is not behaving how I expected it to. Not sure what I'm missing. And my patience tank is currently on E. Moving on...

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    let x = arr.filter((element, index) => {
        if (index % 2 === 0) {
            return "even index";
        }
})}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Getting undefined error. Time to toss electronics.