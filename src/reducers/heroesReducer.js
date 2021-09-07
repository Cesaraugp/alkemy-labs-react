import heroesService from "../services/database";

export const addHero = (heroe) => {
  return {
    type: "ADD_HERO",
    data: {
      heroe,
    },
  };
};

export const removeHero = (id) => {
  return {
    type: "REMOVE_HERO",
    data: {
      id,
    },
  };
};

const initializeHeroes = (userId) => {
  return async (dispatch) => {
    const heroes = await heroesService.getUserHeroes(userId);
    return {
      type: "INITIALIZE_HEROES",
      data: {
        heroes,
      },
    };
  };
};

const heroReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HERO":
      const { heroe: newHero } = action.data;
      return [...state, newHero];
    case "REMOVE_HERO":
      const { id: heroIdToRemove } = action.data;
      console.log(heroIdToRemove);
      return [...state.filter((heroe) => heroe.id !== heroIdToRemove)];
    case "INITIALIZE_HEROES":
      const { initialHeroes: heroes } = action.data;
      return { heroes: action.data.heroes };
    default:
      return state;
  }
};

export default heroReducer;
