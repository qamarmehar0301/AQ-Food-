import react, { useRef, useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, Modal } from 'react-native';
import Header from '../../Components/Header';
import { Button, Icon, colors, SocialIcon } from 'react-native-elements';
import { Animated } from 'react-native';
import { parameters } from '../../Global/styles';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../../context/auth_Context';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export default function SignIn({ navigation }) {

    const { dispatchSignIn } = useContext(SignInContext)
    const [textInputFoucs, settextInputFoucs] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    const [forgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);
    const [userInfo, setuserInfo] = useState(null)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleForgotPassword = async (values) => {
        try {
            await auth().sendPasswordResetEmail(values.forgot_email);
            Alert.alert('Password reset email sent. Check your email inbox.');
            setForgotPasswordModalVisible(false); // Close the modal after sending the email
        } catch (error) {
            Alert.alert('Error sending password reset email:', error.message);
        }
    };

    async function SignIn(data) {
        try {
            const { email, password } = data; // Destructure email and password from data object
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            if (user) {
                dispatchSignIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } })
            }
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                // Handle the case where the user does not exist
                Alert.alert('User not found. Please check your email and password.');
            } else {
                // Handle other errors
                Alert.alert('An error occurred. Please try again later.');
            }
        }
    }

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: '819224923074-b0qjgbjeu0o6fqoqidrhviv5akvil26s.apps.googleusercontent.com'
    //     })
    // }, [])

    // const signIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         this.setState({ userInfo });
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (f.e. sign in) is in progress already
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //         } else {
    //             // some other error happened
    //         }
    //     }
    // };

    return (
        <View style={{ flex: 1 }}>
            <Header title="Sign In" navigation={navigation} />

            <View style={{ marginLeft: '6%', marginTop: '3%' }}>
                <Text style={styles.title}> Sign-In </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: '3%' }}>
                <Text style={styles.text1}> Please Enter the Email and Password </Text>
                <Text style={styles.text1}> registered with your account </Text>
            </View>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => { SignIn(values) }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
                        errors.email = 'Enter Proper email';
                    }
                    if (!values.password) {
                        errors.password = 'Password is required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Password must be at least 6 characters';
                    }
                    return errors;
                }}
            >
                {(props) =>
                    <View>
                        {/* Input Fields */}
                        <View style={{ marginTop: '7%' }}>
                            <View style={styles.textInput1}>
                                <Animated.View>
                                    <Icon
                                        name="email"
                                        type='material'
                                        iconStyle={{ color: colors.grey3 }}
                                    />
                                </Animated.View>
                                <TextInput
                                    placeholder='Email'
                                    placeholderTextColor='#86939e'
                                    style={{ width: '80%', color: 'black' }}
                                    ref={textInput1}
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                            </View>
                            {props.values.email.length < 1 ? null :
                                props.errors.email &&
                                <Text style={{ marginTop: -15, marginLeft: '6%', marginBottom: 10, color: '#D20062' }}>
                                    {props.errors.email}
                                </Text>
                            }
                            <View style={styles.textInput2}>
                                <Animated.View>
                                    <Icon
                                        name="lock"
                                        type='material'
                                        iconStyle={{ color: colors.grey3 }}
                                    />
                                </Animated.View>
                                <TextInput
                                    placeholder='Password'
                                    placeholderTextColor='#86939e'
                                    style={{ width: '80%', color: 'black' }}
                                    ref={textInput2}
                                    type='password'
                                    onFocus={() => {
                                        settextInputFoucs(false)
                                    }}
                                    onBlur={() => {
                                        settextInputFoucs(true)
                                    }}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    secureTextEntry={!showPassword}
                                />
                                <Animated.View animation={textInputFoucs ? "" : "fadeInLeft"} duration={400} >

                                    <Icon
                                        name={showPassword ? "visibility" : "visibility-off"}
                                        type='material'
                                        iconStyle={{ color: colors.grey3, paddingRight: 10 }}
                                        style={{ marginRight: '5%' }}
                                        onPress={togglePasswordVisibility}
                                    />
                                </Animated.View>
                            </View>
                            {props.values.password.length < 1 ? null :
                                props.errors.password &&
                                <Text style={{ marginTop: -15, marginLeft: '6%', marginBottom: 10, color: '#D20062' }}>
                                    {props.errors.password}
                                </Text>
                            }
                        </View>

                        {/* Sign-In Buttons */}
                        <View style={{ marginHorizontal: '5%', marginVertical: 20 }}>
                            <Button
                                title='Sign In'
                                titleStyle={parameters.buttonTitle}
                                buttonStyle={parameters.styledButton}
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>}
            </Formik>

            {/* Forgot Password */}
            <View>
                <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => { setForgotPasswordModalVisible(true) }} >
                    <Text style={{ ...styles.text1, textDecorationLine: "underline", marginRight: '5%' }}> Forgot Password? </Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={forgotPasswordModalVisible}
                    onRequestClose={() => setForgotPasswordModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={styles.forgot_Text}>
                                <Text style={styles.modalHeaderText}>Forgot Password?</Text>
                                <Icon
                                    name="cancel"
                                    type='material'
                                    iconStyle={{ color: colors.grey3 }}
                                    onPress={() => setForgotPasswordModalVisible(false)}
                                />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: '3%' }}>
                                <Text style={styles.text1}> Please Enter your registered email </Text>
                                <Text style={styles.text1}> to get the reset link  </Text>
                            </View>
                            <Formik
                                initialValues={{ forgot_email: '' }}
                                onSubmit={(values) => { handleForgotPassword(values) }}
                                validate={(values) => {
                                    const errors = {}
                                    if (!values.forgot_email) {
                                        errors.forgot_email = 'Email is required';
                                    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.forgot_email)) {
                                        errors.forgot_email = 'Enter Proper email';
                                    }
                                    return errors;
                                }}
                            >
                                {(props) =>
                                    <View>
                                        <View style={styles.forgot_pass_cont}>
                                            <Animated.View>
                                                <Icon
                                                    name="email"
                                                    type='material'
                                                    iconStyle={{ color: colors.grey3 }}
                                                />
                                            </Animated.View>
                                            <TextInput
                                                placeholder='Email'
                                                placeholderTextColor='#86939e'
                                                style={{ width: '80%', color: 'black' }}
                                                // ref={textInput1}
                                                onChangeText={props.handleChange('forgot_email')}
                                                value={props.values.forgot_email}
                                            />
                                        </View>
                                        {props.values.forgot_email.length < 1 ? null :
                                            props.errors.forgot_email &&
                                            <Text style={{ marginTop: -15, marginLeft: '6%', marginBottom: 10, color: '#D20062' }}>
                                                {props.errors.forgot_email}
                                            </Text>
                                        }
                                        <Button
                                            title="Get the Link"
                                            onPress={props.handleSubmit}
                                        />
                                    </View>}
                            </Formik>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={{ alignItems: 'center', marginTop: '10%', marginBottom: '10%' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> OR </Text>
            </View>

            {/* Facebook Buttons */}
            <View>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={styles.socialButton}
                    onPress={() => { Alert.alert('Logged In with facebook') }}
                />
            </View>

            {/* Google Button */}
            <View>
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                    style={styles.socialButton}
                    onPress={() => { Alert.alert('Logged In with Google') }}
                />
            </View>

            <View style={{ marginTop: '4%' }}>
                <Text style={{ ...styles.text1, marginLeft: '5%' }}> New on QAfoods? </Text>
            </View>

            <View style={{ alignItems: 'flex-end', marginRight: '5%', marginTop: '5%' }}>
                <Button
                    title='Create an Account'
                    buttonStyle={styles.createBtn}
                    titleStyle={styles.cretaeBtnTitle}
                    onPress={() => { navigation.navigate('SignUp') }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#ff8c52',
        fontSize: 25,
        fontWeight: 'bold',
    },
    text1: {
        color: colors.grey3,
        fontSize: 14
    },
    textInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: '6%',
        marginBottom: '5%',
        borderRadius: 12,
        paddingLeft: 15,
        color: 'black',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',

    },
    textInput2: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: '6%',
        marginBottom: '5%',
        borderRadius: 12,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        color: 'black',
    },
    socialButton: {
        borderRadius: 12,
        height: 50,
        marginHorizontal: 20
    },
    createBtn: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 40,
        paddingHorizontal: 20
    },
    cretaeBtnTitle: {
        color: '#ff8c52',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: -3,
    },
    forgot_pass_cont: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginVertical: '5%',
        borderRadius: 12,
        paddingLeft: 15,
        color: 'black',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    forgot_Text: {
        marginBottom: '4%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 150
    },
    modalContent: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        elevation: 5,
    },
    modalHeaderText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },

})