import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ytdl from 'react-native-ytdl';

const DownloadVideo = (props) => {
  const [youtubeURL, setYoutubeURL] = useState('');
  const downloader = async () => {
    const urls = await ytdl(youtubeURL, {
      filter: (format) => format.container === 'mp4',
    });
    let info = await ytdl.getInfo(youtubeURL);
    let dirs = RNFetchBlob.fs.dirs;
    console.log(dirs);
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp4',
      path: dirs.SDCardApplicationDir + `/${info.videoDetails.title}.mp4`,
    })
      .fetch('GET', decodeURIComponent(urls[0].url), {
        //some headers ..
      })
      .then((res) => {
        console.log('The file saved to ', res.path());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '90%'}}
        onChangeText={(text) => setYoutubeURL(text)}
        value={youtubeURL}
      />
      <Button title={'Submit'} onPress={downloader} />
    </View>
  );
};

export default DownloadVideo;
