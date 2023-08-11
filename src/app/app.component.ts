import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ShapeStyleModel, DiagramComponent, DiagramTools, Diagram, ConnectorModel, FlowShapeModel,
         TextStyleModel, PointPortModel} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('diagram') public diagramObj?: DiagramComponent;
  public basicStyle: ShapeStyleModel = {
    fill: '#37909A',
    strokeColor: '#37909A',
    strokeWidth: 3,
  };

  public terminator: FlowShapeModel = { type: 'Flow', shape: 'Terminator' };
  public process: FlowShapeModel = { type: 'Flow', shape: 'Process' };
  public decision: FlowShapeModel = { type: 'Flow', shape: 'Decision' };

  public connAnnotStyle: TextStyleModel = { fill: 'white' };

  public segments: object = [
    // { direction: 'Right', length: 100 }, To render Orthogonal segment, set type: 'Orthogonal' to the appropriare node
    {
      type: 'Bezier',
      // First control point: an absolute position from the page origin
      point1: {
        x: 500,
        y: 300,
      },
      // Second control point: an absolute position from the page origin
      point2: {
        x: 500,
        y: 200,
      },
    },
  ];

  public connStyle: TextStyleModel = { fill: 'White'};

  public ports: PointPortModel[] = [
    {
      id: 'Port1',
      offset: { x: 1, y: 0.5 },
    },
  ];

  //   public bezierSegments: BezierSegmentModel = [{
  //     type: 'Bezier',
  //     // First control point: an absolute position from the page origin
  //     point1: {
  //         x: 100,
  //         y: 100
  //     },
  //     // Second control point: an absolute position from the page origin
  //     point2: {
  //         x: 200,
  //         y: 200
  //     }
  // }
  //];

  public decorator = {
    shape: 'Diamond',
    style: { fill: 'Orange', strokeColor: 'Blue', strokeWidth: 2 },
  };
  public addConnector() {
    let connector: ConnectorModel = {
      id: 'noconnector',
      sourceID: 'decision',
      targetID: 'process',
      segments: [{ type: 'Orthogonal', direction: 'Top', length: 120 }],
    };
    this.diagramObj?.addConnector(connector);
  }

  public drawConnector() {
    let connectors = {
      id: 'connector2',
      type: 'Straight',
    } as any as ConnectorModel;
    (this.diagramObj as Diagram).tool = DiagramTools.DrawOnce;
    (this.diagramObj as Diagram).drawingObject = connectors;
    this.diagramObj?.dataBind();
  }

  public editConnector() {
    (this.diagramObj as Diagram).connectors[0].style = {
      strokeColor: 'Orange',
      strokeWidth: 3,
    };
  }

  public removeConnector() {
    this.diagramObj?.remove((this.diagramObj as Diagram).connectors[0]);
  }
}