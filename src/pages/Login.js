import React from 'react';

import { StyledTextInput, 
    StyledFormArea, 
    StyledFormButton, 
    StyledLabel, 
    StyledLogo, 
    StyledTittle, 
    StyledSubTitle, 
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';
import { Formik, Form} from 'formik';
import Logo from './../assets/logo.jpeg';
import  { TextInput } from './../components/FormLib';

import { FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';

import { connect } from 'react-redux';
import { loginUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Login = ({loginUser}) => {
    const history = useHistory();

    return (
        <p>
            <StyledFormArea style={{backgroundColor:"light-grey"}}>
                <StyledLogo image={Logo} />

                <StyledTittle color={colors.theme} size={30}>
                    Member Login
                </StyledTittle>
                <Formik 
                 initialValues = {{
                     email: "",
                     password: "",
                 }}
                 validationSchema = {
                     Yup.object({
                         email: Yup.string()
                         .email("Invalid email address")
                         .required("Required"),
                         password: Yup.string()
                         .min(8, "Password is too short")
                         .max(30, "Password is too long")
                         .required("Required"),
                     })
                 }
                 onSubmit = {(values, {setSubmitting}, setFieldError) => {
                    //  console.log('values: ', values )}
                     loginUser(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form >
                            <TextInput
                                name="email"
                                type='text'
                                label="Email Address"
                                placeholder="vmeteni@example.com"
                                icon={<FiMail/>}
                            />

                            <TextInput
                                name="password"
                                type='password'
                                label="Password"
                                placeholder="***********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton
                                    type="submit">
                                        Submit
                                </StyledFormButton>}

                                {isSubmitting && (
                                    <Loader 
                                        type="Puff"  // "ThreeDots" or Oval or TailSpin
                                        color= {colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                                
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>
                    New here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>

            </StyledFormArea>
            <CopyrightText>All rights reserved &copy;2021</CopyrightText>
        </p>
    );
};

export default connect(null, {loginUser})(Login);