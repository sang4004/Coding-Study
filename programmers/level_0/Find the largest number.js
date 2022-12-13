// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예 설명

// 입출력 예 #1
// 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.

// 입출력 예 #2
// 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

//내가 처음 푼 풀이법
function solution(array) {
  var answer = [];
  // 큰 번호 저장
  let bigNum = 0;
  // 큰 번호의 인덱스 번호 저장
  let bigIndex = 0;

  // 반복문 시작
  for(let a of array){
      // 기준보다 큰 값이면 교체
      if(bigNum < a){
          bigNum = a
      }
  }
  // 큰 번호의 인덱스 번호 찾기
  bigIndex = array.findIndex(raw=> raw == bigNum);
  answer.push(bigNum, bigIndex)
  return answer;
}

// 두 번째 더 간단단한 코드 풀이 방법. Math 함수 활용
function solution(array) {

  // Math.max를 통하여 가장 큰 값을 찾기.
  let max = Math.max(...array);
  // 리턴 시 가장 큰 값과 해당 값의 인덱스 번호 값 리턴
  return [max, array.indexOf(max)];
}