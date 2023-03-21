import {useContext, useEffect} from 'react';
import SkillContext from '../../Context/SkillContext';
import { useParams } from 'react-router-dom';

export const PelangganEdit = () => {
  const { formValuespel, onChangePel, errors, setErrors, pelg, getPelg, updatePelanggan } = 
  useContext(SkillContext);
  let {idpelanggan} = useParams();
  
  useEffect(() => {
    getPelg(idpelanggan);
    setErrors({});
  }, []);
  return (
      <div className='mt-12'>
        <form onSubmit={updatePelanggan} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
          <div className='space-y-6'>
          <div className='mb-4'>
              <label htmlFor='pelanggan' className='block mb-2 text-sm font-medium'>
              pelanggan
              </label>
              <input name='pelanggan' value={formValuespel["pelanggan"]} onChange={onChangePel} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
              {errors.name && <span className='text-sm text-red-400'>{ errors.name[0] }</span>}
            </div>
  
            <div className='mb-4'>
              <label htmlFor='alamat' className='block mb-2 text-sm font-medium'>
                alamat
              </label>
              <input name='alamat' value={formValuespel["alamat"]} onChange={onChangePel} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
              {errors.alamat && <span className='text-sm text-red-400'>{ errors.alamat[0] }</span>}
            </div>

            <div className='mb-4'>
              <label htmlFor='Telp' className='block mb-2 text-sm font-medium'>
                Telp
              </label>
              <input name='Telp' value={formValuespel["Telp"]} onChange={onChangePel} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
              {errors.Telp && <span className='text-sm text-red-400'>{ errors.Telp[0] }</span>}
            </div>
          </div>
          <div className='my-4'>
            <button className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Update</button>
          </div>
        </form>
      </div> 
    );
}
