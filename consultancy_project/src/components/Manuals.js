import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';
import "../App.css"
const Manual = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [search,setSearch] = useState('');
    console.log(id)
    const getData = ()=>{
        fetch(`http://localhost:7000/api/v1/products/${id}`,{
            mode: 'cors',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(async(data1)=>{
            const course = await data1.json();
            console.log(course.data.product)
            setData(course.data.product)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
       {/* <Navbar/> */}
    {/* <div className='search-box'>
        <input className='form-control' type="search" name="" id="" onChange={(event)=>{setSearch(event.target.value)}} />
    </div> */}
    <div className='course-catalog card-group container'>

        {   

            // <Link to ={`/overview/${item._id}`}>
                <div className="card course course-card" key={data._id}>
                <div className="course-img">
                <img src={data.image} alt=""  />
                </div>
                <div className="card-body">
                <b><div>Name : {data.name}</div></b>
                <b> <div>Cost : {data.cost}</div></b>
                <b> <div>Description : {data.description}</div></b>
                <b> <div>QuantityType : {data.quantityType}</div></b>
                <b> <div>ShortDescription : {data.shortDescription}</div></b>
                <b> <div>PackSize : {data.packSize}</div></b>
                <b> <div>PackType : {data.packType}</div></b>
                <b> <div>Usage : {data.usage}</div></b>
                <b> <div>Dose : {data.dose}</div></b>
                <b> <div>Solubility : {data.solubility}</div></b>
                <b> <div>Features : {data.features}</div></b>
                <b> <div>Application : {data.application}</div></b>
                    
                    
                </div>
                </div>
            // </Link>

        }
    </div>
    {/* <Footer/> */}
    </>
  )
}
export default Manual