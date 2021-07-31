import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './wy.css';

const Wy = props => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());


    const onEditorStateChange = value => {
        setEditorState(value);
        props.onChange(value);
    }
    return(
        <Editor editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class" 
            onEditorStateChange={onEditorStateChange}
             />
    );
}

export default Wy;