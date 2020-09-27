import React, { useState } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BooksImages from './books-images';




        const Books = (props) => {
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
                  <ModalHeader toggle={toggle}>Brandywine Books</ModalHeader>
                  <ModalBody>
                    <BooksImages></BooksImages>
                  </ModalBody>
                  
                </Modal>
              </div>
            );
          }









export default Books;