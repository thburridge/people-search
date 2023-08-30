import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Badge,
  Th,
  Thead,
  Tr,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import NewClientModal from "./NewClientModal";

interface UserProps {
  _id: string;
  name: string;
  lastname: string;
  //password: string;
  mobile_email: string;
  dob: string;
  //genre: boolean;
}

const Clients = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // **************************
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addUser = (user: UserProps) => {
    // Logic to add a user to the users array
    setUsers([...users, user]);
    closeModal();
  };
  // **************************
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data: UserProps[]) => setUsers(data))
      .catch((err) => console.log("Error fetching from this end point", err));
  }, []);

  return (
    <Box w={"90%"} p="15px" ml="15px" borderWidth="1px" borderRadius="12px">
      <Text>
        Currently showing:{" "}
        <Badge colorScheme="green" variant="outline">
          {users.length} users
        </Badge>
      </Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" size="md">
          <TableCaption>
            Customers are coming from a{" "}
            <Badge colorScheme="yellow">Live Database</Badge>
          </TableCaption>

          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
              <Th>DOB</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4}>No users found...</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.mobile_email}</td>
                  <td>{user.dob}</td>
                </tr>
              ))
            )}
          </Tbody>
        </Table>

        <Box>
          <PlusSquareIcon mr={2} />
          <Button colorScheme="blue" onClick={openModal}>
            New client
          </Button>
        </Box>
      </TableContainer>

      <NewClientModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={addUser}
      />
    </Box>
  );
};

export default Clients;
