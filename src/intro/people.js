// import Table from "react-bootstrap/Table";

// export default function CetakPeople() {
//   const dataPeople = [
//     {
//       firstName: "John",
//       lastName: "Thor",
//       gender: "M",
//       photo: "https://i.pravatar.cc/400?u=john.thor@pravatar.com",
//       job: "Actor",
//     },
//     {
//       firstName: "John",
//       lastName: "Doe",
//       gender: "M",
//       photo: "https://i.pravatar.cc/400?u=john.doe@pravatar.com",
//       job: "Lawyer",
//     },
//     {
//       firstName: "Jane",
//       lastName: "Doe",
//       gender: "F",
//       photo: "https://i.pravatar.cc/400?u=jane.doe@pravatar.com",
//       job: "Activist",
//     },
//     {
//       firstName: "Patrick",
//       lastName: "Star",
//       gender: "M",
//       photo: "https://i.pravatar.cc/400?u=patrick.star@pravatar.com",
//       job: "Actor",
//     },
//     {
//       firstName: "Moon",
//       lastName: "Young",
//       gender: "F",
//       photo: "https://i.pravatar.cc/400?u=moon.young@pravatar.com",
//       job: "Influencer",
//     },
//     {
//       firstName: "Joe",
//       lastName: "Dohn",
//       gender: "M",
//       photo: "https://i.pravatar.cc/400?u=joe.dohn@pravatar.com",
//       job: "Influencer",
//     },
//   ];

//   // return (
//   //   <>
//   //     <ul>
//   //       {dataPeople.map((people) => {
//   //         return (
//   //           <>
//   //             <ul>
//   //               {people.firstName} {people.lastName}
//   //             </ul>
//   //             <ul>{people.gender}</ul>
//   //             <ul> {people.photo}</ul>
//   //             <ul>{people.job}</ul>
//   //           </>
//   //         );
//   //       })}
//   //     </ul>
//   //   </>
//   // );

//   return (
//     <>
//       <Table striped bordered hover variant="light">
//         <thead>
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Gender</th>
//             <th scope="col">Job</th>
//             <th scope="col">Photo</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataPeople.map((people) => {
//             return (
//               <tr>
//                 <td>
//                   {people.firstName} {people.lastName}
//                 </td>
//                 <td>{people.gender}</td>
//                 <td>{people.job}</td>
//                 <td style={{ textAlign: "center" }}>
//                   <img
//                     style={{
//                       width: "50px",
//                       borderRadius: "100px",
//                     }}
//                     src={people.photo}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </>
//   );
// }

export const people = [
  {
    firstName: "John",
    lastName: "Thor",
    gender: "M",
    photo: "https://i.pravatar.cc/400?u=john.thor@pravatar.com",
    job: "Actor",
  },
  {
    firstName: "John",
    lastName: "Doe",
    gender: "M",
    photo: "https://i.pravatar.cc/400?u=john.doe@pravatar.com",
    job: "Lawyer",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    gender: "F",
    photo: "https://i.pravatar.cc/400?u=jane.doe@pravatar.com",
    job: "Activist",
  },
  {
    firstName: "Patrick",
    lastName: "Star",
    gender: "M",
    photo: "https://i.pravatar.cc/400?u=patrick.star@pravatar.com",
    job: "Actor",
  },
  {
    firstName: "Moon",
    lastName: "Young",
    gender: "F",
    photo: "https://i.pravatar.cc/400?u=moon.young@pravatar.com",
    job: "Influencer",
  },
  {
    firstName: "Joe",
    lastName: "Dohn",
    gender: "M",
    photo: "https://i.pravatar.cc/400?u=joe.dohn@pravatar.com",
    job: "Influencer",
  },
];
