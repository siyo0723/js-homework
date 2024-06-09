/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

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

