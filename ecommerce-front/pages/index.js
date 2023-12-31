import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({featuredProduct,newProducts}) {
  return(
    <div>
      <Header></Header>
      <Featured product={featuredProduct}></Featured>
      <NewProducts products={newProducts}></NewProducts>
    </div>
  );

}

export async function getServerSideProps() {
  const featuredProductId = '6478e0de4dcf2ccab2851c5e';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}