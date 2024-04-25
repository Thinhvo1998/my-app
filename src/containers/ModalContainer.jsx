import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormContainer from './FormContainer';
import { useAppContext } from '../contexts/AppContainer.context'
function ModalContainer(args) {
  const appContext = useAppContext();
  const { toggle, modal } = appContext;

  return (
    <div>
      <Button color="primary" onClick={toggle}  >
        Create New Account
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Create New Account</ModalHeader>
        <ModalBody>
          <FormContainer/>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
           Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalContainer;