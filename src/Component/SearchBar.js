import { Button, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { appContext } from "../App";
function SearchBar() {
  const context = useContext(appContext);

  const handleChange = ({ target }) => {
    console.log(context.state);
    context.dispatch({
      type: "print",
      input: target.value,
    });
  };
  const handleClick = () => {
    context.dispatch({
      type: "generate",
      word: context.state.input,
    });
  };
  return (
    <>
      <Input
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
