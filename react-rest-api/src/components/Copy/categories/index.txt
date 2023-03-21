import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import SkillContext from '../../context/SkillContext';

export const CategoryIndex = () => {

    let no = 1;

    const { categories, getCategories, deleteCategory } = useContext(SkillContext);
    useEffect(() => {
        return () => {
            getCategories();
        };
    }, []);

    return (
        <div className='mt-12'>

            <div className='flex justify-end m-2 p-2'>
                <Link to="/categories/create" className='px-2 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md' >
                    New Category
                </Link>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">NO</th>
                        <th scope="col" className="px-6 py-3">ID CATEGORY</th>
                        <th scope="col" className="px-6 py-3">CATEGORY</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => {
                        return (
                            <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{no++}</td>
                                <td className="px-6 py-4">{category.id}</td>
                                <td className="px-6 py-4">{category.category}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link to={`/categories/${category.id}/edit`} className="px-2 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteCategory(category.id)} className='px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}