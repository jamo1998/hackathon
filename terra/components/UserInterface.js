import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Router from 'next/router';

const userInterface = () => {
  return (
    <div className="center">
      <br />
      <h2>Where would you like to go?</h2>
      <br />
      <div className="layout-container">
        <Row>
          <Col>
            <div>
              <button onClick={() => Router.push('/beach')}><img src="/img/beach/beach.png" alt="beach image"/></button>
              <p>Beach</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/city')}><img src="/img/city/city.png" /></button>
              <p>City</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/desert')}><img src="/img/desert/desert.png" /></button>
              <p>Desert</p>
            </div>
          </Col>
          <Col xs={6}>
            <Jumbotron>
              <div className="jumbo">
                <div className="jumbo-content">
                  <h1>Welcome to Terra</h1>
                  <p>
                    This is a simple environmental application, built to help
                    educate the youth
                    <br />
                    about the importance of how humans can negatively impact our
                    planet.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </div>
              </div>
            </Jumbotron>
          </Col>
          <Col>
            <div>
              <button onClick={() => Router.push('/jungle')}><img src="/img/jungle/jungle.png" /></button>
              <p>Jungle</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/ocean')}><img src="/img/ocean/ocean.png" /></button>
              <p>Ocean</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/forest')}><img src="/img/forest/forest.png" /></button>
              <p>Forest</p>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{`
        .center {
          text-align: center;
        }
        .jumbo {
          width: 1112px;
          height: 700px;
        }
        .jumbo-content {
          position: relative;
          right: 135px;
          top: 300px;
        }
        .layout-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default userInterface;
