import { TestBed } from "@angular/core/testing";

import { StudentService } from "./student.service";
import {
  HttpClient,
  HttpErrorResponse,
  provideHttpClient,
} from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { PostModel } from "./post.model";

describe("StudentService part38", () => {
  let service: StudentService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(StudentService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no unmatched requests are outstanding
    httpController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("Http get request", () => {
    // 1. Define your mock data
    const testpost: PostModel[] = [
      { userId: 1, id: 1, title: "title 1", body: "body1" },
      { userId: 1, id: 2, title: "title 2", body: "body2" },
    ];

    // 2. Call the service method.
    // The 'subscribe' block won't run until we flush the request.
    service.getListOfData().subscribe({
      next: (posts) => {
        // 5. This is where the test assertions run.
        expect(posts).toBeTruthy();
        expect(posts.length).toBe(2);
        // Use toEqual for deep equality checks (corrects your 'toBe' issue)
        expect(posts).toEqual(testpost);
      },
      // Add a fail handler in case the service errors (it shouldn't in a mock)
      error: () => {
        fail("The getListOfData service call failed unexpectedly");
      },
    });

    // 3. Expect one request to a specific URL
    const req = httpController.expectOne(service.jsonUrl + "posts");
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual("json");

    // 4. Verify that the request is a GET
    expect(req.request.method).toBe("GET");

    // 5. 'Flush' the request, sending the mock data.
    // This triggers the 'subscribe' block (step 2) to execute.
    req.flush(testpost);

    httpController.verify();
  });

  it("Http post request", () => {
    // 1. Define your mock data
    const testpost: PostModel = {
      userId: 1,
      id: 1,
      title: "title 1",
      body: "body1",
    };

    // 2. Call the service method.
    // The 'subscribe' block won't run until we flush the request.
    service.postListOfData(testpost).subscribe({
      next: (posts) => {
        // 5. This is where the test assertions run.
        expect(posts).toBeTruthy();
        // Use toEqual for deep equality checks (corrects your 'toBe' issue)
        expect(posts).toEqual(testpost);
      },
      // Add a fail handler in case the service errors (it shouldn't in a mock)
      error: () => {
        fail("The getListOfData service call failed unexpectedly");
      },
    });

    // 3. Expect one request to a specific URL
    const req = httpController.expectOne(service.jsonUrl + "posts");
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual("json");

    // 4. Verify that the request is a POST
    expect(req.request.method).toBe("POST");

    // 5. 'Flush' the request, sending the mock data.
    // This triggers the 'subscribe' block (step 2) to execute.
    req.flush(testpost);

    httpController.verify();
  });

  it("Http 404", () => {
    // 1. Define your mock data
    const errorMessage = "mock 404 error occured";

    // 2. Call the service method.
    // The 'subscribe' block won't run until we flush the request.
    service.getListOfData().subscribe({
      next: (post) => {
        fail("failing with 404 error");
      },
      error: (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      },
    });

    // 3. Expect one request to a specific URL
    const req = httpController.expectOne(service.jsonUrl + "posts");

    // 4. Verify that the request has an error
    expect(req.error).toBeTruthy();
    expect(req.error.name).toEqual('error');

    // 5. 'Flush' the request, sending the mock data.
    // This triggers the 'subscribe' block (step 2) to execute.
    req.flush(errorMessage, { status: 404, statusText: "not Found" });

    httpController.verify();
  });
});
