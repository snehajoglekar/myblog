import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';  //jack
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

// import {AngularFireModule} from '@angular/fire';
// import {AngularDatabaseModule} from '@angular/fire/Database';

// import { environment } from '../environments/environment';
// import {AngylarFirestoreModule} from '@angular/fire/firestore;'

// import {CrudService} from './service/crud.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFirestoreModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
