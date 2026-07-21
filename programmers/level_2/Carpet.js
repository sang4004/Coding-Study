// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// carpet.png

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

// 입출력 예
// brown	yellow	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

// 내 풀이
function solution(brown, yellow) {
  const total = brown + yellow;

  for (let yHeight = 1; yHeight <= yellow; yHeight++) {
    if (yellow % yHeight === 0) {
      let yWidth = yellow / yHeight;

      const allWidth = yWidth + 2; // 양쪽에 한 칸씩 더 먹고 있기 때문에
      const allHeight = yHeight + 2; // 양쪽에 한 칸씩 더 먹고 있기 때문에

      if (allWidth * allHeight === total) {
        return [allWidth, allHeight];
      }
    }
  }
}

// 조금 더 개선한 풀이
// yellow의 약수를 찾을 때, Math.sqrt(yellow)인 약수의 제곱근까지만 확인 (나머지는 대칭하기 때문에 필요 없음)
// yWidth를 굳이 let으로 선언 할 필요 없이 cosnt로 선언

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let yellowHeight = 1; yellowHeight <= Math.sqrt(yellow); yellowHeight++) {
    if (yellow % yellowHeight !== 0) continue;

    const yellowWidth = yellow / yellowHeight;
    const width = yellowWidth + 2;
    const height = yellowHeight + 2;

    if (width * height === total) {
      return [width, height];
    }
  }
}
