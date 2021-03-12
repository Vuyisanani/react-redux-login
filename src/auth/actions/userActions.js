import { sessionService } from 'redux-react-session';
import axios from 'axios';


export const loginUser = (credentials, history, setFieldError, setSubmitting ) => {
    
    return () => {
        axios.post('https://loginbackendapp.herokuapp.com/user/signin', JSON.stringify(credentials), {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then( (response) => {
            const {data} = response.data;

            if(data.status === 'FAIL') {
                const message = data.message;

                if(message.includes('credentials')) {
                    setFieldError('email', message);
                    setFieldError('password', message);   
                } else if(message.includes('password')) {
                    setFieldError('password', message);  
                }

            } else if (data.status === 'SUCCESS') {
                const userData = data.data[0];

                const token = userData._id;

                sessionService.saveSession(token).then( () => {
                    sessionService.saveUser(userData).then( () => {
                        history.push("/dashborad");
                    }).catch( (err) => console.error(err));
                }).catch( (err) => console.error(err));
            }
            setSubmitting(false);

        }).catch( err => console.log(err));
    }
};

export const signupUser = (credentials, history, setFieldError, setSubmitting) =>  {
    return (dispatch) => {
        axios.post('https://loginbackendapp.herokuapp.com/user/signup', JSON.stringify(credentials), {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then( (response) => {

            const {data} = response.data;

            if(data.status === 'FAILED') {

                const message = data.message;

                if(message.includes('name')) {
                    setFieldError('name', message);
                } else if(message.includes('password')) {
                    setFieldError('password', message);  
                }else if(message.includes('date')) {
                    setFieldError('dateOfbirth', message);  
                }else if(message.includes('email')) {
                    setFieldError('email', message);  
                }

                setSubmitting(false);

            } else if(data.status === 'SUCCESS') {
                const {email, password} = credentials;

                dispatch( loginUser({email, password}, history, setFieldError, setSubmitting));
            
            }

        }).catch( err => console.error(err));
    };
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push("/");
    }
}