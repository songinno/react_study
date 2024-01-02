import { NavLink, Outlet, useNavigate } from "react-router-dom";

const ArticleItem = (props) => {
  const { id } = props;

  // ! NavLink
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export const Articles = () => {
  // ! useNavigate
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goHome}>Home</button>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};
