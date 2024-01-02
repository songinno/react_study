import { useParams } from "react-router-dom";

export const Article = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>게시글 {id}</h2>
        </div>
    );
};