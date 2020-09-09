import { IMusicForm } from '../../models/music-submit.interface';

export interface IMusicFormState {
  musicForm: IMusicForm;
}

export const initialMusicFormState: IMusicFormState = {
  musicForm: JSON.parse(localStorage.getItem('form-data'))
};

