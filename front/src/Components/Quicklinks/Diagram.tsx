
import React, { useEffect } from 'react';
//import { DataManager, SnapConstraints, DataBinding, DiagramComponent } from '@syncfusion/ej2-react-diagrams';
//import '@syncfusion/ej2-react-diagrams/styles/material.css'; // Import diagram CSS


const Diagram: React.FC = () => {
//   useEffect(() => {
//     const items = new DataManager(data);

//     const doBinding: DataBinding = (node, data) => {
//       node.annotations = [{ content: data.role }];
//       node.style = { fill: data.color };
//     };

//     const nodeDefaults = (node: any) => {
//       node.annotations[0].style.color = 'white';
//       node.width = 120;
//       node.expandIcon = { shape: 'Minus' };
//       node.collapseIcon = { shape: 'Plus' };
//       return node;
//     };

//     const connectorDefaults = (connector: any) => {
//       connector.type = 'Orthogonal';
//       connector.targetDecorator = { shape: 'None' };
//       return connector;
//     };

//     const diagram = (
//       <DiagramComponent
//         width="1000px"
//         height="600px"
//         dataSourceSettings={{
//           id: 'id',
//           parentId: 'manager',
//           dataManager: items,
//           doBinding: doBinding,
//         }}
//         layout={{ type: 'OrganizationalChart' }}
//         getNodeDefaults={nodeDefaults}
//         getConnectorDefaults={connectorDefaults}
//         snapSettings={{ constraints: SnapConstraints.None }}
//       />
//     );

//     diagram.appendTo('#diagram');

//     // Cleanup function
//     return () => {
//       diagram.destroy();
//     };
//   }, []);

  return (
  <div id="diagram">

  </div>
  );
};

export default Diagram;
