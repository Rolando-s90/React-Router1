import React, { useState } from 'react';

const Login = () => {
    const validarInput = (e) => {
        e.preventDefault()
        if (email === '') {
            alert('El email no puede estar vacío')
            setError(true)
            return
        }

        if (password === '') {
            alert('El password no puede estar vacío')
            setError(true)
            return
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres')
            setError(true)
            return
        }

        setError(false)
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    return (
        <div className="container">
            <h1 className="text-center">Registro</h1>
            <form onSubmit={validarInput}>
                {error ? <p className="error">Campos inválidos</p> : <p className="error">Éxito</p>}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}


export default Login;