import { Button, Input } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { appContext } from "../App";
function SearchBar() {
  const context = useContext(appContext);
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        context.dispatch({
          type: "generate",
          word: inputRef.current.value,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    context.dispatch({
      type: "input",
      input: inputRef.current.value,
    });
  };

  const handleClick = () => {
    context.dispatch({
      type: "generate",
      word: inputRef.current.value,
    });
  };
  return (
    <>
      <Input
        ref={inputRef}
        bg="white"
        onChange={handleChange}
        borderColor="white"
        color="gray.500"
        w="50%"
        mr="2"
        placeholder="word..."
      />
      <Button bg="white" onClick={handleClick} color="gray.500">
        Generate
      </Button>
    </>
  );
}

export default SearchBar;
