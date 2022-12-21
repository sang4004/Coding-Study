// 문자열 나누기
// 문제 설명
// 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

// 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
// s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
// 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

// 입출력 예 설명
// 입출력 예 #1
// s="banana"인 경우 ba - na - na와 같이 분해됩니다.

// 입출력 예 #2
// s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

// 입출력 예 #3
// s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.

function solution(s) {
  //fixedCharacte : 첫 문자를 저장하기 위한 변수
  let answer = 0,
    fixedCharacte = "",
    sumOne = 0,
    sumTwo = 0;

  // 문자열 for문 시작
  for (let char of s) {
    //처음 들어온 문자 저장
    if (!fixedCharacte) fixedCharacte = char;

    //처음 들어온 문자가 이후에 들어온 문자와 같다면 sumOne을 +1 아니라면 sumTwo를 +1
    if (fixedCharacte === char) sumOne++;
    else sumTwo++;

    //sumOne과 sumTwo의 수가 같아지면 모든 answer 1증가시키고 모든 값을 초기화
    if (sumOne === sumTwo) {
      answer++;
      sumOne = 0;
      sumTwo = 0;
      fixedCharacte = "";
    }
  }

  //for문이 끝났는데 fixedCharacte가 남아 있을 경우 잔여 문자가 있는 것이므로 answer + 1
  if (fixedCharacte) answer++;

  return answer;
}


//다른 사람이 풀었은 간결한 풀이 법
function solution(s, count=0) {
    if(!s) return count
    let [first, ...rest] = s.split("")
    let countSame = 1
    let countInSame = 0
    let i=0
    for(; i<rest.length; i++){
        if(rest[i] === first) countSame++
        else countInSame++
        if(countSame === countInSame) break
    }
    return solution(rest.slice(i+1).join(""), count+1)
}