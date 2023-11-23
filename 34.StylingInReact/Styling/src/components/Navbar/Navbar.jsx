import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className='container bg-black' >
        <nav className="navbar navbar-expand-lg " >
            <a style={{color:"white"}} className="navbar-brand" href="#">Navbar</a>
        </nav>
    </div>
  );
}

export default Navbar;