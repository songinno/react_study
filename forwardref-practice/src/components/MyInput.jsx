import React, { forwardRef } from 'react'

export const MyInput = forwardRef((props, ref) => {
    // console.log(ref); // {current: input}
    
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
});