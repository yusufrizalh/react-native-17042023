import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const markerImg = require('../../assets/images/pin.png');

/*
class MenuGmaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          id: 1,
          title: 'UPN Veteran',
          description: 'Universitas Pembangunan Nasional Veteran Surabaya',
          coordinates: {
            latitude: -7.333088,
            longitude: 112.789529,
          },
        },
        {
          id: 2,
          title: 'Perumahan Puri Mas',
          description: 'Perumahan di Daerah Rungkut Surabaya',
          coordinates: {
            latitude: -7.336288,
            longitude: 112.785726,
          },
        },
        {
          id: 3,
          title: 'Richeese Factory Rungkut Madya',
          description: 'Rumah Makan Cepat Saji di Rungkut',
          coordinates: {
            latitude: -7.3018866951694,
            longitude: 112.77376851432145,
          },
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnable={true}
          zoomControlEnabled={true}
          minZoomLevel={5}
          maxZoomLevel={15}
          initialRegion={{
            latitude: -7.3333751,
            longitude: 112.7894965,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}>
          {this.state.markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              pinColor={'#6432ed'}
              image={markerImg}
              centerOffset={{x: -18, y: -60}}
              anchor={{x: 0.69, y: 1}}
              onpress={() => this.setState({marker1: !this.state.marker1})}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
*/

const MenuGmaps = () => {
  const [position, setPosition] = useState({
    latitude: -6.2212946,
    longitude: 106.7888689,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);

  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={position}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}>
      <Marker
        title="You are here"
        pinColor="red"
        image={markerImg}
        description={`This is your location: ${position.latitude}, ${position.longitude}`}
        coordinate={position}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MenuGmaps;
