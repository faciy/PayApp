import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
// import panneau from '../assets/images/panneau_orange.png'
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import locationPin from './../assets/images/location-pin.png';
import location from './../assets/images/location.png';

const CourseFinish = () => {

    const region ={
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const navigation = useNavigation();

    const Back = ()=> { navigation.goBack()}

    const departMarker = () => (
        <Marker
        coordinate={{
            latitude: 37.3318456,
            longitude: -122.0296002,
        }}
        >
            <View
                style={{
                    height: 30,
                    width: 30,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'white'
                }}
            >
                <View
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'orange'
                    }}
                >
                    <Image
                        source={locationPin}
                        style={{
                            width: 25,
                            height: 25,
                            // tintColor: COLORS.white
                        }}
                    />
                </View>
            </View>
        </Marker>
    )

    const destinationMarker = () => (
        <Marker
            coordinate={{
                latitude: 37.771707, 
                longitude: -122.4053769
            }}
            anchor={{ x: 0.5, y: 0.5 }}
            flat={true}
            // rotation={angle}
        >
            <Image
                source={location}
                style={{
                    width: 40,
                    height: 40
                }}
            />
        </Marker>
    )

    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <View style={styles.header}> 
            <ImageBackground style={styles.image}>
                <Left style={styles.leftPosition}>
                    <Button transparent>
                        <Icon 
                        name="arrow-back"
                        style={styles.back}
                        size={25}
                        onPress={(Back)}
                        />
                        </Button>
                </Left>
                <Body>
                    <Title>Courses</Title>
                    <Text style={styles.retour}>Retour</Text> 
                </Body>
            </ImageBackground>
        </View>
        <View style={styles.body}> 
        <View style={styles.containerMap}>
                <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                style={styles.map}
                >
                    {departMarker()}
                    {destinationMarker()}
                     {/* <MapView.Marker
                    coordinate={{
                        latitude: 37.3318456,
                        longitude: -122.0296002,
                    }}
                    title="My Location"
                    description="Here I am."
                    /> */}
                     
                </MapView>
            </View>
        </View>
        <View style={styles.footer}> 
            <Text style={styles.distanceText}>Distance parcourue: 0.00 km</Text>
            <View style={styles.distance}>
                <Text style={styles.min}>O min <Text style={styles.kilo}> (km)</Text> </Text>
                <Text style={styles.prix}>1000</Text>
            </View>
            <View style={styles.bloc}>
                <Text style={styles.lieu}>Angré 8ème tranche</Text>
                {/* <Image source={panneau} style={styles.panneauOne} /> */}
                <Text style={styles.cfa}>Fcfa</Text>
            </View>
            <View style={styles.blocnew}>
                <Text style={styles.chiffreProduit}>Nombre de produit : 1</Text>
            </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header:{
        flex:1, 
        marginBottom:-40
    },
    body:{
        flex:2.5, 
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:-20
    },
    footer:{
        flex:2.5, 
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom:-40,
        paddingHorizontal:5,
    },
    retour:{
        position:'absolute', 
        color:'white', 
        top:20,
        right:120,
    },
    leftPosition:{
        position:'absolute', 
        left:20,
    },
    image: {
        flex: 1,
        backgroundColor:'orange'
    },
    back:{
        color:'white',
        right:15,
        top:10,
    },
    distanceText:{
        textAlign:'center',
        marginTop:10,
        fontSize:15,
    },
    distance:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    min:{
        paddingStart:50, 
        fontSize:20,
        fontWeight:'bold',
        color:'grey'
    },
    prix:{
        paddingEnd:65, 
        fontSize:16,
        color:'grey',
        top:5,
    },
    kilo:{
        fontSize:16,
        color:'grey',
    },
    bloc:{
        marginLeft:80,
        marginRight:30,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    blocnew:{
        marginLeft:80,
        marginRight:30,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    lieu:{
        fontWeight:'bold',
        fontSize:15,
    },
    cfa:{
        fontSize:15,
        paddingEnd:38,
        color:'grey'
    },
    chiffreProduit:{
        fontSize:15,
        color:'grey'
    },
    panneauOne:{
        position:'absolute',
        left:-50,
    },
    containerMap: {
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },




});

export default CourseFinish;