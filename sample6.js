function computeFactors(number) {
    if (number <= 0 || !Number.isInteger(number)) {
        return "Please enter a positive integer.";
    }
    
    const factors = [];
    
    for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            factors.push(i);
            if (number / i !== i) {
                factors.push(number / i);
            }
        }
    }
    
    factors.sort((a, b) => a - b);
    
    return factors;
}

