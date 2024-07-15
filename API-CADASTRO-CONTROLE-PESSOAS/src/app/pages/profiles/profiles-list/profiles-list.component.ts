import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent {
constructor(private profileService: ProfileService){}

profiles: any;

ngOnInit(){

  debugger
    console.log('ONINIT')
  this.profileService.buscarTodos().subscribe(result => {
this.profiles = result;
  });
}
}
