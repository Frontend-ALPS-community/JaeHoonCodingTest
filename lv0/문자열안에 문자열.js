function solution(str1, str2) {
  let answer = str1.includes(str2) ? 1 : 2;
  return answer;
}
// 문자열 또는 배열에서 특정 값이 포함되어 있는지 확인합니다.
/*
대소문자를 구분합니다.
배열의 경우, NaN 값도 비교합니다.
객체의 경우, 참조 동등 비교를 수행합니다.
*/
