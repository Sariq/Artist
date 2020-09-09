import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { selectMusicFormData } from '../../store/selectors/music-submit.selector';
import { EMusicFormActions } from '../../store/actions/music-submit.actions';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
//THIRD PARTY THAT WE CAN USE:import { Country } from '@angular-material-extensions/select-country';
import { skip } from 'rxjs/operators';

@Component({
    selector: 'submit-music',
    templateUrl: './submit-music.component.html',
    styleUrls: ['./submit-music.component.scss']
})
export class MusicSubmitComponent implements OnInit {
    musicForm: any;
    formSubmitted = false;
    validFiles: boolean = false;
    uploadedFiles: File[] = null;
    formSubmitSuccess: boolean = false;
    filesFormat: string[] = ["audio/wav","audio/mpeg"];
    //we can get the countries array from a json, or to use a third party component
    countryOptions: string[] = ['United States', 'Israel', 'Iran', 'Island', 'South Africe'];
    filteredOptions: Observable<string[]>;

    //We can get this data from const file
    tooltipData = {
        bio: "Let us know who you are and where you’re coming from, what inspires you, who you have worked with and what you think is interesting about your work in the world of music and film, etc.  How should we present you as an artist?",
        portfolio: "Help us get to know you by sending us links to your website, Souncloud, Facebook page and etc."
    }

    constructor(private _store: Store<IAppState>) { };

    ngOnInit(): void {
        this.musicForm = new FormGroup({
            fullName: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            country: new FormControl(null, Validators.required),
            bio: new FormControl(null, Validators.required),
            whatDoYouDo: new FormControl(null, Validators.required),
            portfolioLinks: new FormControl(null, Validators.required),
            isRegPro: new FormControl("", Validators.required),
            nameOfPro: new FormControl(null, Validators.required),
            fullRights: new FormControl(false),
            anotherArtist: new FormControl(false),
            clearOfUse: new FormControl(false, Validators.requiredTrue),
        });
        //we can move the country list to be a reusable component, then we can move the file func
        this.filteredOptions = this.f.country.valueChanges.pipe(
            startWith(''),
            map((value: string) => this._filter(value))
        );
        this._store.pipe(skip(1), select(selectMusicFormData)).subscribe(() => {
            localStorage.setItem('form-data', JSON.stringify(this.musicForm.value));
        });
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.countryOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

    get f() { return this.musicForm.controls; }

    submit() {
        this.formSubmitted = true;
        if (this.musicForm.valid && this.validFiles) {
            this.formSubmitSuccess = true;
            localStorage.setItem('form-data', null);
            this._store.dispatch({
                type: EMusicFormActions.RESET_FORM
            });
        }
    }

    onFilesUpdate(e) {
        this.validFiles = e.valid;
        this.uploadedFiles = [...e.files];
        this._store.dispatch({
            type: EMusicFormActions.UPDATE_FORM_FILES,
            payload: {
                value: this.uploadedFiles,
                path: "files",
            }
        });
    }
    isRegProChange(e) {
        if (e.value === "1") {
            this.musicForm.controls["nameOfPro"].setValidators([Validators.required]);
        } else {
            this.musicForm.controls["nameOfPro"].clearValidators();
            this.musicForm.controls["nameOfPro"].updateValueAndValidity();
        }
    }
}
