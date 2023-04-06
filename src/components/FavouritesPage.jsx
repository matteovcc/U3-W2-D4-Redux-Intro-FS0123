import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <>
      <Container className="my-5">
        <h1>I tuoi preferiti</h1>
        <ol>
          {favourites.map((favorito, index) => (
            <>
              <li className="" key={`favorito-${index}`}>
                <strong>{favorito.company_name}</strong>
              </li>
              <span className="ms-auto">Job Application: {favorito.title}</span>
              <p>Location: {favorito.candidate_required_location}</p>
            </>
          ))}
        </ol>
      </Container>
    </>
  );
};

export default FavouritesPage;
