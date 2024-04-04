function solution(a, b, n) {
  let answer = 0;
  let bottles = n;

  while (bottles >= a) {
    const exchangedCola = Math.floor(bottles / a);
    answer += exchangedCola;
    bottles = (bottles % a) + exchangedCola * b;
  }

  return answer;
}
