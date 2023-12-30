import { useReducer, useEffect } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return (
                {
                    ...state,
                    loading: true
                }
            );
        case 'SUCCESS':
            return (
                {
                    ...state,
                    loading: false,
                    data: action.data
                }
            );
        case 'ERROR':
            return (
                {
                    ...state,
                    loading: false,
                    error: action.error
                }
            );
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const initialStates = {
    loading: false,
    data: null,
    error: null
};

export const useAsync = (callback, deps = [], skip = false) => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data: data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        if (skip) return;
        fetchData();
        // esline 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData];
};

