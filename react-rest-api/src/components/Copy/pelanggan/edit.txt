import { useContext, useEffect } from 'react';
import SkillContext from '../../context/SkillContext';
import { useParams } from 'react-router-dom';

export const PelangganEdit = () => {

    const { formValuespel, onChangepel, updatePelanggan, errors, pelg, setErrors, getPel } = useContext(SkillContext);
    let { id } = useParams();

    useEffect(() => {
        getPel(id);
        setErrors({});
    }, [])

    return (
        <div className='mt-12'>
            <form onSubmit={updatePelanggan} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
                <div className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="pelanggan" className='block mb-2 text-sm font-medium'>pelanggan</label>
                        <input name='pelanggan' value={formValuespel["pelanggan"]} onChange={onChangepel} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.name[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="alamat" className='block mb-2 text-sm font-medium'>alamat</label>
                        <input name='alamat' value={formValuespel["alamat"]} onChange={onChangepel} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.title[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telp" className='block mb-2 text-sm font-medium'>telp</label>
                        <input name='telp' value={formValuespel["telp"]} onChange={onChangepel} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.slug && <span className='text-sm text-red-400'>{errors.description[0]}</span>}
                    </div>
                </div>
                <div className="my-4">
                    <button className='px-2 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Update</button>
                </div>
            </form>
        </div>
    )
}