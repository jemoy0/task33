import { useRef, useState, useEffect } from "react"
import { ConvertButton, Input, Result, Select } from "./components"

export const Converter = () => {
    const options = [
        {value: "mm", label: "мм"},
        {value: "cm", label: "см"}
    ]

    useEffect(() => {
        handleSelectChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [inputValue, setInputValue] = useState(0)
    const selectRef = useRef()
    const [buttonLabel, setButtonLabel] = useState()
    const [convertedValue, setConvertedValue] = useState()

    const handleSelectChange = () => {
        switch(selectRef.current.value) {
            case "mm":
                setButtonLabel("конвертувати в см");
                break;
            case "cm":
                setButtonLabel("конвертувати в мм")
                break
    
            default:
                console.log("pencil")
        }
    }

    const convert = () => {
        switch(selectRef.current.value) {
            case "mm":
                setConvertedValue((inputValue / 10) + " см" + ((inputValue >= 1000) ? ", що більше або дорівнює 1 метру" : ", що менше за 1 метр") )
                 
                break;
            case "cm":
                setConvertedValue((inputValue * 10) + " мм" + ((inputValue >= 100) ? ", що більше або дорівнює 1 метру" : ", що менше за 1 метр"))
                break
    
            default:
                console.log("pencil")
        }
    }
    
    return (
        <>
            <span>Конвертувати мм в см і навпаки: </span>
            <div>
                <Input value={inputValue} onChange={setInputValue}/>
                <Select options={options} ref={selectRef} onChange={handleSelectChange}/>
                <ConvertButton onClick={convert} label={buttonLabel}/>
                <Result value={convertedValue}/>
            </div>
        </>
    )
}