import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../firebaseConfig";
import { Slider } from "../reactSlickSlider";

function Products() {

    const [products, setProducts] = useState([] as any);
    const [category, setCategory] = useState("");

    const params = useParams();
    const name = params.name?.toString();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const categoryRef = doc(db, "products", name!);
        const categorySnapshot = await getDoc(categoryRef);
        if (!categorySnapshot.exists()) {
            console.log('No such document!');
        } else {
            setCategory(categorySnapshot.data().name);
        }
        const col = collection(db, "products", name!, "items");
        const querySnapshot = await getDocs(col);
        const newAlldocs: any = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();
            docData.id = doc.id;
            docData.imageArray = docData.images.split(",");
            newAlldocs.push(docData);
        });
        setProducts(newAlldocs);
    };

    return (

        <>
            <div className="w-screen flex items-center justify-center ">
                <div className="m-10 w-3/4">
                    <h1><a href="/">Products</a> {` > `} <span className="font-bold">
                        <a href={`/product/` + name}>{category}</a>
                    </span>
                    </h1>
                    {
                        products.map((product: any, index: number) => (
                            <div key={index} className="mt-5 border border-gray-300 shadow-xl rounded-xl p-5 text-center">
                                <h1 className="font-bold text-2xl">{product.name}</h1>
                                <div className="  flex flex-col lg:flex-row  items-center text-center justify-center">

                                    <div>
                                        <Slider
                                            dots={true}
                                            infinite={true}
                                            speed={500}
                                            slidesToShow={1}
                                            slidesToScroll={1}
                                            draggable={true}
                                            arrows={false}
                                            className="w-80 h-80 object-contain border rounded-xl m-10"
                                        >
                                            {
                                                product.imageArray.map((image: any, imageIndex: number) => (
                                                    <img key={imageIndex} className="max-w-80 max-h-80 object-contain rounded-xl" src={image} alt="" />
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    <div>
                                        {Object.entries(product).map(([key, value]: any) => (
                                            key !== 'name' && key !== 'other' && key !== 'images' && key !== 'imageArray' && key !== 'id' && (
                                                <tr key={key}>
                                                    <td className="border px-4 py-2">{key}</td>
                                                    <td className="border px-4 py-2">{value}</td>
                                                </tr>
                                            )
                                        ))}
                                        <br />
                                        <h1 className="lg:w-2/3 text-center"> Other : {product.other}</h1>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products
