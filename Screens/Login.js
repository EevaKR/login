import * as React from 'react';
import { Appbar } from 'react-native-paper';
import MainAppbar from '../Components/MainAppbar';

export default function Login() {
  const [formData, setFormData] = useState({username: '', password: ''})
  const [showError, setShowError] = useState(false)

  const validateAndSubmit = () => {
    setShowError(true)
    if (formData.username.lenght >0 && formData.password.lenght >8){
      setFormData({username: '',password: ''})
      setShowError(false)
    }
  }
  return (
    <>  
  <MainAppbar title="Login"/>
  <View style={styles.container}>
    <TextInput label= "Username" 
    style={styles.input_field}
    value={FormData.username}
    onChangeText={text => setFormData({...FormData,username: text})}
    />
    <TextInput label="Password" style={styles.input_field} 
    keyboardType= 'visible-password' 
    value={FormData.password}
    onChangeText={text0> setFormData({...FormData,password: text})}
    />
   
    <Button mode= "contained" style={styles.button}>Submit</Button>
  </View>
  </>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: ' center',
  },
  input_field: {
    backgroudColor: '#fcfcfc',
    margin: (16,8,16,8,),
  },
  button: {
    margin: (16,8,16,8)
  }
  
});