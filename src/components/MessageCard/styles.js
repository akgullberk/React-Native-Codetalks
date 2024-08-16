import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: windowHeight * 0.01,
        margin: windowHeight * 0.015,
        padding: windowHeight * 0.01,
        width: windowWidth * 0.95,
        
    },
    inner_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    user:{
        fontSize: windowHeight * 0.02,
        color: '#7a858a',
        
        
    },
    date:{
        fontSize: windowHeight * 0.016,
        fontStyle: 'italic',
        
        color: 'black',
        
    },
    title:{
        fontSize: windowHeight * 0.03,
        color: 'black',
        marginTop: windowHeight * 0.01,
        
    },
    dislike_container:{
        backgroundColor: 'white',
        width: windowWidth * 0.2,
        borderRadius: windowHeight * 0.01,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: windowHeight * 0.027,
        
        flexDirection: 'row',
        
    },
    dislike_text:{
        fontWeight: 'bold',
        color: 'green',
        
    },
    footer:{
        bottom: windowHeight * 0.005,
        
        alignItems: 'flex-end',
    },
    dislike_count_container:{
        
        borderRadius: windowHeight * 0.01,
        
    },
    dislike_count_text:{
        color: 'green',
        fontSize: windowHeight * 0.02,
        fontWeight: 'bold',
        
    }
})