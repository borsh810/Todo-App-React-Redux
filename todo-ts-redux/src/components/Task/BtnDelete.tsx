import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react';
  import { FiTrash2 } from 'react-icons/fi';
  import { IBtnDelete } from '../../interfaces/Task';
  import { deleteTask, deleteAllTasks } from '../../slices/TaskSlice';
  import { useDispatch } from 'react-redux';

  function BtnDeleteAll() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    return (
        <>
            <Button
                colorScheme='gray'
                px='8'
                h='45'
                color='gray.500'
                mt='8'
                onClick={onOpen}
                >
                Delete All
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w='90%'>
                <ModalHeader>
                    Confirm deletion for all tasks?
                </ModalHeader>
                <ModalFooter>
                <Button mr={3} onClick={onClose}>No</Button>
                <Button colorScheme='blue' onClick={
                  () => dispatch(deleteAllTasks())}>
                    Yes
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
  }

  function BtnDelete({task}:IBtnDelete) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
  
    return (
      <>
        <IconButton
            aria-label="Apagar tarefa"
            icon={<FiTrash2 />}
            isRound={true}
            onClick={onOpen}
        />

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w='90%'>
            <ModalHeader>
                Do you really want to delete a task?
            </ModalHeader>
            <ModalBody>
                <Text>{task.description}</Text>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>No</Button>
              <Button colorScheme='blue' onClick={
                () => dispatch(deleteTask(task))}>
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { BtnDelete, BtnDeleteAll }