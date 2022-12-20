//문제 설명
//신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

// 입출력 예 설명

// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// "ryan"이 "con"을 4번 신고했으나, 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리합니다. 
// 따라서 "con"은 1회 신고당했습니다. 3번 이상 신고당한 이용자는 없으며, "con"과 "ryan"은 결과 메일을 받지 않습니다. 따라서 [0, 0]을 return 합니다.


function solution(id_list, report, k) {
  // muzi : [ 0, [] ] 형태의 배열 생성
  const userList = id_list.reduce((result, currentId) => {
    result[currentId] = [0, []];
    return result;
  }, {});

  //set을 통한 중복제거
  for (const id of new Set(report)) {
    //띄어쓴 기준으로 신고한 유저와 신고된 유저를 나눔
    const [REPORT_ID, ID] = id.split(' ');
    // 배열에 id를 담기
    userList[REPORT_ID][1].push(ID);
    // 신고된 횟수를 +1
    userList[ID][0]++;
  }

  // 정지 기준인 k회 이상 신고된 id를 변수에 담기
  const banned = id_list.filter((id) => userList[id][0] >= k);
  // 신고한 id가 정지되었다면 해당 id를 추가
  const emailList = id_list.map((id) => {
    return userList[id][1].filter((id) => {
      return banned.includes(id);
    }).length;
  });
  return emailList;
}


// 다른 사람이 작성한 Set과 Map을 활용한 풀이
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}