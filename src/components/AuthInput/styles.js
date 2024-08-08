import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:"white",
        width:windowWidth*0.9,
        color:"white",
        fontSize:windowWidth*0.04,
        marginBottom:windowHeight*0.03
    }
})