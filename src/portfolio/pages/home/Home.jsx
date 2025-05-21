import React, { useState } from 'react';
import styles from './Home.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/project'); // change this to your route
  };

  return (
    <div>
      (privite )
      <div/>
  );
};

export default Homepage;
