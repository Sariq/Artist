import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectMusicFormData } from '../../store/selectors/music-submit.selector';
import { MatDialog } from '@angular/material/dialog';
import { MusicSubmitComponent } from '../../components/submit-music/submit-music.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  musicForm = this._store.pipe(select(selectMusicFormData));
  musicForma;
  constructor(
    private _store: Store<IAppState>,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    //  this._store.dispatch(new GetCharacters());
    this._store.pipe(select(selectMusicFormData)).subscribe((characters) => {
      console.log(characters);
      this.musicForma = characters;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MusicSubmitComponent,{panelClass: 'music-submit-dialog'});
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }
}
