import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  VideoControl,
  MediaPlayerState,
  CylindricalPanel,
  Image,
} from 'react-vr';





export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    };
  }

  render() {
    return (
      <View>
        <Pano source={asset('wow.jpg')}/>
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <CylindricalPanel layer={{width: 2200, height: 900}}>
            <View
              style={{
                opacity: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  margin: 10,
                  fontSize: 70,
                  fontWeight: '300',
                  borderRadius: 20,
                  backgroundColor: 'grey',
                }}
              >
                Hello
              </Text>

              <Image
                style={{
                  borderRadius: 20,
                  backgroundColor: 'red',
                  borderWidth: 10,
                  width: 600,
                  height: 315,
                }}
                source={{
                  uri: 'https://facebook.github.io/react/img/logo_og.png',
                }}
              />
            </View>
          </CylindricalPanel>

          <View
            style={{
              alignItems: 'center',
              layoutOrigin: [0.5, 0.5, 0],
              transform: [{translate: [0, 0, -4]}],
            }}>
            <Video
              style={{height: 2.25, width: 4}}
              source={[
                asset('video.mp4', {format: 'mp4'}),
                asset('video.webm', {format: 'webm'}),
              ]}
              playerState={this.state.playerState}
            />
            <VideoControl style={{height: 0.2, width: 4}} playerState={this.state.playerState} />
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'column',
            width: 2,
            alignItems: 'stretch',
            transform: [{translate: [-1, 1, -5]}],
          }}>
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
            </View>
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
            </View>
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
            </View>
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
            </View>
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
