import "./Product.css";

const Product = ({ img, colors, size, gender, title }) => {
  return (
    <div className="product-card">
      <img src={img} />
      <div className="colors">
        <ul className="colorColumn">
          {colors.map((item) => (
            <li className="box-color">
              <img src={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="gendersize">
        <div className="gender"> {gender}</div>
        <div className="size"> {size}</div>
      </div>
      <div className="product-title">{title}</div>
    </div>
  );
};

export default Product;
