export const Vegetables = ({ vegetables, isThere, inputValue }) => {

    return (

        <>
            <div>
                {vegetables.filter((veggi) => {
                    const input = veggi.name.toLowerCase().includes(inputValue.toLowerCase());
                    const checkbox = !isThere || veggi.InStock;
                    return input && checkbox;
                }).map((veggi) => (
                    <h5 key={veggi.id} style={{ textAlign: "center" }}>
                        {`${veggi.name} - ${veggi.price} - ${String(veggi.InStock)} ₺`}
                    </h5>
                ))
                }
            </div>
        </>
    )
}