import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { inputText } from "../redux/actions";
// import { useEffect } from "react";
import ReactMarkdown from 'react-markdown';



const PreviewerMaster = () => {
    const dispatch = useDispatch();
    const userInput = useSelector((state) => state.input);

    const handleInputChange = (e) => {
        dispatch(inputText(e.target.value))
    }

    return (
        <div>
            <div id="heading"><h1>Markdown Previewer</h1></div>
            <div className="editorWrap">
                <div className="Editor-header">Editor</div>
                <textarea 
                name="editor" 
                id="editor" 
                value={userInput} 
                onChange={handleInputChange}>       
                </textarea>        
            </div>
            
            <div id="preview">
                <ReactMarkdown>{userInput}</ReactMarkdown>
            </div>
        </div>
    )
}

export default PreviewerMaster;