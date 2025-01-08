import Banner from "./Banner";
import BistroBox from "./BistroBox";
import Category from "./Category/Category";
import Featured from "./FeaturedItem/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-16 w-10/12 mx-auto">
            <Category></Category>
            </div>
            <BistroBox></BistroBox>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;