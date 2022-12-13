//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예 #1
// num_list가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.

// 입출력 예 #2
// num_list가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.

// 입출력 예 #3
// num_list가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.


function solution(num_list) {
  var answer = [];
  // num_list의 값이 없을 때까지 반복
  while(num_list.length > 0){
      //새 배열에 맨 뒤의 값을 자른 후 새 배열에 push
      answer.push(num_list.pop())
  }
  return answer;
}