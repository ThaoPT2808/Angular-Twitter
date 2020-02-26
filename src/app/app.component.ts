import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TWEETS-FRONTEND';
  private iconMap = [
    { name: 'search', path: 'assets/icons/search.svg' },
  ];
  constructor(iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    this.iconMap.forEach(pair => {
      iconRegistry.addSvgIcon(
        pair.name,
        sanitizer.bypassSecurityTrustResourceUrl(pair.path));
    })
  }
}
