import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-card-image"
      />

      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹{product.price}</p>

        <Link to={`/product/${product.slug}`} className="product-btn">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;