import React from "react"
import classes from "./FormControls.module.css"

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.Textarea + " " + (hasError && classes.error)}>
            {props.children} <br/>
            {hasError && <span> {meta.error} < /span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}
//
// export const Textarea = ({input, meta, ...props}) => {
//     // debugger
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={classes.Textarea + " " + (hasError && classes.error)}>
//               <textarea {...input} {...props} /><br/>
//             { hasError && <span> {meta.error} < /span>}
//             </div>
//     )
// }
//
// export const Input = ({input, meta, ...props}) => {
//     // debugger
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={classes.Textarea + " " + (hasError && classes.error)}>
//             <input {...input} {...props} /><br/>
//             { hasError && <span> {meta.error} < /span>}
//         </div>
//     )
// }