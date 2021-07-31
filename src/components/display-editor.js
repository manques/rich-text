import React, { useState, useEffect } from 'react';
import './display-editor.css';
import { convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import { convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const DisplayEditor = props => {
    let editorState = props.value ? props.value : null;
    const [content, setContent] = useState();
    const [raw, setRaw] = useState();
    const [html, setHtml]= useState();
    const [markdown, setMarkdown] = useState();
    useEffect(() => {
        // console.log(JSON.stringify(editorState, null, 4));
       if(editorState){
            setContent(editorState.getCurrentContent());
       }
    }, [editorState]);

    useEffect(() => {
       if(content){
            setRaw(convertToRaw(content));
       }
    }, [content]);

    useEffect(() => {
       if(raw){
            setHtml(draftToHtml(raw));
            setMarkdown(draftToMarkdown(raw));
       }
    }, [raw]);

    useEffect(() => {
       if(html){
           console.log(markdown);
       }
    }, [html]);


    return(
        <div className="container">
            {editorState && html}
        </div>
    );
}

export default DisplayEditor;