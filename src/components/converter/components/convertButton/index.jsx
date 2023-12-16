export const ConvertButton = ({onClick, label}) => {
    return (
        <button onClick={() => onClick()}>{label}</button>
    )
}