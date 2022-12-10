import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "Yen"
})
export class YenPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== "number") {
      return value;
    }
    return value.toLocaleString("ja-JP") + "円";
  }
}
