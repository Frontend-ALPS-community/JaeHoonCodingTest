function solution(array) {
  const max = Math.max(...array);
  const index = array.indexOf(max);
  return [max, index];
}

//indexOf() 함수: 배열 요소의 인덱스를 찾는 기본적인 함수
//... 연산자: 배열을 펼쳐 함수 인수로 전달하는 간결한 방법
