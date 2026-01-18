/**
Problem Statement (English)

Write a function that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

📥 Input

An array A consisting of N integers

📤 Output

The smallest positive integer that does not occur in A

🔒 Constraints

N is an integer within the range [1..100,000]

Each element of A is an integer within the range [−1,000,000..1,000,000]

A = [1, 3, 6, 4, 1, 2] → 5
A = [1, 2, 3]         → 4
A = [-1, -3]          → 1
*/

const A = [1, 3, 6, 4, 1, 2];
const B = [1, 2, 3];
const C = [-1, -3];

function solution(A) {
  const seen = new Set();

  // 중복제거 및 객체 생성
  for (const v of A) {
    // 결과값이 0보다 큰 값만 나와야하니 음수 제거
    if (v > 0) seen.add(v);
  }

  // 반복문 돌면서 해당 값이 없으면 그 값을 리턴 해줘버림.
  for (let i = 1; i <= A.length + 1; i++) {
    if (!seen.has(i)) return i;
  }
}


