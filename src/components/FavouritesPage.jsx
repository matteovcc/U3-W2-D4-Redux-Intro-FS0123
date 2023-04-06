import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <>
      <Container className="mx-auto mt-3 text-danger">
        <h1>I tuoi preferiti</h1>
        <ol>
          {favourites.map((favorito, index) => (
            <li key={`favorito-${index}`}>{favorito.company_name}</li>
          ))}
        </ol>
      </Container>
    </>
  );
};

export default FavouritesPage;
