// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. 
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].


function fibs(number) {
    const arr = [0, 1]

    for (let i = 2; i < number; i++) {
        const nextNumber = arr[i - 1] + arr[i - 2]

        arr.push(nextNumber)
    }

    return arr;
}

console.log(fibs(10))