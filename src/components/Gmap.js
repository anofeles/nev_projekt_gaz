import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { MapView, Location, Permissions } from 'expo';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

export class Gmap extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    origin: null,
    locationResult: null
  };

  destination = { latitude: 37.771707, longitude: -122.4053769 };

  getCurrentPositionAsync = 'AIzaSyAeCI570AXT_jrxoRJfc3-cncvKBHUbxkw&callback';

  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange(mapRegion) {
    // console.log(mapRegion);
    // this.setState({ mapRegion });
  }

  async getLocationAsync() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied'
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
    this.setState({
      origin: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    });
  }

  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Pan, zoom, and tap on the map!</Text>

        {this.state.locationResult === null ? (
          <Text>Finding your current location...</Text>
        ) : this.state.hasLocationPermissions === false ? (
          <Text>Location permissions are not granted.</Text>
        ) : this.state.mapRegion === null ? (
          <Text>Map region doesn't exist.</Text>
        ) : (
          <MapView
            style={{ alignSelf: 'stretch', height: 400 }}
            initialRegion={this.state.mapRegion}
            onRegionChange={this.handleMapRegionChange}
            showsUserLocation
            showsMyLocationButton
          >
            <MapViewDirections
              origin={this.state.origin}
              destination={this.destination}
              apikey={this.GOOGLE_MAPS_APIKEY}
            />
          </MapView>
        )}

        <Text>Location: {this.state.locationResult}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
