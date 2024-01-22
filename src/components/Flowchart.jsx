import React, { useEffect, useState } from "react";
import ReactFlow, { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import "../updatenode.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Declaration of CET result" },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    data: { label: "Registration through online application" },
    position: { x: 400, y: 200 },
  },
  {
    id: "3",
    data: {
      label: "Document verification of facilitation center for CAP1/CAP2/CAP3",
    },
    position: { x: 100, y: 300 },
  },
  {
    id: "4",
    data: { label: "Filling up of option from CAP rounds" },
    position: { x: 400, y: 400 },
  },
  {
    id: "5",
    data: { label: "Seat Allotment for CAP1/CAP2" },
    position: { x: 100, y: 500 },
  },
  {
    id: "6",
    data: { label: "Confirmation of Admission at reporting center" },
    position: { x: 400, y: 600 },
  },
  {
    id: "7",
    data: { label: "Reporting & Confirmation of admission allotted" },
    position: { x: 100, y: 700 },
  },
  {
    id: "8",
    data: { label: "Enquiry at College counter" },
    position: { x: 400, y: 800 },
  },
  {
    id: "9",
    data: { label: "Institute form filling" },
    position: { x: 100, y: 900 },
  },
  {
    id: "10",
    data: { label: "EBC Scholarship" },
    position: { x: 400, y: 900 },
  },
  {
    id: "11",
    data: { label: "Document Verification" },
    position: { x: 100, y: 1000 },
  },
  {
    id: "12",
    data: { label: "Payment of fees" },
    position: { x: 400, y: 1100 },
  },
  {
    id: "13",
    data: { label: "Admission confirmation receipt" },
    position: { x: 100, y: 1200 },
  },
  // {
  //   id: "14",
  //   data: { label: "Institute form filling/EBC Scholarship" },
  //   position: { x: 100, y: 900 },
  // },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e7-8", source: "7", target: "8" },
  { id: "e8-9", source: "8", target: "9" },
  { id: "e9-11", source: "9", target: "11" }, // Connect node 9 to node 11
  { id: "e10-11", source: "10", target: "11" }, // Connect node 10 to node 11
  { id: "e11-12", source: "11", target: "12" },
  { id: "e12-13", source: "12", target: "13" },
  // { id: "e14-11", source: "14", target: "11" }, 
];

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const Flowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeHidden, setNodeHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        // Set x position to 100 for mobile, or use the existing x position for larger screens
        node.position.x = isMobile ? 100 : initialNodes.find((n) => n.id === node.id)?.position.x || 0;
        return node;
      })
    );
  }, [isMobile, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          // when you update a simple type you can just update the value
          node.hidden = nodeHidden;
        }
        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === "e1-2") {
          edge.hidden = nodeHidden;
        }
        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <div className="lg:w-[40%] w-[70%] md:w-[55%] lg:h-[1284px] h-[1400px]">
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodesRemove={() => {}}
      onConnect={() => {}}
      onElementsRemove={() => {}}
      onElementsAdd={() => {}}
      onNodeDoubleClick={(event, node) => console.log("double click", node)}
      onEdgeDoubleClick={(event, edge) => console.log("double click", edge)}
      onNodeContextMenu={(event, node) => console.log("context menu", node)}
      defaultZoom={1.5}
      defaultPosition={[0, 0]}
      elementsSelectable={true}
      onSelectionChange={(elements) =>
        console.log("selection change", elements)
      }
    />
    /</div>
  );
};

export default Flowchart;
