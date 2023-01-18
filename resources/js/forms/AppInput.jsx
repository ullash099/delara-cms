import React from 'react'

export default function AppInput(props) {
    let attr = {}
    if(props.attrs && Object.keys(props.attrs).length > 0){
        Object.entries(props.styles).map(([ak,av])=>{
            attr[ak] = av;
        })
    }

    return (
        <div className={props.groupClass ? props.groupClass : `mt-1`}>
            {props.label ? (
                <label htmlFor={props.controlId} className="form-label">
                    {props.label} {props.isRequired ? (<span className="text-danger">*</span>) : (``)}
                </label>
            ) :(``)}
            
            <input type={props.type ? props.type : `text`}
                id={props.controlId}
                className={props.className ? `form-control ${props.className}` : `form-control`}
                {...attr}
                value={props.value ? props.value : ``}
                onKeyPress={e => {
                    if(e.which === 13){
                        if(props.onKeyPress)
                            props.onKeyPress()
                    }
                }}
                onChange={e => props.onChange(e.target.value)}
            />
        </div>
    )
}