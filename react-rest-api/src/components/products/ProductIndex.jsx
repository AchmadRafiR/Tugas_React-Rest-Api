import { useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";


export const ProductIndex = () => {
  const { products, getProducts, deleteProduct, prodcart } = useContext(SkillContext);
    useEffect(() => {
        getProducts();
    }, []);
    

    return (
        <div className="mt-12">
            <div className="flex justify-end m-2 p-2">
                <Link to="/products/create" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">New Skill</Link>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="px-6 py-4">{product.title}</td>
                                    <td className="px-6 py-4">{product.description}</td>
                                    <td className="px-6 py-4">{product.price}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <Link to={`/products/${product.id}/edit`} className="px-2 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">
                                            Edit
                                        </Link>
                                        <button onClick={() => deleteProduct(product.id)} className="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">
                                            Delete
                                        </button>
                                        <button onClick={() => prodcart(product.id)} className="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">
                                            Cart
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
