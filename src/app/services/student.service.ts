import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private http = inject(HttpClient);

  SaveDetails(info: any) {
    return this.http.post("https://localhost:4200", info);
  }
}
