import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditluckyPage } from './editlucky.page';

describe('EditluckyPage', () => {
  let component: EditluckyPage;
  let fixture: ComponentFixture<EditluckyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditluckyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditluckyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
