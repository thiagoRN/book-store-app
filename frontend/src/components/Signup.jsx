import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import googlelogo from "../assets/google-logo.svg"

const Signup = () => {
    const {createUser, loginWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState("error")

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email | !password ) {
            alert("Preencha todos os campos");
            return;
          }

          let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

          if (reg.test(email) === false) {
            alert('Por favor forneça um email válido');
            return;
          }

        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Logado com sucesso!!")
            navigate(from,{replace:true})
        })
        .catch((error) => {
            if(error.code === "auth/email-already-in-use"){alert('email já existe');}
            else if(error.code === "auth/invalid-email"){alert('email invalido');}
            else if(error.code === "auth/weak-password"){alert('Senha muito fraca');}
            else{alert(error.code);}

            const errorMessage = error.message;
            setError(errorMessage)
        })

    }
  return (
  <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">Cadastre-se</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input  id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                            </div>
                            <p>Se você já tiver uma conta.
                                <Link to="/login" className='text-blue-600'> Entre aqui</Link>
                            </p>
                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-4 py-2">Enviar</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup