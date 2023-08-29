import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface User {
  _id: number;
  name: string;
  lastname: string;
  password: string;
  mobile_email: string;
  dob: string;
  genre: boolean;
}

const Clients = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => console.log("Error fetching from this end point", err));
  }, []);

  return (
    <Box w={"70%"} m={"15px"}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" size="sm">
          <TableCaption>
            Customers are coming from a Live Database.
          </TableCaption>

          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
              <Th>DOB</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users.map((user) => (
              <Tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.mobile_email}</td>
                <td>{user.dob}</td>
              </Tr>
            ))}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Clients;
