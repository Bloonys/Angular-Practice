import { TestBed } from '@angular/core/testing';

import { TodosS } from './todos';

describe('Todos', () => {
  let service: TodosS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
