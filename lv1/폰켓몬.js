function solution(nums) {
  const N = nums.length;
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  return Math.min(N / 2, countMap.size);
}

//맵 객체는 키와 값의 쌍을 저장하는 데이터 구조

//countMap 객체에 num을 키로 사용하여 값을 1 증가.
//만약 num이 키로 이미 존재하지 않으면 값을 1로 설정
//N/2는 선택 가능한 최대 폰켓몬 수
//countMap.size는 서로 다른 타입의 폰켓몬 총 개수

/*
폰켓몬 총 개수 저장
폰켓몬 종류별 개수 카운팅
카운팅 결과 맵에 저장
선택 가능한 최대 폰켓몬 종류 계산
최대 폰켓몬 종류 수 반환
*/