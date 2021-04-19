import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import PhotoEditor from 'react-native-photo-editor'
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

const sketch = () =>{
	const navigation = useNavigation();
	return(
	<RNSketchCanvas
      containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
      canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
      onStrokeEnd={data => {
      }}
      closeComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Close</Text></View>}
      onClosePressed={() => navigation.navigate('Main')}
      undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
      // onUndoPressed={(id) => {
      //   Alert.alert('do something')
      // }}
      clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
      // onClearPressed={() => {
      //   Alert.alert('do something')
      // }}
      eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
      strokeComponent={color => (
        <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
      )}
      strokeSelectedComponent={(color, index, changed) => {
        return (
          <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
        )
      }}
      strokeWidthComponent={(w) => {
        return (<View style={styles.strokeWidthButton}>
          <View style={{
            backgroundColor: 'white', marginHorizontal: 2.5,
            width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
          }} />
        </View>
        )
      }}
      defaultStrokeIndex={0}
      defaultStrokeWidth={5}
      saveComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
      savePreference={() => {
        return {
          folder: "RNSketchCanvas",
          filename: String(Math.ceil(Math.random() * 100000000)),
          transparent: false,
          imageType: "png"
        }
      }}
      onSketchSaved={(success, path) => {
        Alert.alert(success ? 'Image saved!' : 'Failed to save image!', path)
      }}
      // onPathsChange={(pathsCount) => {
      //   console.log('pathsCount', pathsCount)
      // }}
   />
	)
}

const EditSketch = () =>{
    const route = useRoute()
    const _onPress = async () => {
        await PhotoEditor.Edit({
        path: route.params?.uri.split('file://')[1],
        stickers: [
            'sticker0',
            'sticker1',
            'sticker2',
            'sticker3',
            'sticker4',
            'sticker5',
            'sticker6',
            'sticker7',
            'sticker8',
            'sticker9',
            'sticker10',
        ],
        // hiddenControls: [
        //   'clear',
        //   'crop',
        //   'draw',
        //   'save',
        //   'share',
        //   'sticker',
        //   'text',
        // ],
        colors:undefined,
        onDone: (imagePath) => {
            console.log('on done',JSON.stringify(imagePath));
        },
        onCancel: () => {
            console.log('on cancel',route.params?.uri);
        },
        });
    }
    return(
        _onPress()
    )
}
export default EditSketch;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    strokeColorButton: {
      marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
      marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
      justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },
    functionButton: {
      marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
      backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
  });