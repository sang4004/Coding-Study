// 문제 설명
// 경화는 과수원에서 귤을 수확했습니다. 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다. 그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.

// 예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 이라고 합시다. 경화가 귤 6개를 판매하고 싶다면, 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.

// 경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다. 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 1 ≤ k ≤ tangerine의 길이 ≤ 100,000
// 1 ≤ tangerine의 원소 ≤ 10,000,000
// 입출력 예
// k	tangerine	result
// 6	[1, 3, 2, 5, 4, 5, 2, 3]	3
// 4	[1, 3, 2, 5, 4, 5, 2, 3]	2
// 2	[1, 1, 1, 1, 2, 2, 2, 3]	1

// 내 풀이
function solution(k, tangerine) {
  // 맵 생성
  const basket = new Map();
  let total = 0;
  let sum = 0;

  for (let i = 0; i < tangerine.length; i++) {
    // 현재 번호가 있는지 체크
    const nowNumber = basket.get(tangerine[i]);

    // 있다면 Map에 있는 갯수 + 1 하여 안에 넣기
    if (nowNumber !== undefined) {
      basket.set(tangerine[i], nowNumber + 1);
    } else {
      // 없다면 새로 추가
      basket.set(tangerine[i], 1);
    }
  }

  const counts = [...basket.values()].sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < counts.length; i++) {
    if (k > sum) {
      sum += counts[i];
      total = total + 1;
    } else {
      break;
    }
  }
  return total;
}

// 조금 더 개선한 풀이
function solution(k, tangerine) {
  // 맵 생성
  const countBySize = new Map();

  // 귤 크기별로 개수 세기
  for (const size of tangerine) {
    // Map에 현재 귤 크기가 있는지 확인하고, 없으면 0으로 초기화 후 +1
    const count = countBySize.get(size) ?? 0;
    // Map에 귤 크기와 개수 업데이트
    countBySize.set(size, count + 1);
  }

  // 귤 크기별 개수를 내림차순으로 정렬
  const counts = [...countBySize.values()].sort((a, b) => b - a);

  // 선택한 귤 개수와 종류 수를 계산
  let selectedCount = 0;
  // 선택한 귤 종류 수
  let typeCount = 0;

  // 각 귤 크기별 개수를 순회하며 선택한 귤 개수와 종류 수를 계산
  for (const count of counts) {
    selectedCount += count;
    typeCount++;

    // 선택한 귤 개수가 k 이상이면 반복 종료
    if (selectedCount >= k) {
      break;
    }
  }

  return typeCount;
}
