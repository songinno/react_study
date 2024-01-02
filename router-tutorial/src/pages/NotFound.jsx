
const notFoundPageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 64,
    position: 'absolute',
    width: '100%',
    height: '100%',
};

export const NotFound = () => {
    return (
        <div style={notFoundPageStyle}>404</div>
    );
};