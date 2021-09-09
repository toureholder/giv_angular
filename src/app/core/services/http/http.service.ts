import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isAbsoulteUri } from '@shared/utils/utils';
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
    const url = this.resolveUrl(path);
    return params ? this.client.get(url, { params }) : this.client.get(url);
  }

  post(path: string, body: { [key: string]: any }): Observable<any> {
    const url = this.resolveUrl(path);
    return this.client.post(url, body);
  }

  private resolveUrl(path: string): string {
    return isAbsoulteUri(path) ? path : this.environment.baseApiUrl + path;
  }
}
