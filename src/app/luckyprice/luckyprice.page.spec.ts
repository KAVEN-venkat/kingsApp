import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuckypricePage } from './luckyprice.page';

describe('LuckypricePage', () => {
  let component: LuckypricePage;
  let fixture: ComponentFixture<LuckypricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckypricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuckypricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
