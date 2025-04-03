import { Component, AfterViewInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  private scripts: string[] = [
    '../../../assets/assets/lib/wow/wow.min.js',
    '../../../assets/assets/lib/easing/easing.min.js',
    '../../../assets/assets/lib/waypoints/waypoints.min.js',
    '../../../assets/assets/lib/counterup/counterup.min.js',
    '../../../assets/assets/lib/owlcarousel/owl.carousel.min.js',
    '../../../assets/assets/js/main.js'
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scripts.forEach(script => this.loadScript(script));
    }
  }

  private loadScript(scriptUrl: string) {
    const script = this.renderer.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
}
