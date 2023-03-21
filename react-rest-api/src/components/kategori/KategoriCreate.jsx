import {useContext, useEffect} from 'react'
import SkillContext from '../../Context/SkillContext'

export const KategoriCreate = () => {
  const { formValuescat, onChangecat, storeKategori, errors, setErrors } = useContext(SkillContext);
  useEffect (() => {
    setErrors({});
  }, []);

  return (
    <div className='mt-12'>
      <form onSubmit={storeKategori} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='kategori' className='block mb-2 text-sm font-medium'>
              Kategori
            </label>
            <input name='kategori' value={formValuescat["kategori"]} onChange={onChangecat} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.kategori && <span className='text-sm text-red-400'>{ errors.kategori[0] }</span>}
          </div>
        </div>
        <div className='my-4'>
          <button className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Store</button>
        </div>
      </form>
    </div> 
  );
}
