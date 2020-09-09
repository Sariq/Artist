import { Action } from '@ngrx/store';
import { IMusicForm } from '../../models/music-submit.interface';

export enum EMusicFormActions {
  UPDATE_FORM = '[Music_Form] UPDATE_FORM',
  UPDATE_FORM_FILES = '[Music_Form] UPDATE_FORM_FILES',
  RESET_FORM = '[Music_Form] RESET_FORM'
}

export class UpdateMusicForm implements Action {
  public readonly type = EMusicFormActions.UPDATE_FORM;
  constructor(public payload: {
    path: 'musicForm',
    value: IMusicForm
  }) { }
}
export class UpdateMusicFormFiles implements Action {
  public readonly type = EMusicFormActions.UPDATE_FORM_FILES;
  constructor(public payload: {
    path: 'musicForm',
    value: File[]
  }) { }
}
export class ResetForm implements Action {
  public readonly type = EMusicFormActions.RESET_FORM;
}



export type MusicFormActions = UpdateMusicForm | UpdateMusicFormFiles | ResetForm;
