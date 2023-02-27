import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Sponser } from '../../@types/types';
import { editSponser } from '../../features/sponsers/sponserSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { sponserSchema } from '../../validators/sponserValidator';

const EditSponser = () => {
const {id} = useParams ();
const nav = useNavigate();
const sponsers = useAppSelector(state => state.sponsers.sponsers);
const dispatch = useAppDispatch();
const sponserToEdit= sponsers.find(s=>s.id === id);

const [title, setTitle] = useState(sponserToEdit?.title ?? '');
const [description, setDescription] = useState(sponserToEdit?.description ?? '');
const [img, setImg] = useState(sponserToEdit?.img ?? '');
const [url, setUrl] = useState(sponserToEdit?.url ?? '');

//when the user insert incorrect id in the url
if(!sponserToEdit){
    return <Navigate to="/about"/>
}

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
         <h2 className='mt-3'>Edit Sponser</h2>
          <Form className='w-50'>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="TitleInput">Title:</Form.Label>
                <Form.Control 
                id="TitleInput" 
                value={title}
                onChange={(e)=> {setTitle(e.currentTarget.value)}} />
              </Form.Group>

               <Form.Group className="mb-3">
                <Form.Label htmlFor="descriptionInput">Description</Form.Label>
                <Form.Control 
                as="textarea"
                id="descriptionInput" 
                placeholder="Disabled input"
                rows={4}
                value={description}
                onChange={(e)=> {setDescription(e.currentTarget.value)}} 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="imgInput">Update Image</Form.Label>
                <Form.Control 
                id="imgInput" 
                value={img} 
                onChange={(e)=> {setImg(e.currentTarget.value)}} 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="URLInput">Update URL</Form.Label>
                <Form.Control 
                id="URLInput" 
                value={url} 
                onChange={(e)=> {setUrl(e.currentTarget.value)}}
                 />
              </Form.Group>

              <div className='d-flex flex-row justify-content-center align-items-center'>
                <Button className='me-2' variant="secondary" onClick={()=> {
                      nav('/about')
                    }}>
                      Close
                </Button>

              <Button variant='success' type="submit" onClick={async()=> {
                const sponser:Sponser = {
                id:sponserToEdit.id,
                title: title,
                description: description,
                img: img,
                url: url,
                  }
                  const isValid = await sponserSchema.isValid(sponser);

                  if(isValid){
                      dispatch(editSponser(sponser));
                      Swal.fire({
                      title: "Sponser Updated Successfully",
                      icon: "success",
                      confirmButtonColor:'green',
                    });
                     nav(`/about/`);
                  }else {
                    Swal.fire(
                      {title: "Not Valid",
                      text:"All the input are required. \n Title must be at least 2 characters. \n Description must be between 2-1,000 characters.\n Make sure you enter valid URLs",
                       icon: "error",
                      confirmButtonColor:"gray"
                      });
                      nav(`/about/`);
                  }
              }}>UPDATE</Button>
            </div>

           </Form>
    </div>
  )
}

export default EditSponser;

