import React, {useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,  } from 'react-router-dom';
import { detailsUser } from '../../../Redux/action/'
import SidebarAdmin from '../../componentsAdmin/SidebarAdmin/SidebarAdmin';
import './DetailsUsers.scss'

const UserDetails = () => {
    const dispatch = useDispatch()
    const {UserId} = useParams()
    const user = useSelector(state => state.userDetail);


    useEffect(() => {
        dispatch(detailsUser(UserId))
    }, [dispatch, UserId]);
 
    console.log(user);

  return (
      <div className='Details'>
        <SidebarAdmin/>


      <div className='DetailsContainer'>
        <p>User Details</p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <t>
          <strong>Email:</strong> {user.email}
        </t>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;

/*  */