const targetValue = (input, target) => {

    let sum = input[0]+input[1];
    let difference = target - sum;
  
    if (difference < 0) return false
    else if (target%sum == 0) return true
    else {
        let times = Math.floor(target / sum);
        let sorted = input.sort((a, b) => { return b < a })
        for (let i = 1; i <= times; i++) {
            difference = target - sum * i;

            if (difference == sorted[0] || difference == sorted[1]) return true
            if (difference < sorted[0]) return false
            else if (difference != sorted[0] && difference % sorted[0] != 0 && difference < sorted[1]) return false
            if (difference % sorted[0] == 0) return true;
            if (difference % sorted[1] == 0) return true;
            if (i == times) {
                if (difference % sorted[0] != 0 && difference % sorted[1] != 0) return false
            }
        }
        return true;
    } 
}