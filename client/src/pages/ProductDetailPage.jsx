import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductBySlug } from "../api/productApi";

const ProductDetailPage = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Could not load product.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  if (loading) return <div className="container"><p>Loading product...</p></div>;
  if (error) return <div className="container"><p className="error-text">{error}</p></div>;
  if (!product) return <div className="container"><p>Product not found.</p></div>;

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-detail-image-wrap">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>

          <p className={product.stock > 0 ? "in-stock" : "out-stock"}>
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </p>

          {product.stock > 0 && (
            <>
              <label htmlFor="qty">Quantity</label>
              <select
                id="qty"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="qty-select"
              >
                {[...Array(product.stock).keys()].slice(0, 10).map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>

              <button
                className="add-cart-btn"
                onClick={() => alert(`Added ${qty} item(s) to cart`)}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;