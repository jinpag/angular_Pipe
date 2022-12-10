import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "Sama"
})
export class SamaPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== "string") {
      return value;
    }
    return value + "様";
  }
}
