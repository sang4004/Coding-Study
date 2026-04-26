// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.
// 입출력 예
// s	return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"	"For The Last Week"


function solution(s) {
    // 우선 단위 기준으로 끊어주기
    // 첫 번째 글자 꺼내서 업스케이프 해주기
    
    const wordList = s.split(" "); // 단어 단위로 끊음
    
    for(let i=0; i < wordList.length; i++) {
        const nowWord = wordList[i].split("");
        
        for(let j=0; j < nowWord.length; j++){
            if(j === 0) nowWord[j] = nowWord[j].toUpperCase();
            else nowWord[j] = nowWord[j].toLowerCase();
        }
        const newWord = nowWord.join("");
        
        wordList[i] = newWord;
    }
    return wordList.join(" ");
}

// 다른 사람 풀이
function solution(s) {
    return s.split(" ").map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
}
