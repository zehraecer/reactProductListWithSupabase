export const Fruits = ({ fruits, inputValue, isThere }) => {

    return (

        <>
            <div>
                <div>
                    {fruits.filter((fruit) => {
                        const input = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
                        const checkbox = !isThere || fruit.InStock;
                        return input && checkbox;
                    }).map((fruit) => (
                        <h5 key={fruit.id} style={{ textAlign: "center" }}>
                            {`${fruit.name} - ${fruit.price} ₺ - ${String(fruit.InStock)} `}
                        </h5>
                    ))
                    }
                </div>
            </div>
        </>
    )
}