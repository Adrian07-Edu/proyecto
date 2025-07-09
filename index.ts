function fibonacciRecursivo(n: number): number { // O(k^n)
  if (n <= 1)                        // O(1)
    return n;                        // O(1)
  let a = fibonacciRecursivo(n - 1); // O(k^n-1), k = 1
  let b = fibonacciRecursivo(n - 2); // O(k^n-1), k = 2
  return a + b;                      // [2]^n + 2(1) = 2^n + 2 = O(2^n)
}
function fibonacciIterativo(n: number): number {
  if (n <= 1)                    // O(1)
    return n;                    // O(1)
  let a = 0;                     // O(1)
  let b = 1;                     // O(1)
  for (let i = 2; i <= n; i++) { // O(n)
    const temp = a + b;          // O(n)
    a = b;                       // O(n)
    b = temp;                    // O(n)
  }
  return b;                      // 4(1) + 4(n) = 4n + 4 = O(n)
}
