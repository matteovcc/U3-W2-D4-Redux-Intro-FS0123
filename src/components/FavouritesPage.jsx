import { useSelector } from "react-redux";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <>
      <h1>I tuoi preferiti</h1>
      <ul>
        {favourites.content.map((favorito, index) => (
          <li key={index}>{favorito.content}</li>
        ))}
      </ul>
    </>
  );
};

export default FavouritesPage;
