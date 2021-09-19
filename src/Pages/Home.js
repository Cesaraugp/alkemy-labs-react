import HeroGrid from "../components/Hero/HeroGrid/HeroGrid";
import HeroCard from "../components/Hero/HeroCard/HeroCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Section from "../components/Section/Section";
import { CardBody, Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import HeroModal from "../components/Hero/HeroModal/HeroModal";
import { useState } from "react";
import HeroList from "../components/Hero/HeroList/HeroList";
import HeroTeamStats from "../components/Hero/HeroTeamStats/HeroTeamStats";

export default function Home() {
  const searchState = useSelector((state) => state.search);
  const heroesState = useSelector((state) => state.heroes);

  const searchCols = { xs: "12", sm: "4", lg: "3", xl: "2" };
  const teamCols = { xs: "12", sm: "4", lg: "3", xl: "3" };
  const [hero, setHero] = useState(null);

  return (
    <>
      {hero && <HeroModal hero={hero} />}
      <Section color="warning" name="Equipo" roundedTop={true} isOpen={true}>
        <Row className="m-auto">
          <Col xs="12" sm="6" className="text-center p-3">
            <h1>Heroes! 👊</h1>
            <HeroGrid
              isList={true}
              heroes={heroesState}
              cols={teamCols}
              setHero={setHero}
            >
              <HeroList />
            </HeroGrid>
          </Col>
          <Col xs="12" sm="6" className="text-center p-3">
            <Row className=" justify-content-center">
              <h1>Estadísticas 📊</h1>
              <Row className="bg-light m-auto">
                {heroesState.length > 0 && <HeroTeamStats />}
              </Row>
            </Row>
          </Col>
        </Row>
      </Section>
      <Section name="Buscador" color="purple">
        <SearchBar />

        <HeroGrid
          {...searchState}
          heroes={
            searchState.heroes
              ? searchState.heroes.filter((el) => !heroesState.includes(el))
              : []
          }
          cols={searchCols}
          scrollable={true}
          setHero={setHero}
        >
          <HeroCard />
        </HeroGrid>
      </Section>
    </>
  );
}
