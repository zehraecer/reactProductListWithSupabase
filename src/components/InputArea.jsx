import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient('https://gwmohqcgjtcoddbbhwlg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3bW9ocWNnanRjb2RkYmJod2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkzNTIsImV4cCI6MjAzMDQ3NTM1Mn0.lweBCSYqY59P-xv3Cmk7OMqI5i9ijGy2I3lnLh-rNxE')



export const InputArea = ({ inputValue, isThere, setIsThere, setFruits, fruits, setInputValue, vegetables, setVegetables }) => {

    const [secondInput, setSecondInput] = useState("")
    const [numberInput, setNumberInput] = useState(0)
    const [inStockInput, setInStockInput] = useState(false)
    const [category, setCategory] = useState("fruits")


    async function addFruits() {

        const table = category === "fruits" ? "Fruits" : "Vegetables";


        const { data, error } = await supabase
            .from(table)
            .insert([
                {

                    name: secondInput,
                    price: numberInput,
                    InStock: inStockInput
                }
            ])
            .select()
        console.log(data);
        console.log(error);
        console.log(secondInput);
        if (category === "fruits") {
            setFruits([...fruits, ...data]);

        } else {

            setVegetables([...vegetables, ...data]);
        }
        setSecondInput('');

    }
    console.log(category);
    return (

        <div style={{ display: "flex", gap: "15px" }}>

            <div>
                <input type="text" value={secondInput} onChange={(e) => setSecondInput(e.target.value)} />
                <input type="number" value={numberInput} onChange={(e) => setNumberInput(e.target.value)} />

                <select value={inStockInput} onChange={(e) => setInStockInput(e.target.value)} >
                    <option value="false">No</option>
                    <option value="true">There is</option>
                </select>
                <select value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                </select>
                <button type='submit' onClick={addFruits}>Add Product</button>
            </div>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            </div>

            <div>

                <label htmlFor="">Only show products in stock</label>
                <input type="checkbox" checked={isThere} onChange={(e) => setIsThere(e.target.checked)} />
            </div>
        </div>

    )
}