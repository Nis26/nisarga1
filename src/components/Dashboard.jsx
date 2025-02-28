import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged Out Successfully!");
    navigate("/");
  };

  return (
    <Container className="text-center mt-5">
      <h2>Welcome to the Dashboard 🎉</h2>
      <Button variant="danger" className="mt-3" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
