import { Component, ChangeDetectorRef } from "@angular/core";
import { tileLayer, latLng, LatLng } from "leaflet";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  options;
  center: LatLng;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.center = latLng(Number("41.659165"), Number("-4.730977"));
    this.options = {
      layers: [
        tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "..."
        })
      ],
      zoom: 15,
      center: this.center
    };
    this.cdRef.markForCheck();
  }
  /*
  https://asymmetrik.com/ngx-leaflet-tutorial-angular-cli/
  https://github.com/Asymmetrik/ngx-leaflet/issues/218
  https://www.javascripttuts.com/using-leaflet-open-street-map-in-an-ionic-application-in-one-go/
  https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
  https://stackoverflow.com/questions/55617065/leaflet-map-doesnt-cover-whole-map-area
  https://github.com/Asymmetrik/ngx-leaflet#getting-a-reference-to-the-map -> for invalidateSize()
  ngZone for changeDetection https://stackoverflow.com/questions/48271492/howto-use-leaflet-in-an-angular-5-app-component
  */
}
