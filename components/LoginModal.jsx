import React, { useState } from 'react';
import { Modal, TextField, Button, Typography, Box } from '@mui/material';
import { userLogin } from '../app/services/api'; // Adjust the path
import Swal from 'sweetalert2';

const LoginModal = ({ open, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await userLogin({ email, password });
            if (response.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Logged in successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                handleClose();
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Login
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button fullWidth variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
            </Box>
        </Modal>
    );
};

export default LoginModal;
