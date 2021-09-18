import { useDispatch } from "react-redux";
import { addHero, removeHero } from "../reducers/heroesReducer";

const useHeroActions = (hero) => {
  const dispatch = useDispatch();

  const handleNewHero = () => {
    dispatch(addHero(hero));
  };

  const handleRemoveHero = () => {
    dispatch(removeHero(hero.id));
  };

  return {
    handleNewHero,
    handleRemoveHero,
  };
};

export default useHeroActions;
