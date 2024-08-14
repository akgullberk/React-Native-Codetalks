import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffb74d",
        
        alignItems:"center"
    },
    header_container:{
        width:windowWidth *0.9,
        height:windowHeight*0.05,
        borderWidth:1,
        borderColor:"white",
        borderStyle: 'dashed',
        borderRadius:windowWidth*0.02,
        marginTop:windowHeight*0.02,
        justifyContent:"center",
    },
    header_text:{
        color:"white",
        fontSize:windowWidth*0.05,
        textAlign:"center",
    }
})