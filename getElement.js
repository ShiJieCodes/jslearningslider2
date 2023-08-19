const getElement = (selection) => {
  const ele = document.querySelector(selection);
  if (ele) return ele;
  throw new Error(`No such element: ${selection}`);
};

export default getElement;
