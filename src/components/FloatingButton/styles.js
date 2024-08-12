import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        backgroundColor:"#ff6f00",
        width:windowWidth*0.16,
        height:windowHeight*0.08,
        borderRadius:windowWidth*1,
        position:"absolute",
        top:windowHeight*0.82,
        right:windowWidth*0.05,
        justifyContent:"center",
        alignItems:"center"
    },

})