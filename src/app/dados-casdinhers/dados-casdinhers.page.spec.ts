import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosCasdinhersPage } from './dados-casdinhers.page';

describe('DadosCasdinhersPage', () => {
  let component: DadosCasdinhersPage;
  let fixture: ComponentFixture<DadosCasdinhersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCasdinhersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosCasdinhersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
