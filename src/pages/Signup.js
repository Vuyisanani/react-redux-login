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

import { FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
// import { ref } from 'yup';

import { connect } from 'react-redux';
import { signupUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';


const Signup = ({signupUser}) => {
    const history = useHistory();

    return (
        <p>
            <StyledFormArea style={{backgroundColor:"light-grey"}}>
                <StyledLogo image={Logo} />

                <StyledTittle color={colors.theme} size={30}>
                    Member Signup
                </StyledTittle>
                <Formik 
                 initialValues = {{
                     email: "",
                     password: "",
                     repeatPassword: "",
                     dateOfBirth: "",
                     name: ""
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
                         name: Yup.string().required("Required"),
                         dateOfBirth: Yup.date().required("Required"),
                         repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match")

                     })
                 }
                 onSubmit = {(values, {setSubmitting},setFieldError ) => {
                    //  console.log('values: ', values )}
                     signupUser(values, history, setFieldError, setSubmitting)
                 }}
                >
                    {({isSubmitting}) => (
                        <Form >
                            <TextInput
                                name="name"
                                type='text'
                                label="Full Names"
                                placeholder="Vuyisanani Meteni"
                                icon={<FiUser />}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type='date'
                                label="Date of Birth"
                                icon={<FiCalendar/>}
                            />
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

                            <TextInput
                                name="repeatPassword"
                                type='password'
                                label="Repeat Password"
                                placeholder="***********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton
                                    type="submit">
                                        Signup
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
                    Already have an account <TextLink to="/login">Login</TextLink>
                </ExtraText>

            </StyledFormArea>
            <CopyrightText>All rights reserved &copy;2021</CopyrightText>
        </p>
    );
};

export default connect(null,{signupUser})(Signup);