import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGift";
export const useFetchGifs = (Category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(Category).then((img) => {
      setTimeout(() => {
        setState({
          data: img,
          loading: false,
        });
      }, 3000);
    });
  }, [Category]);
  //   setTimeout(() => {
  //     setState({
  //       data: [1, 4, 3, 4, 9, 7, 0],
  //       loading: false,
  //     });
  //   }, 3000);

  return state;
};
