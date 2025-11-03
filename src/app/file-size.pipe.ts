import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fileSize",
})
export class FileSizePipe implements PipeTransform {
  /* -- Generated code
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  */

  transform(size: number, extension: string = "MB"): string {
    return "File size is: " + (size / (1024 * 1024)).toFixed(2) + " " + extension;
  }
}
