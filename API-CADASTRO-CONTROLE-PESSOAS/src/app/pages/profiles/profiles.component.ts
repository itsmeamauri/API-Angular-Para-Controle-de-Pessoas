import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
profiles: any;

constructor(private profileService: ProfileService){}


ngOnInit(){

    console.log('ONINIT')
  this.profileService.buscarTodos().subscribe(result => {
this.profiles = result;
  });
}

}
