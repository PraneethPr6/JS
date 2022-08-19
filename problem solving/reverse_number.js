var Reverse_Number = (N) => 
{
  let lastDigit = 0;
  let reverse = 0;
  while (N != 0) {
    lastDigit = N % 10;
    reverse = reverse * 10 + lastDigit;
    N = Math.floor(N / 10);
  }
  return reverse;
};