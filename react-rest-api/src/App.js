import { Routes, Route, Link } from 'react-router-dom';
import { SkillProvider } from './Context/SkillContext';

import {Home} from './components/Home';

import {SkillIndex} from './components/skills/SkillIndex';
import {SkillCreate} from './components/skills/SkillCreate';
import {SkillEdit} from './components/skills/SkillEdit';

import { ProductIndex } from './components/products/ProductIndex';
import { ProductCreate } from './components/products/ProductCreate';
import { ProductEdit } from './components/products/ProductEdit';

import { PelangganIndex } from './components/pelanggan/PelangganIndex';
import { PelangganCreate} from './components/pelanggan/PelangganCreate';
import { PelangganEdit } from './components/pelanggan/PelangganEdit';

import { KategoriIndex } from './components/kategori/KategoriIndex';
import { KategoriCreate } from './components/kategori/KategoriCreate';
import { KategoriEdit } from './components/kategori/KategoriEdit';

import { CartIndex } from './components/cart/CartIndex';

function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
      <div className='max-w-7xl mx-auto min-h-screen'>
        <nav>
          <ul className='flex'>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/">Home</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/skills">Skills</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/products">Product</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/pelanggan">Pelanggan</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/categories">Kategori</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/skills' element={<SkillIndex />} />
          <Route path='/skills/create' element={<SkillCreate />} />
          <Route path='/skills/:id/edit' element={<SkillEdit />} />

          <Route path='/products' element={<ProductIndex />} />
          <Route path='/products/create' element={<ProductCreate />} />
          <Route path='/products/:id/edit' element={<ProductEdit />} />

          <Route path='/pelanggan' element={<PelangganIndex />} />
          <Route path='/pelanggan/create' element={<PelangganCreate />} />
          <Route path='/pelanggan/:id/edit' element={<PelangganEdit />} />

          <Route path='/categories' element={<KategoriIndex />} />
          <Route path='/categories/create' element={<KategoriCreate />} />
          <Route path='/categories/:id/edit' element={<KategoriEdit />} />

          <Route path='/cart' element={<CartIndex />} />
        </Routes>
      </div>
    </div>
    </SkillProvider>
  );
}
export default App;
