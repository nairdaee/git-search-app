import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private repoColor:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('#E0FFFF');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
}
 private highlight(color:String){
   this.repoColor.nativeElement.style.backgroundColor= color;

 }
}

