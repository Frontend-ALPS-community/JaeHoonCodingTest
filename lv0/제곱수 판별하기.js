function solution(n) {
  let answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  return answer;
}
//Number.isInteger() 함수: Math.sqrt(n)의 결과가 정수인지 확인
