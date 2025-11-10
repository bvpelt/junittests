import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 jsonUrl = "https://jsonplaceholder.typicode.com/";

  constructor(public http: HttpClient) {}

  public getListOfData() {
    return this.http.get<PostModel[]>(this.jsonUrl + "posts");
  }

  public postListOfData(post: PostModel) {
    const headers = new HttpHeaders();

    return this.http.post(this.jsonUrl + "posts", post, { headers });
  }
}
