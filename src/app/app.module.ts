import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicSubmitComponent } from './components/submit-music/submit-music.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { DropzoneDirective } from './directives/dropzone/dropzone.directive';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ConnectFormDirective } from './directives/connect-form/connectForm.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from './shared/modules/material-module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicSubmitComponent,
    FileUploaderComponent,
    DropzoneDirective,
    ConnectFormDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectCountryModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
