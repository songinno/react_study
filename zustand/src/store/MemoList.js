import { create } from "zustand";

// * Store (Object 형태) : State와 Action을 갖고 있는 저장소
export const useMemoStore = create(set => ({
    // ! State
    memoList: [],

    // ! Action
    addMemo: (val) => 
        set((prev) => ({ // prev : Store 객체
            // ! ...
            // memoList: [...prev.memoList, { content: val, id: new Date().getMilliseconds() + val }]
            // ! concat
            memoList: prev.memoList.concat({ content: val, id: new Date().getMilliseconds() + val })
        })),
    removeMemo: (id) =>
        set((prev) => ({
            memoList: prev.memoList.filter(e => {
                return e.id !== id;
            })
        }))
}));

