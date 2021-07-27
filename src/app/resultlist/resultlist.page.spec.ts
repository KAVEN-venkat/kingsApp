import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultlistPage } from './resultlist.page';

describe('ResultlistPage', () => {
  let component: ResultlistPage;
  let fixture: ComponentFixture<ResultlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
