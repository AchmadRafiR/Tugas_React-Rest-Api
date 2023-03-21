import { useContext, useEffect } from 'react';
import SkillContext from '../../context/SkillContext';
import { useParams } from 'react-router-dom';

export const ProductEdit = () => {

    const { formValuesprod, onChangeprod, updateProduct, errors, product, setErrors, getProduct, getCategories, categories } = useContext(SkillContext);
    let { id } = useParams();

    useEffect(() => {
        getProduct(id);
        setErrors({});
        getCategories();
    }, [])

    return (
        <div className='mt-12'>
            <form onSubmit={updateProduct} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
                <div className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="category" className='block mb-2 text-sm font-medium'>Category</label>
                        <select name="category" id="" onChange={onChangeprod}>
                            {categories.map(cat => {
                                return <option key={cat.id} value={cat.id}>{cat.category}</option>
                            })}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className='block mb-2 text-sm font-medium'>Category</label>
                        <input name='category' value={formValuesprod["category"]} onChange={onChangeprod} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.name[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className='block mb-2 text-sm font-medium'>Title</label>
                        <input name='title' value={formValuesprod["title"]} onChange={onChangeprod} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.title[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className='block mb-2 text-sm font-medium'>Description</label>
                        <input name='description' value={formValuesprod["description"]} onChange={onChangeprod} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.slug && <span className='text-sm text-red-400'>{errors.description[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className='block mb-2 text-sm font-medium'>Price</label>
                        <input name='price' value={formValuesprod["price"]} onChange={onChangeprod} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.slug && <span className='text-sm text-red-400'>{errors.price[0]}</span>}
                    </div>
                </div>
                <div className="my-4">
                    <button className='px-2 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Update</button>
                </div>
            </form>
        </div>
    )
}