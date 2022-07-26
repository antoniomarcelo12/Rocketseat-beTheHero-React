import { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import logoImg from '../../assets/logo.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './styles.css'

export default function Register() {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ whatsapp, setWhatsapp ] = useState('')
    const [ city, setCity ] = useState('')
    const [ uf, setUf ] = useState('')

    async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
        const response = await api.post('ongs', data)
        alert(`Seu ID é: ${response.data.id}`)
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className='back-link' to="/">
                        <AiOutlineArrowLeft /> Voltar para o logon.
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ong" />
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" />
                    <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp" />
                    
                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade" />
                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{width: 80}} />
                    </div>
                    
                    <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    ); 
}