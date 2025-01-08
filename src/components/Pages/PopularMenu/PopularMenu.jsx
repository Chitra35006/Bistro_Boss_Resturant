import { useEffect, useState } from "react";
import Section_Title from "../Section_Title/Section_Title";
import MenuItem from "../Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const poplularItems = data.filter(item => item.category === 'Popular');

            setMenu(poplularItems)
        })
    },[])
    return (
        <section className="mb-12">
            <Section_Title
            subHeading={"Check it Out"}
            heading={"From Our Menu"}
            ></Section_Title>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;