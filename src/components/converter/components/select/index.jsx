import { forwardRef } from "react"

export const Select = forwardRef((props, ref) => {

        return (
            <>
            <select ref={ref} onChange={() => props.onChange()}>
                {props.options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
        
            </select>
            <span> {props.to}</span>
            </>
        )    
    }
)