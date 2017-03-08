

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Page1} from "./page1";
import {IonicModule} from "ionic-angular/index";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: Page1;
  let fixture: ComponentFixture<Page1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ Page1 ],
        imports: [
          IonicModule.forRoot(Page1)
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h3> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/ionic/i,
      '<h1> should say something about "Ionic"');
  });

  it('should set username when view enters', () => {
    comp.ionViewWillEnter(); // simulate view entering by calling function directly
    expect(comp.username).toMatch("Test", 'username should be "Test"')
  });
});
