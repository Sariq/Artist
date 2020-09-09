import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { EMusicFormActions } from '../../store/actions/music-submit.actions';
import { take } from 'rxjs/operators';

@Directive({
    selector: '[connectForm]'
})
export class ConnectFormDirective {
    @Input('connectForm') path: string;
    formChange: any;

    constructor(private formGroupDirective: FormGroupDirective,private store: Store<IAppState>) { }
    
    ngOnInit() {
        //Update the form value based on the state
        this.store.select(state => state.musicForm[this.path]).pipe(take(1)).subscribe(formValue => {
            this.formGroupDirective.form.patchValue(formValue);
        });
        this.formChange = this.formGroupDirective.form.valueChanges
            .subscribe(value => {
                this.store.dispatch({
                    type: EMusicFormActions.UPDATE_FORM,
                    payload: {
                        value,
                        path: this.path,
                    }
                });
            });
    }

    ngOnDestroy() {
        this.formChange.unsubscribe();
    }

}