import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { musicSubmitReducers } from './music-submit.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  musicForm: musicSubmitReducers
};
