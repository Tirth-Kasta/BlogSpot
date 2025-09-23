import axios from 'axios';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
const base_url = import.meta.env.VITE_API_URL;


const Register = () => {
    const {register,handleSubmit,watch,formState: { errors, isSubmitting }} = useForm()

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(base_url + 'register', data)
            if (res.status == 200) {
                console.log(res.data);
            }
        } catch (error) {
            console.log(error)
            window.alert("Error")
        }
    }

    return (
        <>
            <div className="form-body without-side">
                <div className="iofrm-layout">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items overflow-hidden">
                                <div className="item-container">
                                    <div className="website-logo-inside logo-normal">
                                        <a href="index.html">
                                            <div className="logo">
                                                <img className="logo-size" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Mr._Robot_Logo.svg" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item-container bg-accent custom-borders">
                                    <h3 className="font-md">Register to account</h3>
                                    <p>Access to the blogspot</p>
                                </div>
                                <div className="item-container">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {errors.name && <p className='error-message'>{errors.name.message}</p>}
                                        <input className="form-control" placeholder='Enter Name' {...register("name", {
                                            required: {
                                                value: true, message: "*Name is Require"
                                            }
                                        })} />

                                        {errors.email && <p className='error-message'>{errors.email.message}</p>}
                                        <input className="form-control" placeholder='Enter email' {...register("email", {
                                            required: "*Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "*Invalid email address",
                                            },
                                        })} />

                                        {errors.password && <p className='error-message'>{errors.password.message}</p>}
                                        <input className="form-control" placeholder='Password' type='password' {...register("password", {
                                            required: {
                                                value: true, message: "*Password is Require"
                                            }
                                        })} />

                                        <div className="form-button d-flex align-items-center">
                                            <button id="submit" type="submit" className="ibtn" disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Register"}</button>
                                        </div>
                                    </form>
                                    <div className="page-links pt-3">
                                        <Link to='/login'>Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register