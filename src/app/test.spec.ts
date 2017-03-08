import { async, TestBed } from '@angular/core/testing';
import { MyApp } from './app.component';
import { IonicModule } from 'ionic-angular';

describe('Meaningful Test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ MyApp ],
        imports: [
          IonicModule.forRoot(MyApp)
        ]
      })
      .compileComponents();
  }));

  it('1 + 1 => 2', () => {
    expect(1 + 1).toBe(2);
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(MyApp);
    expect(fixture.componentInstance instanceof MyApp).toBe(true, 'should create MyApp');
  });

});