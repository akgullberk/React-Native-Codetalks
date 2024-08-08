import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const base_style = StyleSheet.create({
    container:{
        width:windowWidth*0.9,
        height:windowHeight*0.05,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:windowHeight*0.011,
        marginTop:windowHeight*0.02
    },
    text:{
        fontSize:windowWidth*0.05,
        fontWeight:"bold"
    }
});

export default{
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"#ffa040"
        },
        text:{
            ...base_style.text,
            color:"white"
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"white"
        },
        text:{
            ...base_style.text,
            color:"#ffa040"
        }    
    }),
}