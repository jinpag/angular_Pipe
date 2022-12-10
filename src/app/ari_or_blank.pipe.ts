import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "AriOrBlank"
})
export class AriOrBlankPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== "boolean") {
      return value;
    }
    if (value) {
      return "有";
    } else {
      return "";
    }
  }
}
