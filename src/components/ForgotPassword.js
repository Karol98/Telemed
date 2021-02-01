import React, {useRef, useState} from "react"
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {Link} from "react-router-dom"
import NaviBar from "./NaviBar";

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Sprawdz swoją pocztę w celu zresetowania hasła")
        } catch {
            setError("Adres e-mail nieprawidłowy")
        }

        setLoading(false)
    }

    return (
        <>
            <NaviBar/>
            <Card className="align-items-center mt-5 justify-content-center w-100 d-flex">
                <Card.Body className="mt-5">
                    <h2 className="text-center mb-4">Resetuj hasło</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Adres e-mail:</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Zresetuj hasło
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Zaloguj się</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Potrzebujesz konta? <Link to="/signup">Zarejestruj się</Link>
            </div>
        </>
    )
}
