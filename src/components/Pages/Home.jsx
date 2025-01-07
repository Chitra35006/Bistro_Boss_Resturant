import Banner from "./Banner";
import Category from "./Category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-16 w-10/12 mx-auto">
            <Category></Category>
            </div>
        </div>
    );
};

export default Home;