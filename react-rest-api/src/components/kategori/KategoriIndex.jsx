import { useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const KategoriIndex = () => {

    let no = 1;
    const { kategoris, getKategoris, deleteKategori } = useContext(SkillContext);
    useEffect(() => {
        getKategoris();
    }, []);
    

    return (
        <div className="mt-12">
            <div className="flex justify-end m-2 p-2">
                <Link to="/categories/create" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">New Skill</Link>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID Kategori
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {kategoris.map((kategori) => {
                            return (
                                <tr key={kategori.idkategori} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{no++}</td>
                                <td className="px-6 py-4">{kategori.idkategori}</td>
                                <td className="px-6 py-4">{kategori.kategori}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link to={`/categories/${kategori.idkategori}/edit`} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteKategori(kategori.idkategori)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
