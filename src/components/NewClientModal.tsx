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
  _id: string;
  name: string;
  lastname: string;
  mobile_email: string;
  dob: string;
}

function NewClientModal({ isOpen, onClose, onSubmit }: Props) {
  const [_id, set_Id] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile_email, setMobile_Email] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = () => {
    const newUser = { _id, name, lastname, mobile_email, dob };
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
            {/* <FormControl>
              <FormLabel>_id</FormLabel>
              <Input
                type="text"
                id="_id"
                name="_id"
                value={_id}
                onChange={(e) => set_Id(e.target.value)}
              />
            </form></FormControl>  //dont want _id to be listed in this modal*/}
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
                value={mobile_email}
                onChange={(e) => setMobile_Email(e.target.value)}
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
