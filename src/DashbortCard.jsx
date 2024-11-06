

const DashbortCard = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div><h1>Cart</h1></div>
                <div className=" flex justify-between items-center">
                    <div>Total Cast:</div>
                    <div>
                    <button className="btn px-8 rounded-full border-2 border-zinc-400">Sort by price</button>
                    <button className="btn px-8 rounded-full border-2 border-zinc-400">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashbortCard;