import Table from "react-bootstrap/Table";

function PeopleList(props) {
  const { people, pickSomeone } = props;
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Job</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody>
          {people.map((people, idx) => {
            const fullName = `${people.firstName} ${people.lastName}`;
            return (
              <tr
                key={idx}
                style={{ cursor: "pointer" }}
                onClick={() => pickSomeone(fullName)}
              >
                <td>
                  {people.firstName} {people.lastName}
                </td>
                <td>{people.gender}</td>
                <td>{people.job}</td>
                <td style={{ textAlign: "center" }}>
                  <img
                    style={{
                      width: "50px",
                      borderRadius: "100px",
                    }}
                    src={people.photo}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default PeopleList;
