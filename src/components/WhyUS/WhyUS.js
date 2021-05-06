import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import pic1 from '../../Images/adult-blur-blurred-background-687824.png'
import pic2 from '../../Images/chef-cook-food-33614.png'
import pic3 from '../../Images/architecture-building-city-2047397.png'

const WhyUS = () => {
    return (
        <Container style={{marginTop:'15%'}}> 
    

       <h1 className="pt-5">Why you should choose us</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum ducimus illo incidunt nesciunt rerum cupiditate doloremque, quos eos dolorum!</p>
     

        <CardDeck style={{marginTop:'5%'}}>
        <Card style={{height: "60%",border:'none'}}>
          <Card.Img variant="top"  src={pic1}/>
          <Card.Body>
            <Card.Title>Fast Delivary</Card.Title>
            <Card.Text>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur nesciunt accusantium sint, quaerat mollitia facilis eos suscipit repellat placeat tempore cupiditate enim quod eveniet quia consequatur odit earum cum!
            </Card.Text>
          </Card.Body>
         
        </Card>


        <Card style={{height: "60%" ,border:'none'}}>
          <Card.Img variant="top" style={{height:'313.19px'}}  src={pic2} />
          <Card.Body>
            <Card.Title>A Good Auto Responder</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, animi soluta vel ipsam aspernatur sequi corporis et, exercitationem quo quis ipsum modi aperiam maiores odio officiis nemo delectus neque harum?
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card style={{height: "60%" ,border:'none'}}>
          <Card.Img variant="top"   src={pic3}/>
          <Card.Body>
            <Card.Title>Home Delivary</Card.Title>
            <Card.Text>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptas quo, sunt consequatur mollitia a, alias, rem explicabo unde odio accusantium inventore nobis iste sint earum possimus! Sint, quas magni.
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardDeck>
      </Container>
    );
};

export default WhyUS;