function majorityElement(nums: number[]): number {
    if(nums.length == 1) {
        return nums[0];
    }

    let minimumFrequence = Math.floor(nums.length / 2);

    let numbers = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(!numbers.has(nums[i])) {
            numbers.set(nums[i], 1);
        } else {
            let number = numbers.get(nums[i]);
            number += 1;
            numbers.set(nums[i], number);

            if(number > minimumFrequence) {
                return nums[i];
            }
        }
    }

    return 0;
};

let array = [2,2,1,1,1,2,2];

let result = majorityElement(array);

console.log(result)

/*
 i
[2,2,1,1,1,2,2] -> store i and its frequency, the move i in one step
map = { 
    [2, 1]
} 

   i
[2,2,1,1,1,2,2] -> update key 2 with plus 1 frequency, then move i ahead
map = { 
    [2, 2] 
} 

     i
[2,2,1,1,1,2,2] -> add key 1, then move i ahead
map = { 
    [2, 2],
    [1, 1] 
} 

       i
[2,2,1,1,1,2,2] -> add key 1, then move i ahead
map = { 
    [2, 2],
    [1, 2] 
} 

...
             i
[2,2,1,1,1,2,2] 
map = { 
    [2, 3],
    [1, 3] 
} 

*/