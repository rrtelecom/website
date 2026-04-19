import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { productsCollection } from "../firebaseConfig";

function Categories() {
    const [products, setProducts] = useState([] as any);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const querySnapshot = await getDocs(productsCollection);
        const newAlldocs: any = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();
            docData.id = doc.id;
            newAlldocs.push(docData);
        });
        setProducts(newAlldocs);
    };

    const renderProducts = () => {
        const rows = [];
        var item = 3;
        if (window.screen.width < 768) {
            item = 1;
        }
        for (let i = 0; i < products.length; i += item) {
            const rowProducts = products.slice(i, i + item);
            rows.push(
                <div key={i} className="flex flex-row items-center w-screen justify-evenly">
                    {rowProducts.map((product: any) => (
                        <div key={product.id} className="my-10 border border-gray-300 shadow-lg bg-slate-200 rounded-xl max-w-96 flex flex-col items-center text-center justify-center">
                            {/* <img src={product.image || "https://images.unsplash.com/5/unsplash-kitsune-3.jpg"} height={600} className="border w-80 h-80 rounded-xl object-cover" alt="" loading="lazy" /> */}
                            <div className="relative lg:pt-14 lg:px-14 lg:pb-8 p-10">
                                <div className="relative">
                                    <img src={product.image} height={600} className="border border-gray-300 w-80 h-80 rounded-xl object-cover" alt="" loading="lazy" />
                                </div>
                                <br />
                                <h1 className="font-medium">{product.name}</h1>
                                <button onClick={
                                    () => {
                                        window.location.href = `/product/${product.id}`;
                                    }
                                } className="absolute inset-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl" style={{ transition: 'opacity 0.3s' }}>View More</button>

                            </div>
                        </div>
                    ))}
                </div>
            );
        }
        return rows;
    };

    return (
        <>
            <h1 id="products" className="font-bold text-3xl text-center mt-5">Our Services & Products</h1>
            {renderProducts()}
        </>
    );
}

export default Categories;
