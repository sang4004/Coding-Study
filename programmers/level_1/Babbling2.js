// 문제 설명
// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// babbling	                                    result
// ["aya", "yee", "u", "maa"]	                    1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2

// 입출력 예 설명
// 입출력 예 #1
// ["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

// 입출력 예 #2
// ["ayaye", "uuuma", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다.
// "yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.

// 유의사항
// 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다.
// 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

// 내 문제 풀이

function solution(babbling) {
  var answer = 0;

  // forEach()를 통하여 babbling를 하나씩 확인
  for (let word of babbling) {
    // 해당 word가 aya, ye, woo, ma를 중복으로 가지고 있는 것을 확인하기 위해
    // 정규식 표현 캡처 기능을 통해 복사본을 생성하여 해당 값이 존재하면 continue
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 해당 그룹의 문자들로 시작해서 끝나는 문자들이 존재하나 확인
    // 존재한다면 answer + 1
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }
  return answer;
}

// 다른 사람이 풀이한 조금 더 간결한 풀이법
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}

