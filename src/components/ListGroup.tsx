import { Fragment } from "react";

function ListGroup() {
  let items = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  if (items.length === 0)
    return (
      <>
        <h1>List of things</h1> <p>No items found</p>
      </>
    );
  return (
    <>
      <h1>List of things</h1>
      <ul className="list-group"></ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      ;
    </>
  );
}
export default ListGroup;
