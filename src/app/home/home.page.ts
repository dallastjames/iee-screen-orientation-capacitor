import { Component } from "@angular/core";
import { ScreenOrientation } from '@ionic-enterprise/screen-orientation/ngx';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  constructor(private screen: ScreenOrientation) {}

  public lock(style: string) {
      this.screen.lock(style);
  }

  public unlock() {
      this.screen.unlock();
  }
}
