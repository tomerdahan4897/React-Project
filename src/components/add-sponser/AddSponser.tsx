import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Sponser } from '../../@types/types';
import {v4} from 'uuid';
import { addSponser } from '../../features/sponsers/sponserSlice';
import Swal from 'sweetalert2';
import { sponserSchema } from '../../validators/sponserValidator';

const AddSponser = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [url, setUrl] = useState('');

    const dispatch = useAppDispatch();
    const [isOpen, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    }

    const openModal = () => {
        setOpen(true);
    }

  return (
    <>
    <div className="d-flex mt-1">
        <button className='btn btn-success mx-auto' onClick={openModal}>Add Sponser</button>
    </div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter New Sponser</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
                value={title}
                onChange={(e)=> {setTitle(e.currentTarget.value)}}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" 
              placeholder='Write something about the company'
              rows={4}
              value={description}
              onChange={(e)=> {setDescription(e.currentTarget.value)}}
               />

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image's URL Address" 
                value={img}
                onChange={(e)=> {setImg(e.currentTarget.value)}}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Official Site</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Site's URL"
                value={url}
                onChange={(e)=> {setUrl(e.currentTarget.value)}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="success" onClick={async ()=> {
                const newSponser:Sponser = {
                id: v4(),
                title:title,
                description:description,
                img:img,
                url:url
                }
                const isValid = await sponserSchema.isValid(newSponser);
                if(isValid) {
                    dispatch(addSponser(newSponser));
                    Swal.fire({
                      title: "Sponser Added Successfully",
                      icon: "success",
                      confirmButtonColor:'green',
                    });
                    closeModal();
                } else {
                    Swal.fire(
                      {title: "Not Valid",
                      text:"All the input are required. \n Title must be at least 2 characters. \n Description must be between 2-1,000 characters.\n Make sure you enter valid URLs",
                       icon: "error",
                      confirmButtonColor:"gray"
                      });
                }
          }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddSponser;