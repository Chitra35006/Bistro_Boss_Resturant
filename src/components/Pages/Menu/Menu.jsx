import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import Section_Title from '../Section_Title/Section_Title';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
   
    return (
        <div>
           <Helmet>
            <title>Menu</title>
            </Helmet> 
            <Cover img={menuImg} title="our menu"></Cover>
            <Section_Title subHeading="Don't Miss" heading="Today's Offer" ></Section_Title>
           {/* offered menu items */}
           <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="soup"img={soupImg}></MenuCategory>  
        </div>
    );
};

export default Menu;