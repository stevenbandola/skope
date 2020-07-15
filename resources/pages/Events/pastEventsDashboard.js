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
                        <h4 className="font-size-18">Past Events Dashboard</h4>
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
									<h2 className="card-title mb-4">June 14 - Online Service</h2>
									<Row>                    
										<Col xl={4}>
											<Card className="mini-stat bg-primary text-white">
												<CardBody>
													<div className="mb-4">
														<div className="float-left mini-stat-img mr-4">
															<img src={servicesIcon3} alt="" />
														</div>
														<h5 className="font-size-16 text-uppercase mt-0 text-white-50">
															Attendance
														</h5>
														<h4 className="font-weight-medium font-size-24">
															2391{" "}
															<i className="mdi mdi-arrow-up text-success ml-2"></i>
														</h4>
														<div className="mini-stat-label bg-success">
															<p className="mb-0"> 12%</p>
														</div>
													</div>
													<div className="pt-2">
														<div className="float-right">
															<Link to="#" className="text-white-50">
																<i className="mdi mdi-arrow-right h5"></i>
															</Link>
														</div>
														<p className="text-white-50 mb-0 mt-1">Progress Bar (104%) achieved of goal</p>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col xl={4}>
											<Card className="mini-stat bg-primary text-white">
												<CardBody>
													<div className="mb-4">
														<div className="float-left mini-stat-img mr-4">
															<img src={servicesIcon3} alt="" />
														</div>
														<h5 className="font-size-16 text-uppercase mt-0 text-white-50">
															Salvations
														</h5>
														<h4 className="font-weight-medium font-size-24">
															54{" "}
															<i className="mdi mdi-arrow-up text-success ml-2"></i>
														</h4>
														<div className="mini-stat-label bg-success">
															<p className="mb-0"> 34%</p>
														</div>
													</div>
													<div className="pt-2">
														<div className="float-right">
															<Link to="#" className="text-white-50">
																<i className="mdi mdi-arrow-right h5"></i>
															</Link>
														</div>
														<p className="text-white-50 mb-0 mt-1">Since last month</p>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col xl={4}>
											<Card className="mini-stat bg-primary text-white">
												<CardBody>
													<div className="mb-4">
														<div className="float-left mini-stat-img mr-4">
															<img src={servicesIcon3} alt="" />
														</div>
														<h5 className="font-size-16 text-uppercase mt-0 text-white-50">
															Baptisms
														</h5>
														<h4 className="font-weight-medium font-size-24">
															6{" "}
															<i className="mdi mdi-arrow-down text-danger ml-2"></i>
														</h4>
														<div className="mini-stat-label bg-info">
															<p className="mb-0">-9%</p>
														</div>
													</div>
													<div className="pt-2">
														<div className="float-right">
															<Link to="#" className="text-white-50">
																<i className="mdi mdi-arrow-right h5"></i>
															</Link>
														</div>
														<p className="text-white-50 mb-0 mt-1">Since last month</p>
													</div>
												</CardBody>
											</Card>
										</Col>
									</Row>
									<Row>
										<Col xl={12}>
											<h4>Volunteers</h4>
										</Col>
										
										<Col xl={6}>
											<h5>Insights</h5>
											<address>
												<strong>David Fowler</strong><span className="text-muted"> has been serving for 3 years next sunday</span>
												<br/><strong>Jaidene Bandola</strong><span className="text-muted"> has been attending for 4 years next sunday</span> 
												<br/><strong>Jaidene Bandola</strong><span className="text-muted"> has been attending for 4 years next sunday</span> 
											</address>
										</Col>
										<Col xl={6}>
										<h5>Incidents</h5>
											<address>
												<strong>Delton Harasym</strong><span className="text-muted"> reported a security incident</span>        
												<strong>Delton Harasym</strong><span className="text-muted"> reported a security incident</span>        
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
