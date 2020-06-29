import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor( private route: ActivatedRoute) {
   }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    console.log(geo);
    geo = geo.substr(4);
    geo = geo.split(',');
    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng);
  }
  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFjZXRvODcxMTIwIiwiYSI6ImNrYno4cjdiMTA3M2ozMG9lcm1iNnNsOGIifQ.UpXAUZ3icva55_IXhRMcCA';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
      });

    const marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(map);
    // tslint:disable-next-line: only-arrow-functions
    map.on('load', function() {
      map.resize();
    });
    map.addControl(new mapboxgl.NavigationControl());
  }
}
