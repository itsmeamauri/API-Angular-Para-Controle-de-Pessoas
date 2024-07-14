import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfilesListComponent } from './pages/profiles/profiles-list/profiles-list.component';
import { ProfilesCreateUpdateComponent } from './pages/profiles/profiles-create-update/profiles-create-update.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfilesComponent,
    ProfilesListComponent,
    ProfilesCreateUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
