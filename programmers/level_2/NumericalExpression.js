// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 제한사항
// n은 10,000 이하의 자연수 입니다.
// 입출력 예
// n	result
// 15	4
// 입출력 예 설명
// 입출력 예#1
// 문제의 예시와 같습니다.


function solution(n) {
    // 1부터 n까지 순회 하면서 순회를 하면서 계속 더하기 1 ~ n 까지 순회하면 멈추기
    
    let count = 0
    
    for(let i = 1; i <= n; i++) {
        let sum = 0;
        
        for(let j = i; j <= n; j++) {
            // 더하기
            sum += j;
            
            // j와 sum이 같으면 멈추기
            if(sum === n) {
                count++
                break;
            }
            
            // sum이 기준 값보다 크면 의미 없으니 패스
            if(sum > n) {
                break;
            }
        }
    }
    return count;
}

// 다른 사람 풀이 
function solution(n) {
    let count = 0;
    let left = 1;
    let sum = 0;
    
    for (let right = 1; right <= n; right++) {
        sum += right;
        
        // 더한 값이 n보다 크면 왼쪽값을 뺌
        while (sum > n) {
            sum -= left;
            left++;
        }
        
        // 같은 경우에 카운트
        if (sum === n) {
            count++;
        }
    }
    
    return count;
}