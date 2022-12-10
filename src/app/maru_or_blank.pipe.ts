import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "MaruOrBlank"
})
export class MaruOrBlankPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== "boolean") {
      return value;
    }
    if (value) {
      return "○";
    } else {
      return "";
    }
  }
}
