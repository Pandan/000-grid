import {Component, ViewChild, ElementRef, Input} from "@angular/core";
import {DomSanitizationService} from "@angular/platform-browser";
import "gsap";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'perspective-parallax',
  template: `
    <div class="wrapper"
      (mousemove)="onBoxMouseMove($event)"
      (mouseover)="onBoxMouseOver($event)"
      (mouseout)="onBoxMouseOut($event)"
      (click)="onBoxMouseClick($event)">
      <div class="box"  
        [style.transform]="boxTransform">
        
        <div class="layer border"
          [style.borderColor]="borderColor">  
        </div>
        <div class="layer a" 
          [style.background-image]="'url(../../assets/perspective-parallax/'+assetsPrefix+'-3.png)'"
          [style.background-position]="layerAXpos + 'px 0px'">
        </div>
        <div class="layer b" 
          [style.background-image]="'url(../../assets/perspective-parallax/'+assetsPrefix+'-2.png)'"
          [style.background-position]="layerBXpos + 'px 0px'">
        </div>
        <div class="layer c" 
          [style.background-image]="'url(../../assets/perspective-parallax/'+assetsPrefix+'-1.png)'"
          [style.background-position]="layerCXpos + 'px 0px'">
        </div>
        <div class="layer d" 
          [style.background-image]="'url(../../assets/perspective-parallax/'+assetsPrefix+'-0.png)'"
          [style.background-position]="layerDXpos + 'px 0px'">
        </div>
        
      </div>
    </div>`,
  styleUrls: ['perspective.parallax.component.scss']
})

export class PerspectiveParallaxComponent {

  @Input('borderColor') borderColor;

  boxTransform:any;
  transform = {tx:0,ty:0,d:0}

  assetsPrefix:string = "bg"

  layerAXpos:number = 0;
  layerBXpos:number = 0;
  layerCXpos:number = 0;
  layerDXpos:number = 0;

  isRunningAnim:boolean = true;
  requestAnimationFrameId: number;

  constructor(private sanitizer: DomSanitizationService) {
  }

  ngOnInit(){
    this.animationFrame();
  }

  ngOnDestroy(){
    TweenMax.killTweensOf(this);
    this.isRunningAnim = false;
    cancelAnimationFrame(this.requestAnimationFrameId);
  }

  onBoxMouseMove(event: MouseEvent) {
    TweenMax.killTweensOf(this);
    this.calcPerspective(event.pageX,event.pageY);
  }

  onBoxMouseOver(event: MouseEvent) {
  }

  onBoxMouseOut(event: MouseEvent) {
    this.resetBox();
  }

  onBoxMouseClick(event: MouseEvent){
    console.log("onBoxMouseClick");

    this.assetsPrefix = (this.assetsPrefix == "bg") ? "bg2" : "bg";
  }

  calcPerspective(x:number,y:number){
    var cx = Math.ceil(window.innerWidth / 2.0);
    var cy = Math.ceil(window.innerHeight / 2.0);
    var dx = x - cx;
    var dy = y - cy;

    var tiltX = - (dy / cy);
    var tiltY = (dx / cx);
    var radius = Math.sqrt(Math.pow(tiltX,2) + Math.pow(tiltY,2));
    var deg = (radius * 80);

    TweenMax.to(this.transform, 0.2, {tx:tiltX, ty:tiltY, d:deg, onUpdate:this.updateBoxTransform, onUpdateScope:this, ease:Cubic.easeOut});
  }

  updateBoxTransform(){
    this.boxTransform = this.sanitizer.bypassSecurityTrustStyle(
      'rotate3d(' + this.transform.tx + ', ' + this.transform.ty + ', 0, ' + this.transform.d + 'deg)'
    );
  }

  resetBox(){
    TweenMax.to(this.transform, 0.4, {tx:0, ty:0, d:0, onUpdate:this.updateBoxTransform, onUpdateScope:this, ease:Back.easeOut})
  }
s
  animationFrame() {
    this.layerAXpos -= 1;
    this.layerBXpos -= 0.7;
    this.layerCXpos -= 0.3;
    if (this.isRunningAnim) {
      this.requestAnimationFrameId = requestAnimationFrame(() => this.animationFrame());
    }
  }
}

