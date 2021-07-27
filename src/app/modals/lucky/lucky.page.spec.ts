import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuckyPage } from './lucky.page';

describe('LuckyPage', () => {
  let component: LuckyPage;
  let fixture: ComponentFixture<LuckyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuckyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
