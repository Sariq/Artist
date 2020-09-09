
import { IMusicFormState, initialMusicFormState } from './music-submit.state';


export interface IAppState {
  musicForm: IMusicFormState;
}

export const initialAppState: IAppState = {
  musicForm: initialMusicFormState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
