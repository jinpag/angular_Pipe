import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "KysNo"
})
export class KysNoPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== "string" || value.length !== 9) {
      return value;
    }
    return value.slice(0, 7) + "-" + value.slice(7, 9);
  }
}
