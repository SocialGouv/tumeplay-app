import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productBox: this.props.item,
    };
  }

  _onReadMoreClick = () => {
    const productBox = this.state.productBox;

    if (productBox.numberOfLines == 0) {
      productBox.numberOfLines = 3;
    } else {
      productBox.numberOfLines = 0;
    }

    this.setState({productBox: productBox});
  };

  render() {
    const cardStyle = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        marginTop: 20,
      },
      buttonWrapper: {
        flex: 1,
      },
      picture: {
        height: 250,
        width: '100%',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
      },
      textContainer: {
        padding: 15,
      },
      title: {
        color: '#F1732C',
        fontSize: 28,
      },
      text: {
        color: '#4F4F4F',
        fontSize: 14,
        marginBottom: 25,
        marginTop: 10,
      },
      readMoreWrapper: {
        position: 'absolute',
        right: 15,
        bottom: 15,
      },
      readMore: {
        color: '#F1732C',
      },
    });

    const item = this.state.productBox;

    return (
      <View style={cardStyle.container}>
        <TouchableOpacity
          style={cardStyle.buttonWrapper}
          onPress={this.props.onPress}>
          <Image source={item.picture} style={cardStyle.picture} />

          <View style={cardStyle.textContainer}>
            <Text style={cardStyle.title}>{item.title}</Text>
            <Text style={cardStyle.text}>{item.description}</Text>
          </View>

          <View style={cardStyle.readMoreWrapper}>
            <Text style={cardStyle.readMore}>Plus d infos</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
