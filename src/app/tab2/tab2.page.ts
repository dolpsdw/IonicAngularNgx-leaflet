import { Component, ChangeDetectorRef } from "@angular/core";
import { tileLayer, latLng, LatLng, polyline } from "leaflet";
declare let L;
import { AntPath, antPath } from "leaflet-ant-path/dist/leaflet-ant-path.es6";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  options;
  center: LatLng;
  layers: any[];
  test: any;
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
    this.test = antPath([this.center, [41.648346, -4.729851]], {
      use: L.polyline,
      delay: 400,
      dashArray: [10, 20],
      weight: 5,
      color: "#0000FF",
      pulseColor: "#FFFFFF"
    });
    this.layers = [this.test];
    //this.cdRef.markForCheck();
  }
  /* https://codehandbook.org/use-leaflet-in-angular/ -> For leaflet.js Plain Injection and L usage
  https://asymmetrik.com/ngx-leaflet-tutorial-angular-cli/
  https://github.com/Asymmetrik/ngx-leaflet/issues/218
  https://www.javascripttuts.com/using-leaflet-open-street-map-in-an-ionic-application-in-one-go/
  https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
  https://stackoverflow.com/questions/55617065/leaflet-map-doesnt-cover-whole-map-area
  https://github.com/Asymmetrik/ngx-leaflet#getting-a-reference-to-the-map -> for invalidateSize()
  ngZone for changeDetection https://stackoverflow.com/questions/48271492/howto-use-leaflet-in-an-angular-5-app-component
  https://stackoverflow.com/questions/48271492/howto-use-leaflet-in-an-angular-5-app-component -> More L
  */
}
