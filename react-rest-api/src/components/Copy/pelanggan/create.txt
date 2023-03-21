import { useContext, useEffect } from 'react';
import SkillContext from '../../context/SkillContext';

export const PelangganCreate = () => {

    const { formValuespel, onChangepel, storePelanggan, errors, setErrors } = useContext(SkillContext);
    useEffect(() => {
        return () => {
            setErrors({})
        };
    }, []);

    return (
        <div className='mt-12'>
            <form onSubmit={storePelanggan} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
                <div className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="pelanggan" className='block mb-2 text-sm font-medium'>Pelanggan</label>
                        <input name='pelanggan' value={formValuespel["pelanggan"]} onChange={onChangepel} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.pelanggan[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="alamat" className='block mb-2 text-sm font-medium'>Alamat</label>
                        <input name='alamat' value={formValuespel["alamat"]} onChange={onChangepel} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.name && <span className='text-sm text-red-400'>{errors.alamat[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telp" className='block mb-2 text-sm font-medium'>Telp</label>
                        <input name='telp' value={formValuespel["telp"]} onChange={onChangepel} className='border border-gray-300 text-sm rounded-md block w-full p-2' />
                        {errors.slug && <span className='text-sm text-red-400'>{errors.telp[0]}</span>}
                    </div>
                </div>
                <div className="my-4">
                    <button className='px-2 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Store</button>
                </div>
            </form>
        </div>
    )
}