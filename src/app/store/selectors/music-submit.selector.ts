import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IMusicFormState } from '../state/music-submit.state';

const selectMusicForm = (state: IAppState) => state.musicForm;

export const selectMusicFormData = createSelector(
  selectMusicForm,
  (state: IMusicFormState) => state.musicForm
);

