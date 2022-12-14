const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0 ~ 100점 범위를 벗어나면
 * 점수가 잘못 입력되었다는 alert을 띄우고
 * 다시 점수를 입력받기
 */

const scoreCheck = () => {
  const inputKor = document.querySelector("input[name='sc_kor']");
  const inputEng = document.querySelector("input[name='sc_eng']");
  const inputMath = document.querySelector("input[name='sc_math']");

  if (!inputKor.value) {
    alert("국어 점수를 입력하세요");
    inputKor.focus();
  } else if (Number(inputKor.value) < 0 || Number(inputKor.value) > 100) {
    alert("국어 점수는 0 ~ 100까지 범위에서 입력하세요");
    inputKor.focus();
    // 영어 점수
  } else if (!inputEng.value) {
    alert("영어 점수를 입력하세요");
    inputEng.focus();
  } else if (Number(inputEng.value) < 0 || Number(inputEng.value) > 100) {
    alert("영어 점수는 0 ~ 100 까지 범위에서 입력하세요");
    inputEng.focus();
    // 수학 점수
  } else if (!inputMath.value) {
    alert("수학 점수를 입력하세요");
    inputMath.focus();
  } else if (Number(inputMath.value) < 0 || Number(inputMath.value) > 100) {
    alert("수학 점수는 0 ~ 100 까지 범위에서 입력하세요");
    inputMath.focus();
  } else {
    return true;
  }
  return false;
};

const scoreInput = () => {
  const tr = document.createElement("TR");

  if (
    (inputs.name !== "sc_num" &&
      inputs.name !== "sc_name" &&
      Number(inputs.value) < 0) ||
    Number(inputs.value) > 100
  ) {
    alert("점수가 잘못 입력되었습니다\n점수를 다시 입력해주세요");
    inputs.value = "";
    return false;
  }

  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
  });

  tbodyScore.appendChild(tr);
};

// btnAdd?.addEventListener("click", scoreInput)
btnAdd?.addEventListener("click", () => {
  // scoreCheck() 함수를 실행하여 return 값이 true 인 경우
  // scoreInput() 함수를 실행하여 데이터를 추가하라
  if (scoreCheck()) {
    scoreInput();
  }
});
