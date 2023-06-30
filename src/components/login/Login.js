import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
export default function Login({ setData }) {
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const { access_token } = response;
                const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });
                setData(data);
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <div className='login-container'>
            <div className='login-google'>
                <GoogleButton onClick={login} />
            </div>
        </div>
    );
}