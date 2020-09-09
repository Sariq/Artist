import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MusicSubmitComponent } from '../../components/submit-music/submit-music.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(MusicSubmitComponent, { panelClass: 'music-submit-dialog' });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
