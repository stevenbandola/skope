import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Button, Input, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
// Custom Scrollbar
import SimpleBar from "simplebar-react";

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";
import servicesIcon4 from "../../assets/images/services-icon/04.png";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import smimg1 from "../../assets/images/small/img-1.jpg";
import smimg2 from "../../assets/images/small/img-2.jpg";

// Charts
import LineAreaChart from "../AllCharts/apex/lineareachart";
import RadialChart from "../AllCharts/apex/apexdonut";
import Apexdonut from "../AllCharts/apex/apexdonut1";
import SparkLine from "../AllCharts/sparkline/sparkline";
import SparkLine1 from "../AllCharts/sparkline/sparkline1";
import Salesdonut from "../AllCharts/apex/salesdonut";

import "chartist/dist/scss/chartist.scss";
import Pie from "../AllCharts/echart/piechart";

class UpcomingEventsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Upcoming Events Dashboard</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active">
                    Dashboard for MyVictory Lead Pastor
                  </li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          {/* Pod Select */}
          <Row>
            <Col xl={4}></Col>
            <Col xl={4}>
              <Pie />
            </Col>
            <Col xl={4}></Col>
          </Row>

          {/* Panel */}
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h2 className="card-title mb-4">June 21 - Fathers Day Service (Car Show)</h2>                  
                  <Row>
                    <Col xl={12}>
                      <h4>Volunteers</h4>
                    </Col>                    
                    <Col xl={3}>
                      <h5>Setup Team</h5>
                      <address>
                        <strong>Stage:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>Sound:</strong><span className="text-muted"> David Fowler</span>
                        <br/><strong>Kids:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Toddlers:</strong><span className="text-muted"> Kat Harasym</span>
                        <br/><strong>Coffee:</strong><span className="text-muted"> Anjea Cormier</span>
                        <br/><strong>Host Team:</strong><span className="text-muted">  Dennis kjsdfk</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                    <h5>Music Team</h5>
                      <address>
                        <strong>Vocals:</strong><span className="text-muted"> Tahneal Eckert</span>
                        <br/><strong>E Guitar:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>A Guitar:</strong><span className="text-muted"> Micah Wever</span>
                        <br/><strong>Keys:</strong><span className="text-muted">  Tracy Fowler</span>
                        <br/><strong>Drums:</strong><span className="text-muted">  Ethan Smith</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Kids Team</h5>
                      <address>
                        <strong>Theatre:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Check-in:</strong><span className="text-muted">  Micah Wagner</span>
                        <br/><strong>Pre-school:</strong><span className="text-muted">  Naidene</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Host Team</h5>
                      <address>
                        <span className="text-muted"> Pastor Joel Stromberg</span>
                        <br/><span className="text-muted"> Nick kjahskdj</span>
                        <br/><span className="text-muted"> Someone Else</span>
                      </address>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h2 className="card-title mb-4">June 21 - Fathers Day Service (Car Show)</h2>                  
                  <Row>
                    <Col xl={12}>
                      <h4>Volunteers</h4>
                    </Col>                    
                    <Col xl={3}>
                      <h5>Setup Team</h5>
                      <address>
                        <strong>Stage:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>Sound:</strong><span className="text-muted"> David Fowler</span>
                        <br/><strong>Kids:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Toddlers:</strong><span className="text-muted"> Kat Harasym</span>
                        <br/><strong>Coffee:</strong><span className="text-muted"> Anjea Cormier</span>
                        <br/><strong>Host Team:</strong><span className="text-muted">  Dennis kjsdfk</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                    <h5>Music Team</h5>
                      <address>
                        <strong>Vocals:</strong><span className="text-muted"> Tahneal Eckert</span>
                        <br/><strong>E Guitar:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>A Guitar:</strong><span className="text-muted"> Micah Wever</span>
                        <br/><strong>Keys:</strong><span className="text-muted">  Tracy Fowler</span>
                        <br/><strong>Drums:</strong><span className="text-muted">  Ethan Smith</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Kids Team</h5>
                      <address>
                        <strong>Theatre:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Check-in:</strong><span className="text-muted">  Micah Wagner</span>
                        <br/><strong>Pre-school:</strong><span className="text-muted">  Naidene</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Host Team</h5>
                      <address>
                        <span className="text-muted"> Pastor Joel Stromberg</span>
                        <br/><span className="text-muted"> Nick kjahskdj</span>
                        <br/><span className="text-muted"> Someone Else</span>
                      </address>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h2 className="card-title mb-4">June 21 - Fathers Day Service (Car Show)</h2>                  
                  <Row>
                    <Col xl={12}>
                      <h4>Volunteers</h4>
                    </Col>                    
                    <Col xl={3}>
                      <h5>Setup Team</h5>
                      <address>
                        <strong>Stage:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>Sound:</strong><span className="text-muted"> David Fowler</span>
                        <br/><strong>Kids:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Toddlers:</strong><span className="text-muted"> Kat Harasym</span>
                        <br/><strong>Coffee:</strong><span className="text-muted"> Anjea Cormier</span>
                        <br/><strong>Host Team:</strong><span className="text-muted">  Dennis kjsdfk</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                    <h5>Music Team</h5>
                      <address>
                        <strong>Vocals:</strong><span className="text-muted"> Tahneal Eckert</span>
                        <br/><strong>E Guitar:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>A Guitar:</strong><span className="text-muted"> Micah Wever</span>
                        <br/><strong>Keys:</strong><span className="text-muted">  Tracy Fowler</span>
                        <br/><strong>Drums:</strong><span className="text-muted">  Ethan Smith</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Kids Team</h5>
                      <address>
                        <strong>Theatre:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Check-in:</strong><span className="text-muted">  Micah Wagner</span>
                        <br/><strong>Pre-school:</strong><span className="text-muted">  Naidene</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Host Team</h5>
                      <address>
                        <span className="text-muted"> Pastor Joel Stromberg</span>
                        <br/><span className="text-muted"> Nick kjahskdj</span>
                        <br/><span className="text-muted"> Someone Else</span>
                      </address>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h2 className="card-title mb-4">June 21 - Fathers Day Service (Car Show)</h2>                  
                  <Row>
                    <Col xl={12}>
                      <h4>Volunteers</h4>
                    </Col>                    
                    <Col xl={3}>
                      <h5>Setup Team</h5>
                      <address>
                        <strong>Stage:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>Sound:</strong><span className="text-muted"> David Fowler</span>
                        <br/><strong>Kids:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Toddlers:</strong><span className="text-muted"> Kat Harasym</span>
                        <br/><strong>Coffee:</strong><span className="text-muted"> Anjea Cormier</span>
                        <br/><strong>Host Team:</strong><span className="text-muted">  Dennis kjsdfk</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                    <h5>Music Team</h5>
                      <address>
                        <strong>Vocals:</strong><span className="text-muted"> Tahneal Eckert</span>
                        <br/><strong>E Guitar:</strong><span className="text-muted"> Steven Bandola</span>
                        <br/><strong>A Guitar:</strong><span className="text-muted"> Micah Wever</span>
                        <br/><strong>Keys:</strong><span className="text-muted">  Tracy Fowler</span>
                        <br/><strong>Drums:</strong><span className="text-muted">  Ethan Smith</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Kids Team</h5>
                      <address>
                        <strong>Theatre:</strong><span className="text-muted"> Jaidene Bandola</span>
                        <br/><strong>Check-in:</strong><span className="text-muted">  Micah Wagner</span>
                        <br/><strong>Pre-school:</strong><span className="text-muted">  Naidene</span>
                      </address>
                    </Col>
                    <Col xl={3}>
                      <h5>Host Team</h5>
                      <address>
                        <span className="text-muted"> Pastor Joel Stromberg</span>
                        <br/><span className="text-muted"> Nick kjahskdj</span>
                        <br/><span className="text-muted"> Someone Else</span>
                      </address>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </React.Fragment>
    );
  }
}

export default UpcomingEventsDashboard;
