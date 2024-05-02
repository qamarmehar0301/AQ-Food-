import react, { useRef, useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native'
import Header from '../../Components/Header'
import { Button, Icon, colors, SocialIcon } from 'react-native-elements'
import { Animated } from 'react-native'
import { parameters } from '../../Global/styles'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../context/auth_Context'

export default function SignIn({ navigation }) {

    const {dispatchSignIn} = useContext(SignInContext)
    const [textInputFoucs, settextInputFoucs] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function SignIn(data) {
        try {
            const { email, password } = data; // Destructure email and password from data object
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            if (user) {
                dispatchSignIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
               // navigation.navigate('Buottom_tab_navigator')
            }
        } catch (error) {
            console.log(error)
        }
    }
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

                        {/* Buttons */}
                        <View style={{ marginHorizontal: '5%', marginVertical: 20 }}>
                            <Button
                                title='Sign In'
                                titleStyle={parameters.buttonTitle}
                                buttonStyle={parameters.styledButton}
                                // onPress={() => { navigation.navigate('Buottom_tab_navigator') }}
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>}
            </Formik>

            <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => { Alert.alert('Forgot Passord') }} >
                <Text style={{ ...styles.text1, textDecorationLine: "underline", marginRight: '5%' }}> Forgot Password? </Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: '10%', marginBottom: '10%' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> OR </Text>
            </View>

            {/* Socail Buttons */}
            <View style={{}}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={styles.socialButton}
                    onPress={() => { Alert.alert('Logged In with facebook') }}
                />
            </View>

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
    }
})