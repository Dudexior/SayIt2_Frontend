import { Component, OnInit, Input, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { BackgroundShape } from 'src/app/models';

@Component({
  selector: 'app-backgorund-element',
  templateUrl: './backgorund-element.component.html',
  styleUrls: ['./backgorund-element.component.scss']
})
export class BackgorundElementComponent implements AfterViewInit {

  @Input() shape: BackgroundShape;
  @Input() index: number;

  colorsDictionary: { [color: string]: string; } = {
    purple: '#3F51B5',
    pink: '#F8A0FC',
    green: '#72CC79'
  };


  constructor() { }

  ngAfterViewInit() {
    const shapeSVG = document.getElementById(`elementSVG-${this.index}`);
    const shapePath = shapeSVG.firstChild;

    this._assignSVGProperties(shapeSVG, this.shape);
    this._assignPathProperties(shapePath, this.shape);
  }

  private _assignSVGProperties(elementReference: HTMLElement, propertiesObj: BackgroundShape) {
    elementReference.style.setProperty('--rotate', propertiesObj.rotate.toString() + 'deg');
    elementReference.style.setProperty('--positionY', propertiesObj.positionPercentageY.toString() + '%');
    elementReference.style.setProperty('--positionX', propertiesObj.positionPercentageX.toString() + '%');
  }

  private _assignPathProperties(elementReference: ChildNode, propertiesObj: BackgroundShape) {
    // tslint:disable-next-line:no-string-literal
    elementReference['style'].setProperty('--color', this.colorsDictionary[propertiesObj.color]);
  }

}
