import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesCreateUpdateComponent } from './profiles-create-update.component';

describe('ProfilesCreateUpdateComponent', () => {
  let component: ProfilesCreateUpdateComponent;
  let fixture: ComponentFixture<ProfilesCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilesCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(ProfilesCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
