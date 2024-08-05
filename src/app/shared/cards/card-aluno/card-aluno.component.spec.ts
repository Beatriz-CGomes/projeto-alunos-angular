import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlunoComponent } from './card-aluno.component';

describe('CardAlunoComponent', () => {
  let component: CardAlunoComponent;
  let fixture: ComponentFixture<CardAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlunoComponent]
    });
    fixture = TestBed.createComponent(CardAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
