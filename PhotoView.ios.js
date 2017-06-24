import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableWithoutFeedback,TouchableOpacity,
    ActivityIndicator
} from 'react-native';

export default class PhotoView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{ alignItems:'center', justifyContent:'center' }}
                centerContent={true}
                maximumZoomScale={this.props.maximumZoomScale}
                minimumZoomScale={this.props.minimumZoomScale}>

                <TouchableWithoutFeedback
                    onPress={this.props.onTap ? this.props.onTap : function() {}}>
                    {!this.state.loaded?
                        <TouchableOpacity {...this.props}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <ActivityIndicator/>
                            </View>
                            <Image onLoadEnd={()=>{this.setState({loaded:true})}} source={this.props.source} style={{height:1,width:1}}/>
                        </TouchableOpacity>
                        :
                        <Image {...this.props}/>
                    }
                </TouchableWithoutFeedback>

            </ScrollView>
        );
    }
}
