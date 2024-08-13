import { Dimensions, StyleSheet, Text} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        
        width: windowWidth * 0.75,
        height: windowHeight * 0.045,
        borderRadius: windowHeight * 0.01,
        margin: windowHeight * 0.015,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6f00',
    },
    text:{
        fontSize: windowHeight * 0.025,
        color: 'white',
    },
})