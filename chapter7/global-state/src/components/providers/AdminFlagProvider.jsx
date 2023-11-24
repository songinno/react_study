import { createContext, useState } from "react";

// 프로바이더 생성
export const AdminFlagContext = createContext({}); 

export const AdminFlagProvider = props => {
    const { children } = props;

    // 관리자 플래그
    const [isAdmin, setIsAdmin] = useState(false);

    // Context 객체로서 isAdmin과 setIsAdmin을 설정(객체 생략 표기법)
    return (
        <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    );
};
