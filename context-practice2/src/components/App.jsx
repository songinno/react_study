import React, {createContext, useContext, useMemo, useState} from 'react';

const ItemGroupContext = createContext();

const ItemGroupProvider = props => {
    const {children, activeId, onSelect} = props;
    const value = useMemo(() => ({
        activeId,
        onSelect
    }), [activeId, onSelect]);

    return (
        <ItemGroupContext.Provider value={value}>
            {children}
        </ItemGroupContext.Provider>
    );
};

const useItemGroup = () => {
    const value = useContext(ItemGroupContext);
    if (value === undefined) {
        throw new Error('Item component should be used within ItemGroupProvider');
    }
    return value;
};

const Item = props => {
    const { children, id } = props;
    const activeStyle = {
        backgroundColor: 'black',
        color: 'white'
    };
    const style = {
        cursor: 'pointer',
        padding: '1rem'
    };

    const {activeId, onSelect} = useItemGroup();
    const active = activeId === id;
    const onClick = () => onSelect(id);

    return (
        <div style={active ? {...style, ...activeStyle} : style} onClick={onClick}>
            {children}
        </div>
    );
};

export const App = () => {
    const [activeId, setActiveId] = useState(1);
    const [anotherActiveId, setAnotherActiveId] = useState(4);
    
    return (
        <div>
            <ItemGroupProvider activeId={activeId} onSelect={setActiveId}>
                <Item id={1}>Hello</Item>
                <Item id={2}>World</Item>
                <Item id={3}>React</Item>
            </ItemGroupProvider>
            <hr />
            <ItemGroupProvider activeId={anotherActiveId} onSelect={setAnotherActiveId}>
                <Item id={4}>Bye</Item>
                <Item id={5}>Context</Item>
                <Item id={6}>API</Item>
            </ItemGroupProvider>
        </div>
    );
};