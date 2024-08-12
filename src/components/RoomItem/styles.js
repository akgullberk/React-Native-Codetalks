import { Dimensions, StyleSheet, Text} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:windowWidth*0.4,
        height:windowHeight*0.26,
        borderWidth:1,
        borderColor:"#e0e0e2",
        borderRadius:windowWidth*0.02,
        
    },
    inner_container:{
        alignItems:"center",
        justifyContent:"center",
    },
    room_text:{
        color:"#ff6f00",
        fontSize:windowWidth*0.08,
    },
    
})