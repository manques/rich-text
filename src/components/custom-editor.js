import React, { useState, useEffect } from 'react';
import DisplayEditor from './display-editor';
import Wy from './wy';

const CustomEditor = props => {
    const [value, setValue] = useState();

    const handleChange = val => {
        // console.log(val);
        setValue(val);
    }
    return(
        <div>
            <DisplayEditor value={value}/>
            <Wy onChange={handleChange} />
       </div>
    );
}

export default CustomEditor;