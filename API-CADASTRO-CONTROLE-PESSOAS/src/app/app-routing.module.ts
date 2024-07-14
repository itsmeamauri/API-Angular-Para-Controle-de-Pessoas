import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfilesCreateUpdateComponent } from './pages/profiles/profiles-create-update/profiles-create-update.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'profile', component: ProfilesComponent
  },
  {
    path: 'profiles/create', component: ProfilesCreateUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
