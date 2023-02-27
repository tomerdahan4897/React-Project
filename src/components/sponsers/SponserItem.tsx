import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SponserProps } from '../../@types/types';
import { useNavigate } from 'react-router-dom';
import {BsPencil} from 'react-icons/bs'
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../app/hooks';
import { deleteSponser } from '../../features/sponsers/sponserSlice';
import {BsTrash} from 'react-icons/bs';
import css from './SponserItem.module.scss';

function SponserItem({id, title,description,img,url}:SponserProps) {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Card style={{ width: '18rem', height: '500px' }}>
      <Card.Img variant="top" src={img} width="150px" height="200px"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        
        
        {/* edit button */}
      <button className={`btn btn-info w-25 ${css.editButton}`} onClick={()=> {
      nav(`/about/sponsers/edit/${id}`);
      }}><BsPencil/></button>


     {/*  delete button */}
     <button className={`btn btn-danger ${css.removeButton}`} onClick={()=> {
      Swal.fire({
        title: 'Are You Sure You Want To Delete?',
        icon:'warning',
        iconColor:'red',
        showDenyButton: true,
        confirmButtonText:" Yes",
        confirmButtonColor:'red',
        denyButtonText: "NO",
        denyButtonColor:'green'
      }).then((result)=> {
        if(result.isConfirmed){
          dispatch(deleteSponser(id));
          Swal.fire({
            title:'Sponser Deleted!',
            icon:'success',
            iconColor:'green',
            confirmButtonColor:"green"
          });
        }else if(result.isDenied) {
          Swal.fire({title: 'Sponser Was Not Deleted',
           icon:'info', 
            iconColor:'green',
            confirmButtonColor:"green"
          })
        }
      })
     }}>
        <BsTrash/>
     </button>
      </Card.Body>
      <Button className={css.visitBtn} variant="secondary" href={url} target="_blank">Visit Us</Button>
    </Card>
  );
}

export default SponserItem;