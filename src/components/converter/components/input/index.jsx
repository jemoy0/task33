export const Input = (props) => {
    return (
        <>
            <input
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                type="number"
            />
        </>
    )
}