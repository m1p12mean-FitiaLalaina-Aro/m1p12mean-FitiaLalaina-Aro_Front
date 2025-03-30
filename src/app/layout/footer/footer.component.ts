import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.loadScript('../../../assets/assets/lib/wow/wow.min.js');
    this.loadScript('../../../assets/assets/lib/easing/easing.min.js');
    this.loadScript('../../../assets/assets/lib/waypoints/waypoints.min.js');
    this.loadScript('../../../assets/assets/lib/counterup/counterup.min.js');
    this.loadScript('../../../assets/assets/lib/owlcarousel/owl.carousel.min.js');

    this.loadScript('../../../assets/assets/js/main.js');
  }

  loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }
}
