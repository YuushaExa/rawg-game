import * as actionTypes from "../constants/ActionTypes";
import { GameType } from "../types/GameType";

interface GamesLoaded {
  nextPage: number | null;
  games: GameType[];
}
interface GamesContainer {
  [genre: string]: GamesLoaded;
}
interface GamePayload {
  genre: string;
  nextPage: number | null;
  gamesLoaded: GameType[];
}
interface GamesState {
  loading: boolean;
  games: GamesContainer;
}

const initialState: GamesState = { loading: false, games: {} };

const gamesReducer = (
  state = initialState,
  action: { type: string; payload?: GamePayload }
) => {
  switch (action.type) {
    case actionTypes.FETCH_GAMES:
      return { ...state, loading: true };
    case actionTypes.FETCH_GAMES_SUCCESS:
      const updatedGames = [
        ...state.games[action.payload!.genre].games,
        action.payload!.gamesLoaded,
      ];
      return {
        ...state,
        loading: true,
        games: {
          ...state.games,
          [action.payload!.genre]: {
            nextPage: action.payload!.nextPage,
            games: updatedGames,
          },
        },
      };
    default:
      return state;
  }
};
export default gamesReducer;
