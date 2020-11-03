import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AuthBasicCredentials {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  private credentials: AuthBasicCredentials;
  private apiPath: string;

  constructor(private http: HttpClient) {
    this.credentials = {
      user : "fablabapp",
      password : "Fx3KEFES1dP#bD^vy(iIQRNv"
    }
    this.apiPath = "https://www.fablabwapi.be";
  }

  request(url: string) {
    const base64 = btoa(`${this.credentials.user}:${this.credentials.password}`);

    return this.http.get(`${this.apiPath}/${url}`,{
      headers: { 
        Authorization : `Basic ${base64}`,
        'Accept' : 'application/json'
      },
      responseType : "json"
    });
  }
}
