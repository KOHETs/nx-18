import { TestBed } from '@angular/core/testing';
import { NgComponent } from './ng.component';

describe(NgComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(NgComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(NgComponent);
  });
});
