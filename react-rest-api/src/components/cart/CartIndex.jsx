import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SkillContext from "../../Context/SkillContext";

export const CartIndex = () => {

    let no = 1;

    const {  cartprod, cartpel, increase, decrease, counter, checkout } = useContext(SkillContext);
    useEffect(() => {
        return () => {
            
        };
    }, []);

  return (
        <div className="mt-12">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                NO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID BARANG
                            </th>
                            <th scope="col" className="px-6 py-3">
                                JUMLAH
                            </th>
                            <th scope="col" className="px-6 py-3">
                                HARGA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                BARANG
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID PELANGGAN
                            </th>
                            <th scope="col" className="px-6 py-3">
                                PELANGGAN
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ALAMAT
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{no++}</td>
                                <td className="px-6 py-4">{cartprod.id}</td>
                                <td className="px-6 py-4">
                                    <button onClick={decrease} className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>-</button>
                                    {counter}
                                    <button onClick={increase} className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>+</button>
                                </td>
                                <td className="px-6 py-4">{cartprod.price * counter}</td>
                                <td className="px-6 py-4">{cartprod.title}</td>
                                <td className="px-6 py-4">{cartpel.idpelanggan}</td>
                                <td className="px-6 py-4">{cartpel.pelanggan}</td>
                                <td className="px-6 py-4">{cartpel.alamat}</td>
                            </tr>
                    </tbody>
                </table>

                <div className='flex justify-end m-2 p-2'>
                    <button onClick={checkout} className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>Bayar</button>
                </div>
            </div>
        </div>
  )
}
