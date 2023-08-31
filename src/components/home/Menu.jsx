import React from "react"; 
import { addBurger } from "../redux/burgersSlice"
import { useDispatch } from "react-redux";
import MenuCard from "./MenuCard"; 
import data from "../../data"


const Menu = () => { 
    const dispatch = useDispatch();
    const addToCartHandler = (itemNum) => {
        dispatch(addBurger(itemNum));
    }; 
    
    return ( 
        <section id="menu"> 
            <h1>MENU</h1>    
            <div>
                {data.productData.map((item, index) => {
                    return(
                        <MenuCard 
                            itemNum={item.id} 
                            burgerSrc={item.img} 
                            price={item.price} 
                            title={item.title}
                            handler={addToCartHandler} 
                            delay={item.delay} 
                        />
                    )
                })}            
            </div> 
        </section> 
    ); 
};  


export default Menu;