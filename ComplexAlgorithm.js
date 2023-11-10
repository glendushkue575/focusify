/* Filename: ComplexAlgorithm.js */
/* Description: This code implements a complex algorithm for calculating prime numbers */

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate all prime numbers up to a given value
function generatePrimes(maxValue) {
  var primes = [];
  for (var i = 2; i <= maxValue; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Function to find the largest prime factor of a given number
function largestPrimeFactor(number) {
  var maxFactor = 0;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && isPrime(i)) {
      maxFactor = i;
    }
  }
  return maxFactor;
}

// Main function
function main() {
  var number = 987654321; // Sample input
  var primes = generatePrimes(number);
  
  console.log("List of prime numbers up to", number);
  console.log(primes);
  
  var largestFactor = largestPrimeFactor(number);
  console.log("Largest prime factor of", number, "is", largestFactor);
}

// Call the main function
main();