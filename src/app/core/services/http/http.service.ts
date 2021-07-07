import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isAbsoultePath } from '@shared/utils/utils';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private client: HttpClient,
    private environment: EnvironmentService
  ) {}

  get(
    path: string,
    params?: {
      [param: string]: string | number | boolean;
    }
  ): Observable<any> {
    const url = isAbsoultePath(path)
      ? path
      : this.environment.baseApiUrl + path;

    return params ? this.client.get(url, { params }) : this.client.get(url);
  }
}
