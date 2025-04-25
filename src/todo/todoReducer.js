const INITIAL_STATE = {
  description: "Ler livro",
  list: [
    {
      _id: 1,
      description: "Ler livro",
      done: true,
    },
    {
      _id: 2,
      description: "Reunião com a equipe",
      done: false,
    },
    {
      _id: 3,
      description: "Consulta médica na terça depois do almoço",
      done: false,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};
