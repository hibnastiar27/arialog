import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Form
} from "@heroui/react";

interface ContactComponentProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const ContactComponent: React.FC<ContactComponentProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Contact Me</ModalHeader>
            <Form className="w-full">
              <ModalBody className="w-full">
                <Input
                  isRequired
                  errorMessage="Please enter a valid fullname"
                  label="Full Name"
                  labelPlacement="outside"
                  name="fullname"
                  placeholder="Enter your full name"
                  type="text"
                />
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Textarea
                  isRequired
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                />
              </ModalBody>
              <ModalFooter className="flex w-full">
                <Button className="text-pink-500" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-pink-500 text-white" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ContactComponent