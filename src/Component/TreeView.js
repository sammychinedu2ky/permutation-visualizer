import { Box } from "@chakra-ui/react";
import Tree from "react-d3-tree";
import { useContext, useState, useEffect, useRef } from "react";
import { appContext } from "../App";
function TreeView() {
  let [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
 
  let handleResize = ()=>{
    setTranslate({x:0,y:0})
  }
  window.addEventListener('resize', handleResize)
  let context = useContext(appContext);
  let boxRef = useRef(null);

  useEffect(() => {
    let dimensions = boxRef.current.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 2,
      y: dimensions.height / 10,
    });
  }, [translate.x]);

  const straightPathFunc = (linkDatum) => {
    const { source, target } = linkDatum;
    return `M${source.x},${source.y}L${target.x},${target.y}`;
  };
  return (
    <>
      <Box mt="20" h="100vh" className="tree-container" ref={boxRef}>
        <Tree
          data={context.state.data}
          orientation="vertical"
          pathFunc={straightPathFunc}
          translate={translate}
          rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        />
      </Box>
    </>
  );
}

export default TreeView;
