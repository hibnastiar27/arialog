import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea
} from "@heroui/react";

interface ContactComponentProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const ContactComponent: React.FC<ContactComponentProps> = ({ isOpen, onOpenChange }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSend = (onClose: () => void) => {
    console.log("[ContactComponent] Tombol Send diklik!");
    
    // Validasi manual sederhana karena kita menghapus <Form>
    if (!fullname || !email || !description) {
      console.warn("[ContactComponent] Validasi gagal: Ada field yang masih kosong.");
      alert("Please fill out all fields.");
      return;
    }

    console.log("[ContactComponent] Data valid. Menyiapkan target email...");
    const targetEmail = "nurhibnastiar@gmail.com";
    const subject = encodeURIComponent(`Contact from Website: ${fullname}`);
    const body = encodeURIComponent(`Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${description}`);
    const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    
    console.log("[ContactComponent] Link mailto berhasil dibuat:", `mailto:${targetEmail}?subject=...&body=...`);
    
    // Membuka mailto (Safari lebih aman dengan cara ini atau window.location)
    console.log("[ContactComponent] Mencoba membuka aplikasi email default via window.location.href...");
    window.location.href = mailtoLink;
    
    // Reset form after sending
    console.log("[ContactComponent] Mereset isian form...");
    setFullname('');
    setEmail('');
    setDescription('');
    
    // Jangan langsung close agar Safari punya waktu memproses mailto
    console.log("[ContactComponent] Menunggu 500ms sebelum menutup pop-up modal...");
    setTimeout(() => {
      console.log("[ContactComponent] Menutup modal sekarang.");
      onClose();
    }, 500);
  };

  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Contact Me</ModalHeader>
            <div className="w-full">
              <ModalBody className="w-full">
                <Input
                  isRequired
                  errorMessage="Please enter a valid fullname"
                  label="Full Name"
                  labelPlacement="outside"
                  name="fullname"
                  placeholder="Enter your full name"
                  type="text"
                  value={fullname}
                  onValueChange={setFullname}
                />
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                />
                <Textarea
                  isRequired
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  value={description}
                  onValueChange={setDescription}
                />
              </ModalBody>
              <ModalFooter className="flex w-full">
                <Button className="text-pink-500" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-pink-500 text-white" onPress={() => handleSend(onClose)}>
                  Send
                </Button>
              </ModalFooter>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ContactComponent