import { useContext, useEffect } from 'react';
import SkillContext from '../../context/SkillContext';

export const CategoryCreate = () => {

    const { formValuescat, onChangecat, storeCategory, errors, setErrors } = useContext(SkillContext);
    useEffect(() => {
        return () => {
            setErrors({})
        };
    }, []);

    return (
        <div className='mt-12'>
            <form onSubmit={storeCategory} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
                <div className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="category" className='block mb-2 text-sm font-medium'>Category</label>
                        <input name='category' value={formValuescat["category"]} onChange={onChangecat} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.category[0]}</span>}
                    </div>
                </div>
                <div className="my-4">
                    <button className='px-2 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Store</button>
                </div>
            </form>
        </div>
    )
}