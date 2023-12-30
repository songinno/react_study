// 파라미터로 action의 타입(ex. GET_USER)과 Promise를 만들어주는 함수
export const createAsyncDispatcher = (type, promiseFn) => {
    // 성공, 실패에 대한 액션 타입 문자열
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    // ...rest를 사용하여, 나머지 파라미터를 rest 배열에 담음
    const actionHandler = async (dispatch, ...rest) => {
        dispatch({type}); // 요청 시작
        try {
            const data = await promiseFn(...rest); // rest 배열을 spread로 넣어줌
            dispatch({
                type: SUCCESS,
                data
            });
        } catch (e) {
            dispatch({
                type: ERROR,
                error: e
            });
        }
    }

    return actionHandler;
}

export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
    loading: true,
    data: null,
    error: null
};

// 데이터 fetch에 성공했을 때 바뀔 상태 객체
const successState = data => ({
    loading: false,
    data,
    error: null
});

// 실패(오류)했을 때 바뀔 상태 객체
const errorState = error => ({
    loading: false,
    data: null,
    error
});

// 3가지 액션을 처리하는 reducer
// type - action의 타입
// key - reducer에서 사용할 필드명 (ex. user, users)

export const createAsyncHandler = (type, key) => {
    // 성공, 실패에 대한 액션 타입 문자열
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    const asyncHandler = (state, action) => {
        switch(action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: successState(action.data)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: errorState(action.error)
                };
            default:
                return state;
        }
    };

    return asyncHandler;
}