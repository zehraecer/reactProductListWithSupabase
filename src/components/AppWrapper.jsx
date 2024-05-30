import { InputArea } from "./InputArea"
import { TableWrapper } from "./TableWrapper"
import { useState } from "react"




export const AppWrapper = () => {
    const [inputValue, setInputValue] = useState('')
    const [isThere, setIsThere] = useState(false)

    return (
        <>
            <div className="AppWrapper">

                <div>
                    <InputArea
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        isThere={isThere}
                        setIsThere={setIsThere}
                    />

                </div>
                <div>

                    <TableWrapper
                        inputValue={inputValue}
                        isThere={isThere}
                    />

                </div>
            </div>
        </>
    )
}