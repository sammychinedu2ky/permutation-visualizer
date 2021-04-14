function permutation(arr, data = {}, index = 0) {
  function generate(arr, data, index) {
    if (index !== arr.length - 1) {
      let temp = [];
      data.children = [];
      data.attributes = {
        fixed: index > 0 ? arr.join("").slice(0, index) : arr.join(""),
        swap: `${arr.join("")}[${index}] with ${arr.join("")}[${index + 1}${
          index + 1 === arr.length - 1 ? "" : `...${arr.length - 1}`
        }]`,
      };
      for (let i = index; i < arr.length; i++) {
        let newArr = [...arr];
        [newArr[index], newArr[i]] = [newArr[i], newArr[index]];
        if (!data.name) {
          data.name = newArr.join("");
        }
        temp.push({ name: newArr.join("") });
      }
      temp.forEach((i) => data.children.push(i));
      data.children.forEach((i) => {
        generate(i.name.split(""), i, index + 1);
      });
    }
  }

  generate(arr.split(""), data, index);
  return data;
}

export default permutation;
