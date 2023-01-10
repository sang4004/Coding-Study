// 문제
// 봉투[i] = [wi, hi]가 봉투의 너비와 높이를 나타내는 정수 봉투의 2D 배열이 제공됩니다.
// 한 봉투의 너비와 높이가 다른 봉투의 너비와 높이보다 큰 경우에만 한 봉투가 다른 봉투에 들어갈 수 있습니다.
// 러시아 인형을 만들 수 있는 최대 봉투 수를 반환합니다(즉, 하나를 다른 하나 안에 넣습니다).
// 참고: 봉투는 회전할 수 없습니다.


// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).


// wi = width, hi = height
function maxEnvelopes(envelopes) {
  // width를 오름차순으로 정렬, 만약 값이 같다면 height 내림차순으로 정렬
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  let _list = [];
  // envelopes의 값 하나씩 탐색
  for (let i = 0; i < envelopes.length; i++) {
    // 높이 값 찾기
    let height = envelopes[i][1];
    //left와 right 값을 저장하며 _list에 저장 할 수 있는 값을 탐색
    let l = 0;
    let r = _list.length;
    // 처음은 생략하고 _list의 hegiht 값을 먼저 담음
    while (l < r) {
      //오른쪽 이프트 연산자를 통하여 중간의 값을 찾고
      // 찾은 중간값을 기준으로 반씩 탐색
      let mid = (l + r) >> 1;
      if (_list[mid] < height) l = mid + 1;
      else r = mid;
    }
    // 담을 수 있는 봉투를 담아둔 배열에 length를 반환
    _list[l] = height;
  }
  return _list.length;
}