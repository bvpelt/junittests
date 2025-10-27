import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  public http = inject(HttpClient);

  //constructor(public http: HttpClient) {}

  private apiUrl = '/api/students';

  SaveDetails(info: any) {
    console.log("Service SaveDetails called  with:", JSON.stringify(info));
    return this.http.post(this.apiUrl, info);
  }
}
