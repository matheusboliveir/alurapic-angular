import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Directive({
  selector: '[ImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlataformDetectorService) {}
  ngOnInit(): void {
    this.platFormDetector.isPlatformBrowser() &&
    this.element.nativeElement.click();
  }

}
