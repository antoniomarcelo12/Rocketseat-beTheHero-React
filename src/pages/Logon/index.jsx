import './styles.css';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'


export default function Logon() {

    const depe = [null]

    return (
    <>
        {depe && 
                <div className="logon-container">
                    <section className="form">
                        <img src={ logoImg } alt="Be The Hero" />

                        <form>
                            <h1>Faça seu logon</h1>
                            <input placeholder='Sua ID' />
                            
                            <Link to="/profile">
                                <button className="button" type="submit">Entrar</button>
                            </Link>


                            <Link className='back-link' to="/register">
                                <FiLogIn size={16} color="#E02041" />
                                Não tenho cadastro
                            </Link>
                        </form>
                    </section>

                    <img src={ heroesImg } alt="Heroes" /> 
                </div>
        
        }
    </>
    );
}