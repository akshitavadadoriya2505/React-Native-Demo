import React, {Component, useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import YouTube from 'react-native-youtube';
import DownloadVideo from '../downloadVideo';
import ytdl from 'react-native-ytdl';
import RNFetchBlob from 'rn-fetch-blob';

const SignIn = () => {
  const [youtubeURL, setYoutubeURL] = useState('');
  const [isDownloadLinkAvailable, setIsDownloadLinkAvailable] = useState(false);
  const [youtubeInfo, setYoutubeInfo] = useState({});
  const urlInfo = async () => {
    let info = await ytdl.getInfo(youtubeURL);
    let videoId = ytdl.getVideoID(youtubeURL);
    console.log('videoId', videoId);
    console.log(info);
    setYoutubeInfo(info.videoDetails);
    setYoutubeURL(videoId);
    setIsDownloadLinkAvailable(true);
  };
  const downloader = async () => {
    // const urls = await ytdl(youtubeURL, {
    //   filter: (format) => format.container === 'mp4',
    // });
    // let dirs = RNFetchBlob.fs.dirs;
    // RNFetchBlob.config({
    //   fileCache: true,
    //   appendExt: 'mp4',
    //   path: dirs.SDCardApplicationDir + `/${youtubeInfo.title}.mp4`,
    // })
    //   .fetch('GET', decodeURIComponent(urls[0].url), {
    //     //some headers ..
    //   })
    //   .then((res) => {
    //     alert('Saved successfully');
    //     console.log('The file saved to ', res.path());
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: isDownloadLinkAvailable ? 'flex-start' : 'center',
      }}>
      {isDownloadLinkAvailable ? (
        <>
          <YouTube
            apiKey={'AIzaSyCFpmJFqPoCg_rlHL2nVQN9wPsDEAcZbTg'}
            videoId={youtubeURL}
            play
            fullscreen
            loop
            // onReady={e => this.setState({ isReady: true })}
            // onChangeState={e => this.setState({ status: e.state })}
            // onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={(e) => console.log('e', e)}
            style={{alignSelf: 'stretch', height: 300}}
          />
          <View style={{}}>
            <Text>Title: {youtubeInfo.title}</Text>
            <Text>ownerChannelName: {youtubeInfo.ownerChannelName}</Text>
            <Text>uploadDate: {youtubeInfo.uploadDate}</Text>
            <Text>Views: {youtubeInfo.viewCount}</Text>
          </View>
          <Button title={'Download'} onPress={() => downloader()} />
          <Button
            title={'Back'}
            onPress={() => {
              youtubeURL('');
              setIsDownloadLinkAvailable(false);
            }}
          />
        </>
      ) : (
        <>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '90%',
            }}
            onChangeText={(text) => setYoutubeURL(text)}
            value={youtubeURL}
          />
          <Button
            title={'Submit'}
            onPress={() => {
              urlInfo();
            }}
          />
        </>
      )}
    </View>
  );
};

export default SignIn;
