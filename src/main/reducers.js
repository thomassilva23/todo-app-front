import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: () => (
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
    }
  ),
});

export default rootReducer;
