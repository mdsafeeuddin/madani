import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminLayoutService {
  private collapsedSubject = new BehaviorSubject<boolean>(true);
  collapsed$ = this.collapsedSubject.asObservable();

  toggleSidebar() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  closeSidebar() {
    this.collapsedSubject.next(true);
  }
}
