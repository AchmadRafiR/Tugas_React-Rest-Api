import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
    name: "",
    slug: "",
    }

const productForm = {
    title: "",
    description: "",
    category: "",
    price: "",
    }

const initialFormpel = {
    pelanggan: "",
    alamat: "",
    telp: "",
    }

const initialFormcat = {
    kategori: ""
    } 

export const SkillProvider = ({children}) => {
    const [formValues, setFormValues] = useState(initialForm);


    // SKILL

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name , value } = e.target;
        setFormValues({...formValues, [name]: value });
        }

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data)
    }

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        const apiSkill = response.data.data;
        console.log( response);
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.name,
            slug: apiSkill.slug,
        });
    }

    const storeSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.post("skills", formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const updateSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.put("skills/" + skill.id, formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteSkill = async (id) => {
        if (!window.confirm("Are you sure")) {
            return;
        }
        await axios.delete("skills/" + id);
        getSkills();
    }


    // PRODUCT

    const [formProduct, setFormProduct] = useState(productForm);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [cartprod, setCartprod] = useState([]);
    

    const getProducts = async () => {
        const apiProducts = await axios.get("products");
        setProducts(apiProducts.data)
    }

    const onProduct = (e) => {
        const { name , value } = e.target;
        setFormProduct({...formProduct, [name]: value });
    }

    const getProduct = async (id) => {
        const response = await axios.get("products/" + id);
        const apiProduct = response.data[0];
        console.log( response);
        setProduct(apiProduct);
        setFormProduct({
            title: apiProduct.title,
            description: apiProduct.description,
            category: apiProduct.category,
            price: apiProduct.price,
        });
    }

    const storeProduct = async (e) => {
        e.preventDefault();
        try{
            await axios.post("products", formProduct);
            setFormProduct(productForm);
            navigate("/products");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        try{
            await axios.put("products/" + product.id, formProduct);
            setFormProduct(productForm);
            navigate("/products");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteProduct = async (id) => {
        if (!window.confirm("Are you sure")) {
            return;
        }
        await axios.delete("products/" + id);
        getProducts();
    }
    

    // KATEGORI

    const [kategoris, setKategoris] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [formValuescat, setFormValuescat] = useState(initialFormcat);

    const onChangecat = (e) => {
        const { name, value} = e.target;
        setFormValuescat({ ...formValuescat, [name]: value});
    }

    const getKategoris = async () => {
        const apiKat = await axios.get("categories");
        setKategoris(apiKat.data);
        console.log(apiKat.data);
    }

    const storeKategori = async (e) => {
        e.preventDefault();
        try {
            await axios.post("categories", formValuescat);
            setFormProduct(initialFormcat);
            navigate("/categories");
        }catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    // const getKategori = async (id) => {
    //     const response = await axios.get("categories/" + id);
    //     const apiCat = response.data;
    //     setPelanggan(apiCat);
    //     console.log(apiCat);
    //     setFormValuespel({
    //         pelanggan: apiCat.pelanggan,
    //         alamat: apiCat.alamat,
    //         telp: apiCat.telp,
    //     });

    const getKategori = async (id) => {
        const response = await axios.get("categories/" + id);
        const apiKat = response.data[0];
        console.log(response.data);
        setKategori(apiKat)
        setFormValuescat({
            kategori: apiKat.kategori
        });
    }

    const updateKategori = async (e) => {
        e.preventDefault();
        try{
            await axios.put("categories/" + kategori.idkategori, formValuescat);
            setFormValuescat(initialFormcat);
            console.log(initialFormcat);
            navigate("/categories");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteKategori = async (id) => {
        if (!window.confirm("Are you sure")) {
            return;
        }
        await axios.delete("categories/" + id);
        getKategoris();
    }

    // PELANGGAN

    const [pelanggan, setPelanggan] = useState([]);
    const [pelg, setPelg] = useState([]);
    const [formValuespel, setFormValuespel] = useState(initialFormpel);
    const [cartpel, setCartpel] = useState([]);
    const [counter, setCounter] = useState(1);

    const getPelanggan = async () => {
        const apiPelanggan = await axios.get("pelanggan");
        setPelanggan(apiPelanggan.data);
    }

    const getPelg = async (id) => {
        const response = await axios.get("pelanggan/" + id);
        const apiCat = response.data;
        setPelanggan(apiCat);
        console.log(apiCat);
        setFormValuespel({
            pelanggan: apiCat.pelanggan,
            alamat: apiCat.alamat,
            telp: apiCat.telp,
        });
    }

    const onChangePel = (e) => {
        const { name , value } = e.target;
        setFormValuespel({...formValuespel, [name]: value });
        }

    const storePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.post("pelanggan", formValuespel);
            setFormValuespel(initialFormpel);
            console.log(initialFormpel);
            navigate("/pelanggan");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const updatePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.put("pelanggan/" + pelg.idpelanggan , formValues);
            setFormValuespel(initialFormpel);
            console.log(initialFormpel); 
            navigate("/pelanggan");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deletePelanggan = async (id) => {
        if (!window.confirm("Are you sure")) {
            return;
        }
        await axios.delete("pelanggan/" + id);
        getPelanggan();
    }


    // CART

    const prodcart = async (id) => {
        const response = await axios.get("products/" + id);
        setCartprod(response.data[0]);
        console.log(cartprod);
    }

    const pelcart = async (id) => {
        const response = await axios.get("pelanggan/" + id);
        setCartpel(response.data[0]);
        console.log(cartpel);
    }

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    const checkout = () => {
        let data = {
            idbarang: cartprod.id,
            jumlah: counter,
            harga: cartprod.price * counter,
            barang: cartprod.title,
            idpelanggan: cartpel.idpelanggan,
            pelanggan: cartpel.pelanggan,
            alamat: cartpel.alamat
        };

        axios.post('orderdetail', data);
        console.log(data);
        navigate('/');
    }

    return (
        <SkillContext.Provider value={{
            errors, setErrors,
            skill, skills, getSkill, getSkills, onChange, formValues, storeSkill, updateSkill, deleteSkill,
            getProducts, products, product, getProduct, onProduct, formProduct, storeProduct, updateProduct, deleteProduct,setCartprod,cartprod, 
            pelanggan,setPelanggan, getPelanggan, pelg,setPelg, getPelg, onChangePel,formValuespel,cartpel,setCartpel, updatePelanggan, deletePelanggan, storePelanggan,
            kategori,kategoris,getKategori,getKategoris,onChangecat,formValuescat,storeKategori,updateKategori,deleteKategori,
            counter, setCounter, increase, decrease,checkout,pelcart,prodcart
            }}>
            {children}
        </SkillContext.Provider>
    );
};

export default SkillContext;