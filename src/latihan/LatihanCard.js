import { Button, Card, ListGroup } from "react-bootstrap";

export default function LatihanCard(props) {
  const { deleteCard, idx } = props;
  return (
    <>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center py-3">
          Counter
          <Button onClick={() => deleteCard(idx)}>x</Button>
        </Card.Header>
      </Card>
      <ListGroup>
        <ListGroup.Item>{props.angka}</ListGroup.Item>
      </ListGroup>
    </>
  );
}

// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

// export default function LatihanCard(props) {
//   const { number } = props;
//   return (
//     <>
//       <Card style={{ width: "10rem", textAlign: "center" }}>
//         <Card.Header>Counter</Card.Header>
//         <ListGroup variant="flush">
//           <ListGroup.Item>{number}</ListGroup.Item>
//         </ListGroup>
//       </Card>
//     </>
//   );
// }
