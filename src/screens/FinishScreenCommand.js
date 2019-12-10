import React from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    StatusBar,
    PermissionsAndroid,
    Platform,
    YellowBox,
    StyleSheet,
    ActivityIndicator,
    Image,
    FlatList,
    Dimensions,
    ScrollView
} from 'react-native';



import Styles from '../styles/Styles';
import Colors from '../styles/Color';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class FinishScreenCommand extends React.Component {

    static navigationOptions = {
        title: 'Oh oui !',
        headerLeft: null
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }

    componentDidMount() {
        fetch("http://127.0.0.1/api/contents")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    componentWillUnmount() {
        //LoginManager.getInstance().off('onConnectionClosed', this._connectionClosed);
    }

    _onDone = () => {
        this.props.navigation.navigate("FinishScreenBravo");
    }

    render() {
        const item = {
            key: 'somethun1',
            text: "Grâce à tes points," + '\n' + "commande ta box pour en apprendre plus" + '\n' + " et passer à l'action en toute sécurété !",
            description: "Découvre ton corps",
            imgtext: '1000',
            imgdesctext: "Tu le pose des questions sur le sexe, ton corps et celui des autres ? Cette boite essaie d'y repondre avec du contenues ludiques et te propose préservatif pour les appréhender sans prise de tête !",
            imgdesctext2: "Tu découvres ta sexualité et tu aimerais en apprendre plus ? Avec cette boite, retrouve des témoignages de jeunes qui te parlent de leur première fois ainsi que des préservatifs et lubrifiants pour te lancer sans...", 


            backgroundColor: '#22bcb5',
        };


        return (
            <ScrollView style={Styles.flexOne}>


                <View style={{ flex: 0.4 }}>
                    <View style={Styles.slide}>
                        <View style={{ flex: 1, flexDirection: 'column', alignSelf: "center", alignItems: 'center' }}>
                            <Image
                                style={Styles.PictureFinishCom}
                                source={item.cross}
                            />
                            <Text style={Styles.imgCommand} >{item.imgtext}</Text>
                            <Text style={Styles.descTextCom}>{item.text}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 0.1 }}>
                    <View style={Styles.slide}>
                        <View style={{ flex: 1, flexDirection: 'row', alignSelf: "center" }}>
                            <Image
                                style={Styles.imgBackFinish}
                                source={item.image}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.4 }}>
                    <View style={Styles.slide}>

                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={Styles.titreText}>{item.description}</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            <Text style={Styles.textCommImg}>{item.imgdesctext}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: -50 }}>
                    <View style={{ flex: 0.1 }}>
                        <View style={Styles.slide}>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: "center" }}>
                                <Image
                                    style={Styles.imgBackFinish}
                                    source={item.image}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.4 }}>
                        <View style={Styles.slide}>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={Styles.titreText}>Les premières fois</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                <Text style={Styles.textCommImg}>{item.imgdesctext2}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: -50 }}>
                    <View style={{ flex: 0.1 }}>
                        <View style={Styles.slide}>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: "center" }}>
                                <Image
                                    style={Styles.imgBackFinish}
                                    source={item.image}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.4 }}>
                        <View style={Styles.slide}>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={Styles.titreText}>Découvre ton corps</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                <Text style={Styles.textCommImg}>{item.imgdesctext}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={Styles.line}></View>
                <View style={{ marginTop: 190 }}>
                    <View style={{ flex: 0.4 }}>
                        <View style={Styles.slide}>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={Styles.titreTextList}>Ce que tu trouveras dans ta box:</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                <Text style={Styles.textCommImg}>
                                    <Text style={{ fontSize: 20 }}>•</Text> 6 préservatifs Manix Classic jeans{'\n'}
                                    <Text style={{ fontSize: 20 }}>•</Text> 6 préservatifs féminin Intimy{'\n'}
                                    <Text style={{ fontSize: 20 }}>•</Text> 6 préserveratifs grande taille{'\n'}
                                    <Text style={{ fontSize: 20 }}>•</Text> 1 miroir{'\n'}{'\n'}

                                    <Text style={{ fontSize: 20 }}>•</Text> Des livrets, des posters et des jeux !

                                    </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 40, paddingBottom: 40 }}>
                    <View style={{ flex: 0.1 }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>

                            <TouchableOpacity
                                style={{ flex: 3, paddingTop: 2, paddingBottom: 2 }}
                                onPress={this._onDone}
                            >
                                <View style={Styles.bottomComm}>
                                    <Text style={Styles.bottomCommText}>Commander</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </ScrollView>

        );
    }
}