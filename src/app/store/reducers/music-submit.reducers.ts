import { EMusicFormActions } from './../actions/music-submit.actions';
import { MusicFormActions } from '../actions/music-submit.actions';
import { initialMusicFormState, IMusicFormState } from '../state/music-submit.state';

export const musicSubmitReducers = (
  state = initialMusicFormState,
  action : MusicFormActions
): any => {
  switch (action.type) {
    case EMusicFormActions.UPDATE_FORM: {
      let musicForm = { ...state.musicForm, ...action.payload.value }
      return {
        ...state, musicForm
      };
    }
    case EMusicFormActions.UPDATE_FORM_FILES: {
      let musicForm = { ...state.musicForm, files: action.payload.value }
      return {
        ...state, musicForm
      };
    }
    case EMusicFormActions.RESET_FORM: {
      let musicForm = {}
      return {
        ...state, musicForm
      };
    }
    default:
      return state;
  }
};