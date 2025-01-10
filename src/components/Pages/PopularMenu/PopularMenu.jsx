import { useEffect, useState } from "react";
import Section_Title from "../Section_Title/Section_Title";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('/menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         //console.log(data);
    //         const poplularItems = data.filter(item => item.category === 'Popular');

    //         setMenu(poplularItems)
    //     })
    // },[])
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'Popular')

    return (
        <section className="mb-12">
            <Section_Title
            subHeading={"Check it Out"}
            heading={"From Our Menu"}
            ></Section_Title>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
                
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            
        </section>
    );
};

export default PopularMenu;