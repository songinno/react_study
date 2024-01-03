import { Outlet, useNavigate } from "react-router-dom";

const headerStyle = {
    background: 'lightgray',
    padding: 16,
    fontSize: 24
};

export const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goArticles = () => {
        navigate('/articles');
    };

    return (
        <div>
            <header style={headerStyle}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};