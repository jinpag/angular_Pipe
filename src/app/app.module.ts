import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SamaPipe } from "./sama.pipe";
import { CommaPipe } from "./comma.pipe";
import { YenPipe } from "./yen.pipe";
import { MaruOrBlankPipe } from "./maru_or_blank.pipe";
import { AriOrBlankPipe } from "./ari_or_blank.pipe";
import { KysNoPipe } from "./kysno.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SamaPipe,
    CommaPipe,
    YenPipe,
    MaruOrBlankPipe,
    AriOrBlankPipe,
    KysNoPipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
