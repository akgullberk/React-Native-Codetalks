import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff6f00",
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
        color:"white",
        fontSize:windowWidth*0.08,
        bottom:windowHeight*0.1
    },
    auth_container:{
        top:windowHeight*0.06
    }
})