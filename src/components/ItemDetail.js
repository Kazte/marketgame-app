const ItemDetail = ({ item }) => {
    if (item)
    return (
        <div className="itemDetail">
            <header>{item.name}</header>
            <main>
                <section>
                    <div>
                        <img src={item.cover} alt="" />
                    </div>

                    <div>
                        <p>{item.description}</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ItemDetail;
