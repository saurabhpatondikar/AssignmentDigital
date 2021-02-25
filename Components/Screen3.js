import React,{PureComponent} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {connect} from 'react-redux'
class Screen3 extends PureComponent{
    constructor(props) {
        super(props);
    }
    onClickNext=(text)=>{
        if(text==='home')
            this.props.navigation.navigate("Screen1")
        else{
            this.props.navigation.navigate("Screen2")
        }
    }
    render() {
        return(
            <View style={{flex:1,padding:10,backgroundColor:'black'}}>
            <View style={[{flex:0.5,justifyContent: 'flex-start',alignItems:'flex-end'}]}>
                <View ><Text style={[styles.textPress]}>{this.props.addition?this.props.addition.name:''}</Text></View>
            </View>
                <View style={[{flex:0.5},styles.doCenter]}>
                    <TouchableOpacity onPress={()=>this.onClickNext('home')} style={[styles.buttonDesig,{backgroundColor:"#2196F3"},styles.doCenter]}><Text style={[styles.textPress,{color:'white'}]}>Home Screen</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onClickNext('previous')} style={[styles.buttonDesig,{backgroundColor:"#2196F3"},styles.doCenter]}><Text style={[styles.textPress,{color:'white'}]}>Previous Screen</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
function mapStateToProps(state){
    const{addition}=state
    return{
      addition:addition
    };
}
export default connect(mapStateToProps)(Screen3)
const styles=StyleSheet.create({
    doCenter:{justifyContent:'center',alignItems:'center'},
    buttonDesig:{width:'80%',height:60,margin:10,borderRadius:10},
    textPress:{color:'#2196F3',fontSize:16}
})
