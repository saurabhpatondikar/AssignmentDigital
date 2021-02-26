import React,{PureComponent} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,TextInput} from "react-native";
import SwipeButton from 'rn-swipe-button';
import {connect} from 'react-redux'
import {storeAction} from "../Action/storeAction";

class Screen1 extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            name:'',
            nameEnter:''
        }
    }
   /* _onChange(event: Event) {

        console.log(event.nativeEvent.message);
    }*/
    onSlide=()=>{
        console.log("Hello")
    }
    onClickButton=()=>{
        this.props.navigation.navigate("Screen2")
    }
    handleTextChange(text){
      //  console.log(text)
        this.props.dispatch(storeAction({name:text}))
        this.setState({
            nameEnter:text
        })
    }
    saveName(){

    }
    static getDerivedStateFromProps(nextProps,prevProps)
    {
       // console.log(JSON.stringify(nextProps))
        if(nextProps.addition&&prevProps.addition) {
            if (nextProps.addition.name !== prevProps.addition.name) {
                this.setState({
                    name: nextProps.addition.name
                })
                return nextProps
            } else {
                return null
            }
        }
        else{
            return null
        }
    }

    render() {
        return(
           <View style={[{padding:10,flex:1,backgroundColor:'black'}]}>
               <View style={[{flex:0.5,justifyContent: 'flex-start'}]}>
                   <View style={{borderWidth:1,alignSelf:'flex-end'}}><Text style={[styles.textPress]}>{this.props.addition?this.props.addition.name:''}</Text></View>
                   <TextInput value={this.state.nameEnter} style={[styles.textInputField]} placeholder={"please enter your name"} onChangeText={(text)=>this.handleTextChange(text)} onBlur={()=>this.setState({nameEnter:''})}/>
                   {/* <TouchableOpacity onPress={()=>this.saveName()} style={[{alignSelf:'center',marginTop:10,borderRadius:10,borderWidth:1,padding:10,backgroundColor:'white'},styles.doCenter]}><Text style={[styles.textPress]}>Submit</Text></TouchableOpacity>*/}
               </View>
               <View style={[{flex:0.5,padding:5},styles.doCenter]}>
                   <TouchableOpacity onPress={()=>this.onClickButton()} style={[styles.doCenter,styles.buttonDesig,{backgroundColor:"transparent"}]}>
                       <Text style={styles.textPress}>Press Me</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.onClickButton()} style={[styles.doCenter,styles.buttonDesig,{backgroundColor:"grey"}]}>
                       <Text style={styles.textPress}>Press Me</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.onClickButton()} style={[styles.doCenter,styles.buttonDesig,{backgroundColor:"#2196F3"}]}>
                       <Text style={[styles.textPress,{color:'white'}]}>Press Me</Text>
                   </TouchableOpacity>
                   <SwipeButton width={'80%'} height={60} title=" Slide me to continue" titleFontSize={16} railStyles={{
                       backgroundColor: 'transparent',
                   }} thumbIconBackgroundColor={"#2196F3"} onSwipeSuccess={()=>this.onClickButton()} shouldResetAfterSuccess={true} containerStyles={{backgroundColor:'#fff'}}  />
               </View>
           </View>
        )
    }
}
function mapStateToProps(state){
const {addition}= state
    return{
    addition:addition
    }
}
export default connect(mapStateToProps)(Screen1)
const styles=StyleSheet.create({
    doCenter:{justifyContent:'center',alignItems:'center'},
    buttonDesig:{width:'80%',height:60,margin:5,borderRadius:10},
    textPress:{color:'#2196F3',fontSize:16},
    textInputField:{alignSelf:'center',width:'70%',height:56,marginTop:15,borderWidth:1,borderRadius:10,backgroundColor:'white'}
})
