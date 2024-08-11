import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  getOrganizations(): Observable<{ orgId: string, orgName: string }[]> {
    return of([
      { orgId: 'org1', orgName: 'Organization 1' },
      { orgId: 'org2', orgName: 'Organization 2' },
      { orgId: 'org3', orgName: 'Organization 3' },
    ]);
  }

  getDesignations(): Observable<string[]> {
    return of(['Developer', 'Designer', 'Manager']);
  }
}
