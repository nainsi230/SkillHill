"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation check
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Perform login logic here (e.g., API call to authenticate)
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Login !!</h3>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <p>
                  Don&#39;t have an account?{" "}
                  <Link href="/register" className="text-primary">
                    Register here
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
