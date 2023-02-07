import {TextInput,View,StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){
return(
<View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize='none'
    autoCorrect={false}
    />
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>

</View>
)}
export default StartGameScreen;
const styles= StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        borderRadius:8,
        elevation:10,
        shadowColor:'black',
        shadowOpacity:1,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        backgroundColor:'#4e0329'
    },
    numberInput:{
        height:50,
        width:55,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    }
})