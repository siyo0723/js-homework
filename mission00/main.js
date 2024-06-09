const user = {
  id:'junior1234@naver.com',
  pw:'junior5678@'
}
/* 1번 문제

(작성코드) console 출력시 키 인수로 받고 아닐 시 에러 및 지정 텍스트 뜨도록 하기 */

// function getValueAtObject(obj, key) {
//   if(obj.hasOwnProperty(key)) {
//     return obj[key];
//   }else {
//     throw new Error('필수 입력값이 입력되지 않았습니다.')
//   }
// }

// console.log(getValueAtObject(user, 'id'));
// console.log(getValueAtObject(user, 'pw'));
// console.log(getValueAtObject(user, 'age'));

/*  2번 문제
*/
function getNumberAtArray(arr, index) {
  if (!Array.isArray(arr)) {
    throw new Error('배열이 아닙니다.');
  }

  if (index < 0 || index >= arr.length) {
    throw new Error('유효하지 않은 인덱스입니다.');
  }

  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];


  console.log(getNumberAtArray(numbers, 2)); // 30
  console.log(getNumberAtArray(numbers, 4)); // 50
  console.log(getNumberAtArray(numbers, 5)); // 유효하지 않은 인덱스
  console.log(getNumberAtArray("not an array", 2)); // 배열이 아닌 경우
