// 추가 버튼 클릭 시, 실행하는 함수
const onClickAdd = () => {
    // 텍스트 박스 엘리먼트 얻기
    const textEl = document.getElementById("add-text");

    // 텍스트 박스의 값 얻기
    const text = textEl.value;
    console.log(text);

    // 텍스트 박스 초기화
    textEl.value = "";

    // li 태그 추가
    const li = document.createElement("li");

    // div 태그 추가
    const div = document.createElement("div");

    // p 태그 생성 (텍스트 박스의 문자 설정)
    const p = document.createElement("p");
    p.textContent = text;

    // button 태그 생성(라벨: [삭제])
    const button = document.createElement("button");
    button.textContent = "삭제";

    // 삭제 버튼 클릭 시, 행 삭제 처리
    button.addEventListener("click", () => {
        // 삭제 대상 행(li) 얻기
            // closet) : 지정한 문자열과 일치하는, 가장 가까운 조상 엘리먼트를 찾아서 반환
        const deleteTarget = button.closest("li");

        // ul 태그 아래에서 삭제 대상 행을 삭제
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    // div 태그 아래 p 태그와 button 태그 설정
    div.appendChild(p);
    div.appendChild(button);

    // li 태그 아래 div 태그 설정
    li.appendChild(div);

    // 메모 목록 리스트(ul)에 li 태그 설정
    document.getElementById("memo-list").appendChild(li);
};


// 추가 버튼 클릭 시, onclickAdd 함수 실행
document.getElementById("add-button")
.addEventListener("click", () => onClickAdd());