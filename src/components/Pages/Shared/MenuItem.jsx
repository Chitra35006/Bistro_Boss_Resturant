

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    //console.log(item);
    return (
        <div className="flex space-x-4 p-2 border border-gray-200">
        {/* Image with custom border-radius */}
        <img 
          style={{ borderRadius: '10px 300px 300px 300px' }} 
          className="w-[120px]" 
          src={image} 
          alt="" 
        />
      
        {/* Content */}
        <div>
          <h3 className="uppercase">{name}--------</h3>
          <p className="text-gray-500">{recipe}</p>
        </div>
      
        {/* Price */}
        <p className="text-yellow-500">${price}</p>
      </div>
      
    );
};

export default MenuItem;