import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import React from 'react'

export default function AppEditor(props) {
    const withImg = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", { align: [] },{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }, "blockquote", "link"],
            [{ list:  "ordered" }, { list:  "bullet" },{ indent:  "-1" }, { indent:  "+1" }],
            ["image", "video"],
            ["clean"],
        ],
    };
    
    const simple = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", { align: [] },{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }, "blockquote", "link"],
            [{ list:  "ordered" }, { list:  "bullet" },{ indent:  "-1" }, { indent:  "+1" }],
            ["clean"],
        ],
    };

    return (
        <React.StrictMode>
            <div className={props.groupClass ? props.groupClass : `mt-1`}>
                {props.label ? (
                    <label htmlFor={props.controlId} className="form-label">
                        {props.label} {props.isRequired ? (<span className="text-danger">*</span>) : (``)}
                    </label>
                ) :(``)}

                <ReactQuill theme="snow"
                    modules={props.module ? 
                        (props.module == `withImg` ? withImg : simple)
                        : simple
                    }
                    value={props.value}              
                    onChange={e => props.onChange(e)}                
                />
            </div>


            
        </React.StrictMode>
    )
}