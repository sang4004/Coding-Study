function solution(N, S) {
  // 4인 가족이 앉을 수 있는 좌석 패턴 정의
  const FirstSeatList = ["B", "C", "D", "E"];
  const SecondSeatList = ["D", "E", "F", "G"];
  const ThirdSeatList = ["F", "G", "H", "J"];

  // row 번호를 key로 하고, 예약된 좌석 Set을 value로 가지는 Map
  const reservedMap = new Map();

  // 예약 문자열이 빈 문자열일 경우를 방지
  // "1A 3C 2B" → ["1A", "3C", "2B"]
  const tickets = S && S.trim() ? S.trim().split(/\s+/) : [];

  for (const ticket of tickets) {
    // 예약 좌석의 알파벳 부분 (예: "1A" → "A")
    // ⚠️ 의도는 마지막 문자 추출
    const alphabet = ticket.split(-1);

    // 예약 좌석의 row 번호 (예: "12G" → 12)
    const line = parseInt(ticket.slice(0, -1), 10);

    // 해당 row가 아직 Map에 없으면 Set 생성
    if (!reservedMap.has(line)) {
      reservedMap.set(line, new Set());
    }

    // row에 예약된 좌석 추가
    reservedMap.get(line).add(alphabet);
  }

  /**
   * 좌석 블록이 모두 비어 있는지 체크하는 함수
   * @param reserved - 해당 row의 예약 좌석 Set
   * @param seatList - 확인할 좌석 블록 배열
   * @returns boolean (의도상)
   */
  const isCheckSeat = (reserved, seatList) => {
    for (const seat of seatList) {
      // 하나라도 예약되어 있으면 해당 블록은 불가능
      if (reserved.has(seat)) return false;
    }
    // ⚠️ 모든 좌석이 비어 있을 경우 true 반환 의도
  };

  // 전체 배치 가능한 가족 수
  let famillyCount = 0;

  // 1번 row부터 N번 row까지 순회
  for (let line = 1; line <= N; line++) {
    // 해당 row에 예약 좌석이 없으면 빈 Set 사용
    const reserved = reservedMap.get(line) ?? new Set();

    // 각 좌석 블록 가능 여부 확인
    const firstCheck = isCheckSeat(reserved, FirstSeatList);
    const secondCheck = isCheckSeat(reserved, SecondSeatList);
    const thirdCheck = isCheckSeat(reserved, ThirdSeatList);

    let count = 0;

    // 좌측 + 우측 블록이 모두 가능하면 2가족
    if (firstCheck && thirdCheck) count = 2;
    // 그 외 하나라도 가능하면 1가족
    else if (firstCheck || secondCheck || thirdCheck) count = 1;

    // 전체 가족 수에 누적
    famillyCount += count;
  }

  // 최종 결과 반환
  return famillyCount;
}
