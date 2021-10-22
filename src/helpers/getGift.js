export const getGifs = async (Category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1nCZYVR7uVqAZdgYGr0bl8Q9kFcaUTvl&q=${encodeURI(
    Category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data, "Url");
  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gift;
  // console.log(gift, "gift");
  // setImages(gift);
};
