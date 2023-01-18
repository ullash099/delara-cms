import React from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

export default function AppSelect(props) {
    return (
        <Form.Group controlId={props.controlId} 
            className={props.groupClass ? props.groupClass : `mt-1`}
        >
            {
               props.label ? 
               (<Form.Label>
                    {props.label}
                    {
                        props.isRequired ? 
                        (<span className="text-danger">*</span>):(``)
                    }
                </Form.Label>)
                : (``)
            }
            <Select options={props.options}
                isClearable={props.isClearable ? props.isClearable : false}
                formatOptionLabel={data=><span dangerouslySetInnerHTML={{ __html: data.label}}/>}
                value={(props.options).filter(
                    option => 
                    (props.default && option.value.toString() === (props.default).toString())
                )}
                onChange={e => props.onChange(e ? e.value.toString() : `0`)}
            />
        </Form.Group>
    )
}