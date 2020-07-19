import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getFotos(){
    return this.httpClient.get(`https://picsum.photos/v2/list?page=2&limit=8`);
  }
}
