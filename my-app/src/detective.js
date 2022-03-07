import React, { useState } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DetectiveImages from './detective-images';




        const Detective = (props) => {
            const {
              buttonLabel,
              className
            } = props;
          
            const [modal, setModal] = useState(false);
          
            const toggle = () => setModal(!modal);
          
            return (
              <div>
                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                  <ModalHeader toggle={toggle}>Discount Detective</ModalHeader>
                  <ModalBody>
                    <DetectiveImages></DetectiveImages>
                  </ModalBody>
                  
                </Modal>
              </div>
            );
          }

          export default Detective;