import {  Helmet } from 'react-helmet-async';
import Banner from "./Banner";
import BistroBox from "./BistroBox";
import Category from "./Category/Category";
import Featured from "./FeaturedItem/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonials/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home Page
                </title>
            </Helmet>
            <Banner></Banner>
            <div className="my-16 w-10/12 mx-auto">
            <Category></Category>
            </div>
            <BistroBox></BistroBox>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;