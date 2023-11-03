import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() imagem: string = '';
  @Input() textoAlt: string = '';
  @Input() texto: string = '';


}
