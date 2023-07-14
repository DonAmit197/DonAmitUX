const removeNodeFromDevice = (node) => {
  if (node.length > 0)
    Array.from(node).map((el) => {
      var parent = el.parentNode;
      parent.removeChild(el);
      //console.log(parent)
    });
};
export default removeNodeFromDevice;
