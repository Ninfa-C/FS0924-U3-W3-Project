const initialState = {
  user: {
    favourites: [],
    language: "Italia",
  },
  default: {
    artists: [
      "Annalisa",
      "Alfa",
      "Creepy Nuts",
      "Pinguini Tattici Nucleari",
      "Beyonce",
      "Billie Eilish",
      "Olivia Rodrigo",
      "Dua Lipa",
      "Maluma",
      "Linkin Park",
    ],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        user: {
          ...state.user,
          favourites: state.user.favourites.concat(action.payload),
        },
      };

    case "REMOVE":
      return {
        ...state,
        user: {
          ...state.user,
          favourites: state.user.favourites.filter((item) => {
            return action.payload !== item;
          }),
        },
      };

    case "LANG_CHANGE":
      return {
        ...state,
        user: {
          ...state.user,
          language: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
