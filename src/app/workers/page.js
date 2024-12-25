"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./WorkersPage.module.css"; // Importing CSS Module

const WorkersPage = () => {
  return (
    <Container className={styles.workersPage}>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h2 className="text-center mb-4">Opportunities for Workers</h2>
          <p className="text-center mb-4">
            At Skillhill, we believe in connecting workers with meaningful job
            opportunities. Whether you&lsquo;re an experienced professional or just
            starting your career, Skillhill can help you find a job that matches
            your skills and aspirations.
          </p>
          
          <div className={styles.cardContainer}>
            <Row>
              {/* Job Opportunity Card 1 */}
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Skilled Carpenter</Card.Title>
                    <Card.Text>
                      We are looking for experienced carpenters for residential
                      and commercial projects. Join us for steady work and great
                      pay.
                    </Card.Text>
                    <Button variant="primary">Apply Now</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Job Opportunity Card 2 */}
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>General Laborer</Card.Title>
                    <Card.Text>
                      If you&lsquo;re hardworking and eager to learn, we have job
                      opportunities for general laborers on construction sites.
                    </Card.Text>
                    <Button variant="primary">Apply Now</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Job Opportunity Card 3 */}
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Electrician</Card.Title>
                    <Card.Text>
                      Experienced electricians needed for various commercial
                      projects. Competitive wages and long-term growth
                      opportunities.
                    </Card.Text>
                    <Button variant="primary">Apply Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div className={styles.ctaSection}>
            <h3 className="text-center mb-4">Get Started with Skillhill</h3>
            <p className="text-center mb-4">
              Ready to take the next step in your career? Sign up with Skillhill
              today and gain access to exclusive job opportunities in the
              construction industry.
            </p>
            <div className="text-center">
              <Button variant="success" size="lg">
                Sign Up Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkersPage;
