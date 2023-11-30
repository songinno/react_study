import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
    memoList: string[];
    onClickDelete: (index: number) => void;
};

// 필요한 Props : 메모 목록, 삭제 시 실행할 함수
export const MemoList: FC<Props> = memo(props => {
    console.log("MemoList 렌더링");
    
    const { memoList, onClickDelete } = props;

    return (
        <div>
            
            <SContainer>
                <p>메모 목록</p>
                <ul>
                    {memoList.map((memo, index) => (
                        <li key={memo}>
                            <SMemoWrapper>
                                <p>{memo}</p>
                                {/* <SButton onClick={onClickDelete.bind(this, index)}>삭제</SButton> */}
                                <SButton onClick={() => { onClickDelete(index) }}>삭제</SButton>
                            </SMemoWrapper>
                        </li>
                    ))}
                </ul>
            </SContainer>
        </div>
    );
});

/* CSS 적용 - styled components */
const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;