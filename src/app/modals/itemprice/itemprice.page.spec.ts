import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItempricePage } from './itemprice.page';

describe('ItempricePage', () => {
  let component: ItempricePage;
  let fixture: ComponentFixture<ItempricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItempricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItempricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
