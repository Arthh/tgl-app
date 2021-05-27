import { ActionTypes, GamesProps } from './types';

export function loadGames () {
  return {
    type: ActionTypes.loadGames
  }
}

export function loadGamesSucess (game: GamesProps) {
  return {
    type: ActionTypes.loadGamesSuccess,
    payload: {
      game,
    }
  }
}

export function loadGameFailure (error: boolean) {
  return {
    type: ActionTypes.loadGamesFailure,
    payload: {
      error
    }
  }
}