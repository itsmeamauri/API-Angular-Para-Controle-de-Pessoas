import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfilesCreateUpdateComponent } from './pages/profiles/profiles-create-update/profiles-create-update.component';
import { ProfilesListComponent } from './pages/profiles/profiles-list/profiles-list.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'profile', component: ProfilesListComponent
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
