import react from "react";

import { Row, Col, Card } from 'react-materialize';

import avatar from '../../images/avatar.png';

const UserProfile = () => (
   <Card>
       <Row>
           <Col> 
             <img src={avatar} className='circle responsive-img' />
           </Col>
           
        </Row>
       <Row>
           <h5>Eduardo Gomes</h5>
           <p className='grey darken-2 white-text'> Aspirante a Dev</p>
       </Row>
   </Card>
);

export default UserProfile;