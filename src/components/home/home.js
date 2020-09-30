import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ResturantCard from '../resturantCard.js/resturantCard'
import {fetchResturants} from '../../store/actions'
import './home.css'
import offer from '../../assets/offer.png'
import logo from '../../assets/logo.png'
import banner from "../../assets/banner.jpg"
const Home = (props) => {
    

    const [resturants,setResturants] = useState([])
    useEffect(()=>{
      
        axios.get('https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&',{
        headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjUiLCJlbWFpbCI6Ijk4MTg5Nzk1NDVAZmFzdG9yLmluIiwicGhvbmUiOiI5ODE4OTc5NTQ1IiwiZGlhbF9jb2RlIjoiKzkxIiwibGFzdF9wYXNzd29yZF91cGRhdGUiOiIyMDIwLTA5LTMwVDA1OjM4OjM3LjAwMFoiLCJpYXQiOjE2MDE0NDQzMjUsImV4cCI6MTYwODcwMTkyNX0.NQao3G9ADJOOMFSQQ-uPM37QuFzLy6WbBlOL5K3cTHg`}})
        .then(res =>{
            console.log(res.data)
            setResturants(res.data)
          
        })
        .catch(error => {
            console.log(error);
            
       
        })
    },[])
    
    
console.log("hello")
    return (
        <>
        <div class="ui secondary menu" style={{borderBottom:"1px solid grey"}}>
        <div class=" item">
         <img src={logo}/>
        </div>
        <div class="header item">
         Welcome Karan!
        </div>
        </div> 
        <div className="home">
        
        <img src={banner} style={{height:'8rem',borderRadius:"5px",marginBottom:"2rem",marginTop:"2rem"}}/>
       
        <span style={{fontWeight:"bold"}}>Highest Rated</span>
        
        <div className='resturants'>
        {resturants.map((res)=><ResturantCard img={res['small_image']} name={res['restaurant_name']}/>)}
        </div>
        <img src={offer} style={{height:"10rem",width:'auto',marginTop:"2rem",marginBottom:"2rem"}}/>
        <span style={{fontWeight:"bold"}}>Pocket freindly</span>
        <div className='resturants'>
        {resturants.map((res)=><ResturantCard  img={res['small_image']} name={res['restaurant_name']}/>)}
        </div>
        </div>
        </>
    )
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        fetchResturants : () => dispatch(fetchResturants())
    }
}
const mapStateToProps = (state) => {
    return {
        resturants: state.resturants,
        loading: state.loading,
        error: state.error
    }
}*/
export default Home ;