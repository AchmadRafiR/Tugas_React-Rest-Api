import {useContext, useEffect} from 'react'
import SkillContext from '../../Context/SkillContext'

export const ProductCreate = () => {
  const { formProduct, onProduct, storeProduct, errors, setErrors, kategoris, getKategoris } = useContext(SkillContext);
  useEffect (() => {
    setErrors({});
    getKategoris();
  }, []);

  return (
    <div className='mt-12'>
      <form onSubmit={storeProduct} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='title' className='block mb-2 text-sm font-medium'>
              Title
            </label>
            <input name='title' value={formProduct["title"]} onChange={onProduct} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.title && <span className='text-sm text-red-400'>{ errors.title[0] }</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor='description' className='block mb-2 text-sm font-medium'>
              Description
            </label>
            <input name='description' value={formProduct["description"]} onChange={onProduct} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.description && <span className='text-sm text-red-400'>{ errors.description[0] }</span>}
          </div>

          <div className="mb-4">
              <label htmlFor="category" className='block mb-2 text-sm font-medium'>Category</label>
              <select name="category" id="" onChange={onProduct}>
                {kategoris.map(cat => {
                  return <option key={cat.kategori} value={cat.kategori}>{cat.kategori}</option>
                })}
              </select>
            </div>

          <div className='mb-4'>
            <label htmlFor='category' className='block mb-2 text-sm font-medium'>
              Idcategory
            </label>
            <input name='category' value={formProduct["category"]} onChange={onProduct} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.category && <span className='text-sm text-red-400'>{ errors.category[0] }</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor='price' className='block mb-2 text-sm font-medium'>
              Price
            </label>
            <input name='price' value={formProduct["price"]} onChange={onProduct} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.price && <span className='text-sm text-red-400'>{ errors.price[0] }</span>}
          </div>
        </div>
        <div className='my-4'>
          <button className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Store</button>
        </div>
      </form>
    </div> 
  );
}
