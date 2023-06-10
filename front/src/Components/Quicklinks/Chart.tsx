import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Tree, TreeNode } from "react-organizational-chart";
import boss from "../../Assets/Images/boss.png";
import plus from "../../Assets/Images/plusOrg.svg";
import minus from "../../Assets/Images/minusOrg.svg";

interface StyledNodeProps {
  isActive: boolean;
  hasChildren: boolean;
}

const StyledNode = styled("div")(
  ({ isActive, hasChildren }: StyledNodeProps) => ({
    padding: "5px",
    borderRadius: "8px",
    display: "inline-block",
    backgroundColor: isActive ? "lightgray" : "inherit",
    cursor: hasChildren ? "pointer" : "default",
  })
);

const OrgChartPage: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const handleNodeClick = (nodeId: string) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  return (
    <div>
      {/* Your other components */}
      <Tree
        label={
          <StyledNode isActive={false} hasChildren={true}>
            {/* Root label content */}
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode
              isActive={expandedNodes.includes("nodeId1")}
              hasChildren={true}
            >
              {/* Content */}
            </StyledNode>
          }
          key="nodeId1"
          //   onClick={() => handleNodeClick('nodeId1')}
        >
          {expandedNodes.includes("nodeId1") && (
            <>
              <TreeNode
                label={
                  <StyledNode
                    isActive={expandedNodes.includes("nodeId1-1")}
                    hasChildren={false}
                  >
                    {/* Content */}
                  </StyledNode>
                }
                key="nodeId1-1"
              />
              <TreeNode
                label={
                  <StyledNode
                    isActive={expandedNodes.includes("nodeId1-2")}
                    hasChildren={false}
                  >
                    {/* Content */}
                  </StyledNode>
                }
                key="nodeId1-2"
              />
            </>
          )}
        </TreeNode>
        {/* Repeat the above pattern for other nodes */}
      </Tree>
    </div>
  );
};

export default OrgChartPage;
