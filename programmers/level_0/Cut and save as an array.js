//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
//입출력 예 설명

//입출력 예 #1
//"abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.

//입출력 예 #2
//"abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.


function solution(my_str, n) {
  var answer = [];
  // split을 통하여 모든 문자 하나씩 나눠 저장
  let str_split = my_str.split("");
  
  // 참일 때 까지 반복 하기 위하여 while문 사용
  while(str_split.length > 0){
      // 0 부터 n의 수만큼 한번 더 자른 문자들을 join으로 합치기
      answer.push(str_split.splice(0, n).join(""));
  }
  
  return answer;
}