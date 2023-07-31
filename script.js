function sum_of_natural_numbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}

const result = sum_of_natural_numbers(10);
console.log(result); // result will be 55

// 1+2+3+4+5+6+7+8+9+10 = 55