/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
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



/* 하단 코드는 README.md를 보고 로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 완전히 구현하는 줄 알고 만든 코드입니다.. 거의 다 짜고나서 과제범위가 아니라는걸 깨달았습니다.. */


//이메일과 비밀번호 형식 검증 기능 (base 코드)

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}




// (작성코드) 이메일, 비밀번호 형식 조건 통과 시 welcome.html로 링크 이동 & 실패 시 에러메세지 표시
document.addEventListener('DOMContentLoaded', function () {

  const loginForm = document.querySelector('.login-form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
    
      const formData = new FormData(event.target);
      const loginData = {};
    
      formData.forEach((value, key) => {
        loginData[key] = value;
      });
    
      // 입력받은 이메일, 비밀번호 값 가져오기
      const userEmail = getValueAtObject(loginData, 'userEmail');
      const userPassword = getValueAtObject(loginData, 'userPassword');
    
      // 이메일, 비밀번호 검증
      const EmailValid = userEmail && emailReg(userEmail);
      const PasswordValid = userPassword && pwReg(userPassword);
    
      // 이메일 에러 메세지 표시
      const emailErrorMessage = document.getElementById('userEmailError');
      if (!EmailValid) {
        emailErrorMessage.style.display = 'block';
      } else {
        emailErrorMessage.style.display = 'none'; 
      }
    
      // 비밀번호 에러 메세지 표시
      const passwordErrorMessage = document.getElementById('userPasswordError');
      if (!PasswordValid) {
        passwordErrorMessage.style.display = 'block'; 
      } else {
        passwordErrorMessage.style.display = 'none'; 
      }
    
      // 모든 검증 후 통과 시 로그인
      if (EmailValid && PasswordValid) {
        alert('로그인 성공');
        window.location.href = '/mission01/naver_login/welcome.html';
      }
    });
  }
});

