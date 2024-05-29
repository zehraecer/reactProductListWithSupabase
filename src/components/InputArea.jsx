export const InputArea = ({ inputValue, setInputValue, isThere, setIsThere }) => {


    return (

        <div>

            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <input type="checkbox" checked={isThere} onChange={(e) => setIsThere(e.target.checked)} />

        </div>

    )
}