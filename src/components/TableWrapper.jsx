import { useState, useEffect } from "react"
import { Fruits } from "./Fruits"
import { Vegetables } from "./Vegetables"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://gwmohqcgjtcoddbbhwlg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3bW9ocWNnanRjb2RkYmJod2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkzNTIsImV4cCI6MjAzMDQ3NTM1Mn0.lweBCSYqY59P-xv3Cmk7OMqI5i9ijGy2I3lnLh-rNxE')

export const TableWrapper = ({ inputValue, isThere, secondInput }) => {

    const [fruits, setFruits] = useState([])
    const [vegetables, setVegetables] = useState([])



    // async function addFruits() {

    //     const { data, error } = await supabase
    //         .from('Fruits')
    //         .insert([
    //             secondInput
    //         ])
    //         .select()

    // }


    async function getFruits() {
        let { data, error } = await supabase
            .from("Fruits")
            .select()

        return setFruits(data)
    }

    async function getVegetables() {
        let { data, error } = await supabase
            .from("Vegetables")
            .select()

        return setVegetables(data)
    }

    useEffect(() => {
        getFruits();
    }, [fruits]);


    useEffect(() => {
        getVegetables();
    }, [vegetables]);

    return (


        <>

            <div className="products">

                <div className="product" ><Fruits fruits={fruits} setFruits={setFruits} inputValue={inputValue} isThere={isThere} secondInput={secondInput} />
                </div>
                <div className="product"><Vegetables vegetables={vegetables} setVegetables={setVegetables} inputValue={inputValue} isThere={isThere} /></div>

            </div>

        </>

    )

}