import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerpricePage } from './customerprice.page';

describe('CustomerpricePage', () => {
  let component: CustomerpricePage;
  let fixture: ComponentFixture<CustomerpricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerpricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerpricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
