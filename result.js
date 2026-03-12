window.addEventListener('DOMContentLoaded', function () {
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  const mbtiResult = localStorage.getItem('mbti_result');

  if (mbtiResult) {
    // 로컬스토리지에 결과가 있는 경우
    resultElement.textContent = mbtiResult + '입니다!';
  } else {
    // 로컬스토리지에 결과가 없는 경우
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
  }
});
