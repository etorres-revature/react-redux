import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 3,
    title: "book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "book",
    description: "The second book I ever wrote",
  },
  {
    id: "p3",
    price: 15,
    title: "tv",
    description: "a nice tv",
  },
  {
    id: "p4",
    price: 9,
    title: "couch",
    description: "a comfortable couch",
  },
  {
    id: "p3",
    price: 7,
    title: "guitar",
    description: "a musical instrument",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
