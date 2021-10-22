import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGift";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ Category }) => {
  //Para renombra cualquier elemento se utiliza : y el nombre que deseamos poner ejmplo  data: images
  const { data: images, loading } = useFetchGifs(Category);

  // const [images, setImages] = useState([]);
  //useEfect permite Ejecuta sierto codigo de mnera condicional

  // useEffect(() => {
  //   getGifs(Category).then((imgs) => setImages(imgs));
  // }, [Category]); //Arreglo o lista [] de dependencia esto hace que el use useEffect no se recargue

  //const [Count, setCount] = useState(0);

  //   getGifs();

  return (
    <>
      <h3>{Category}</h3>
      {/* {loading ? "Cargando..." : "Fin de Carga"} */}
      {loading && <p>Loading....</p>}
      <div className="card-grid">
        {images.map((img) => (
          // console.log(c, "mapeo");
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
