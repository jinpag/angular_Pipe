import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "Comma"
})
export class CommaPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== "number") {
      return value;
    }
    return value.toLocaleString("ja-JP");
  }
}
