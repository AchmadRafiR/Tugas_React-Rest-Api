import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
    name: "",
    slug: ""
}

const initialFormprod = {
    category: "",
    title: "",
    description: "",
    price: ""
}

const initialFormcat = {
    category: ""
}

const initialFormpel = {
    pelanggan: "",
    alamat: "",
    telp: ""
}

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues] = useState(initialForm);

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState({});

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [formValuescat, setFormValuescat] = useState(initialFormcat);

    const [products, setproducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [formValuesprod, setFormValuesprod] = useState(initialFormprod);
    const [cartprod, setCartprod] = useState([]);

    const [pelanggan, setPelanggan] = useState([]);
    const [pelg, setPelg] = useState([]);
    const [formValuespel, setFormValuespel] = useState(initialFormpel);
    const [cartpel, setCartpel] = useState([]);

    const [counter, setCounter] = useState(1);



    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        const apiSkill = response.data.data
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.name,
            slug: apiSkill.slug
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
        try {
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
        if (!window.confirm("R U Sure?")) {
            return;
        }
        await axios.delete("skills/" + id);
        getSkills();
    }

    // DUMMYJSON PRODUCTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // const getProducts = async () => {
    //     const apiProduct = await axios.get("https://dummyjson.com/products");
    //     setproducts(apiProduct.data.products);
    // };

    // const showCategories = async () => {
    //     const apicat = await axios.get("https://dummyjson.com/products/categories")
    //     setCategories(apicat.data);
    //     console.log(apicat.data);
    // }

    // CATEGORY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const onChangecat = (e) => {
        const { name, value } = e.target;
        setFormValuescat({ ...formValuescat, [name]: value });
    }

    const getCategories = async () => {
        const apiCat = await axios.get("categories");
        setCategories(apiCat.data);
        // console.log(apiCat.data);

    }

    const storeCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post("categories", formValuescat);
            setFormValuesprod(initialFormcat);
            navigate("/categories");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const getCategory = async (id) => {
        const response = await axios.get("categories/" + id);
        const apiCat = response.data[0]
        setCategory(apiCat);
        setFormValuescat({
            category: apiCat.category
        });
    }

    const updateCategory = async (e) => {
        e.preventDefault()
        try {
            await axios.put("categories/" + category.id, formValuescat);
            setFormValuescat(initialFormcat);
            navigate("/categories");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteCategory = async (id) => {
        if (!window.confirm("R U Sure?")) {
            return;
        }
        await axios.delete("categories/" + id);
        getCategories();
    }

    // PRODUCT FROM DBASE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const onChangeprod = (e) => {
        const { name, value } = e.target;
        setFormValuesprod({ ...formValuesprod, [name]: value });
    }

    const getProducts = async () => {
        const apiProduct = await axios.get("product");
        setproducts(apiProduct.data);
        // console.log(apiProduct.data);
    };

    const storeProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("product", formValuesprod);
            setFormValuesprod(initialFormprod);
            navigate("/product");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const getProduct = async (id) => {
        const response = await axios.get("product/" + id);
        const apiCat = response.data[0]
        setProduct(apiCat);
        setFormValuesprod({
            category: apiCat.category,
            title: apiCat.title,
            description: apiCat.description,
            price: apiCat.price
        });
    }

    const updateProduct = async (e) => {
        e.preventDefault()
        try {
            await axios.put("product/" + product.id, formValuesprod);
            setFormValuesprod(initialFormprod);
            navigate("/product");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteProduct = async (id) => {
        if (!window.confirm("R U Sure?")) {
            return;
        }
        await axios.delete("product/" + id);
        getProducts();
    }

    // PELANGGAN FROM DBASE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const onChangepel = (e) => {
        const { name, value } = e.target;
        setFormValuespel({ ...formValuespel, [name]: value });
    }

    const getPelanggan = async () => {
        const apiPelanggan = await axios.get("pelanggan");
        setPelanggan(apiPelanggan.data);
        // console.log(apiPelanggan.data);
    };

    const storePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.post("pelanggan", formValuespel);
            setFormValuesprod(initialFormpel);
            navigate("/pelanggan");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const getPel = async (id) => {
        const response = await axios.get("pelanggan/" + id);
        const apiCat = response.data[0]
        // console.log(apiCat);
        setPelg(apiCat);
        setFormValuespel({
            pelanggan: apiCat.pelanggan,
            alamat: apiCat.alamat,
            telp: apiCat.telp
        });
    }

    const updatePelanggan = async (e) => {
        e.preventDefault()
        try {
            await axios.put("pelanggan/" + pelg.id, formValuespel);
            setFormValuespel(initialFormpel);
            navigate("/pelanggan");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const deletePelanggan = async (id) => {
        if (!window.confirm("R U Sure?")) {
            return;
        }
        await axios.delete("pelanggan/" + id);
        getPelanggan();
    }

    // CART ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const prodcart = async (id) => {
        const response = await axios.get("product/" + id);
        // const productCart = response.data[0]
        setCartprod(response.data[0]);
        // console.log(cartprod);

    }

    const pelcart = async (id) => {
        const response = await axios.get("pelanggan/" + id);
        // const pelCart = response.data[0]
        // console.log(pelCart);
        setCartpel(response.data[0]);
        // console.log(cartpel);
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
            idpelanggan: cartpel.id,
            pelanggan: cartpel.pelanggan,
            alamat: cartpel.alamat
        };

        axios.post('orderdetail', data);
        navigate('/');
    }


    return <SkillContext.Provider value={{
        skill, skills, getSkills, getSkill, onChange, formValues, storeSkill, errors, setErrors, updateSkill, deleteSkill,
        categories, setCategories, getCategories, onChangecat, formValuescat, storeCategory, getCategory, category, setCategory, updateCategory, deleteCategory,
        products, setproducts, getProducts, onChangeprod, formValuesprod, storeProduct, getProduct, product, setProduct, updateProduct, deleteProduct, cartprod, setCartprod, prodcart,
        pelanggan, setPelanggan, getPelanggan, onChangepel, formValuespel, storePelanggan, getPel, pelg, setPelg, updatePelanggan, deletePelanggan, cartpel, setCartpel, pelcart,
        counter, setCounter, increase, decrease, checkout
    }}>{children}</SkillContext.Provider>
}

export default SkillContext;