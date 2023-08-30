import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: User) => void;
}

interface User {
  name: string;
  lastname: string;
  mobileEmail: string;
  dob: string;
}

function NewClientModal({ isOpen, onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobileEmail, setMobileEmail] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = () => {
    const newUser = { name, lastname, mobileEmail, dob };
    onSubmit(newUser);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                id="mobileEmail"
                name="mobileEmail"
                value={mobileEmail}
                onChange={(e) => setMobileEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Date of birth</FormLabel>
              <Input
                type="text"
                id="dob"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleSubmit}>
            Add User
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewClientModal;
