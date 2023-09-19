import React, { useState } from 'react'
import './Login.css'
import { ExclamationTriangleFill, Facebook, Google, Twitter } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginSuccessMsg, setSuccessMsg] = useState(null)
    const [loginErrorMsg, setLoginErrorMsg] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        const instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_DOMAIN}/api/`
        });
        setLoginErrorMsg(null)
        const topVideos = instance.post('login_check', { email, password }, { withCredentials: true }).then(function (response) {
            console.log(response)
        }).catch(function (err) {
            console.log(err.response.data.message)
            setLoginErrorMsg(err.response.data.message)
        })

    }
    







    return (
        <main className='login-page'>
            <div className="top">

            </div>
            <form action="" className="login-form">
                <h3 style={{ marginBottom: 20 }}>Connexion</h3>
                {
                    loginErrorMsg && <div className="login-error-message flex align-items-center justify-content-between">{loginErrorMsg} <ExclamationTriangleFill /></div>
                }

                <div className="form-group">
                    <label htmlFor="">Adress Email</label>
                    <input type="text" className="inpt" placeholder='ex:contact@example.com' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" className="inpt" placeholder='Votre mot de passe' onChange={(e) => { setPassword(e.target.value) }} />
                    <div className="flex justify-content-between align-items-center">
                        <div className='flex gap-10 py-5'>
                            <input type="checkbox" name="" id="" /><label htmlFor="" style={{ fontWeight: "normal", margin: 0 }} >Afficher le mot de passe</label>
                        </div>
                        <Link>Mot de passe oublié ?</Link>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <button className="btn-transparent flex-1">S'inscrire</button>
                    <button className='btn-purple flex flex-1' onClick={handleLogin}>Se connecter</button>
                </div>
                <div className="barred-text"><span>Ou</span><div></div></div>
                <p className='text-center mb-5'>Se connecter avec</p>
                <div className="conn-method flex justify-content-center gap-10">
                    <span className='fb'><Facebook size={22} /></span>
                    <span className='google'><Google size={18} /></span>
                    <span className='twitter'><Twitter size={20} /></span>
                </div>
            </form>
        </main>
    )
}

export default Login
