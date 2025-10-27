import { TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { StudentService } from "./student.service";

describe("StudentService", () => {
  let service: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no unmatched requests are outstanding
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should post student details", () => {
    const mockData = {
      sumVal: 10,
      name: "Test Student",
    };
    const mockResponse = { success: true, id: 1 };

    service.SaveDetails(mockData).subscribe({
      next: (response) => {
        expect(response).toEqual(mockResponse);
      },
    });

    // Expect a POST request to the API
    const req = httpMock.expectOne("/api/students");
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(mockData);

    // Respond with mock data
    req.flush(mockResponse);
  });

  it("should handle errors when saving details", () => {
    const mockData = {
      sumVal: 10,
      name: "Test Student",
    };
    const mockError = { status: 500, statusText: "Server Error" };

    service.SaveDetails(mockData).subscribe({
      next: () => fail("Should have failed with 500 error"),
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });

    const req = httpMock.expectOne("/api/students");
    req.flush("Server Error", mockError);
  });
});
