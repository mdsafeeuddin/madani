import { Observable } from 'rxjs';

export interface CrudService<T> {

  search(params?: any): Observable<T[]>;

  create(data: T): Observable<any>;

  update(id: string, data: T): Observable<any>;

  delete(id: string): Observable<any>;

  getById(id: string): Observable<T>;

}