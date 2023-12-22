import React from "react";
import { useContext } from "react";
import { createContext } from "react";

// Context 생성
const MyContext = createContext();

/* 예시1 */
// export const App = () => {
//     return (
//         <MyContext.Provider value="Hello World">
//             <GrandParent />
//         </MyContext.Provider>
//     );
// };

// function GrandParent() {
//     return <Parent />;
//   }
  
//   function Parent() {
//     return <Child />;
//   }
  
//   function Child() {
//     return <GrandChild />;
//   }
  
//   function GrandChild() {
//     return <Message />;
//   }
  
//   function Message() {
//     const value = useContext(MyContext);
//     return <div>Received: {value}</div>;
//   }

/* 예시2 */

// Custom Hook
const useMyContext = () => {
    const value = useContext(MyContext);
    if (value === undefined) {
        throw new Error('useMyContext should be used within MyContext.Provider');
    }
    return value;
};

export const App = () => {
    return (
        // <MyContext.Provider value="Hello World">
            <AwesomeComponent />
        // </MyContext.Provider>
    );
};

function AwesomeComponent() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
  
  function FirstComponent() {
    const value = useMyContext();
    return <div>First Component says: "{value}"</div>;
  }
  
  function SecondComponent() {
    const value = useContext(MyContext);
    return <div>Second Component says: "{value}"</div>;
  }
  
  function ThirdComponent() {
    const value = useContext(MyContext);
    return <div>Third Component says: "{value}"</div>;
  }