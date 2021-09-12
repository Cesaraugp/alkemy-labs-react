import HeroGrid from "../components/Hero/HeroGrid/HeroGrid";
import SearchBar from "../components/SearchBar/SearchBar";
import Section from "../components/Section/Section";
import { CardBody, Col, Row } from "reactstrap";
import { Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

export default function Home() {
  const searchState = useSelector((state) => state.search);
  const heroesState = useSelector((state) => state.heroes);

  const searchCols = { xs: "12", sm: "4", lg: "3", xl: "2" };
  //GRID DE HEROES YA SELECCIONADOS
  //GRID DE HEROES YA SELECCIONADOS

  return (
    <>
      <Section color="warning" name="Equipo" roundedTop={true} isOpen={true}>
        <Row className="m-auto">
          <Col xs="6" className="text-center p-3">
            <h1>Heroes! 👊</h1>
            <Search />
            <HeroGrid heroes={heroesState} />
          </Col>
          <Col xs="6" className="text-center p-3">
            <h1>Estadísticas 📊</h1>
            <CardBody className="vh-100 bg-light">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Col>
        </Row>
      </Section>
      <Section name="Buscador" color="purple">
        <SearchBar />

        <HeroGrid {...searchState} cols={searchCols} scrollable={true} />
      </Section>
    </>
  );
}
