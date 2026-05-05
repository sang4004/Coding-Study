// 문제 설명
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.
// 입출력 예
// n	result
// 78	83
// 15	23
// 입출력 예 설명
// 입출력 예#1
// 문제 예시와 같습니다.
// 입출력 예#2
// 15(1111)의 다음 큰 숫자는 23(10111)입니다.


function solution(n) {
    // 숫자 2진수로 변환 후 1의 갯수 세기
    const count = n.toString(2).split("").filter((raw) => raw === "1").length;
    
    let next = n + 1;
    let newCount = 0;
    
    while(count !== newCount) {        
        newCount = next.toString(2).split("").filter((raw) => raw === "1").length;
        next++;
    }
    
    return next - 1;
}

// 다른 사람 풀이
function solution(n,a=n+1) {
    // n의 2진수에서 1의 갯수와 a의 2진수에서 1의 갯수가 같은면 a 반환 아니면 a+1 반환
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}

// 비트 연산 활용
function solution(n) {
    // 이진수로 변환 후 1의 갯수
    const count = n.toString(2).split("").filter(raw => raw === "1").length;
    let i = n + 1;
    while (true) {
        // 이진수로 변환 후 1의 갯수
        if (n.toString(2).split('1').length === i.toString(2).split('1').length) {
            return i;
        }
        i++;
    }
}