const findTextContent = () => {
  const textContent = [
    ...document.body.querySelectorAll("h1, h2, h3, h4, h5, h6"),
  ];
  return textContent;
};

export default findTextContent;
