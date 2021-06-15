import { combineReducers, conbineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Titanic Theme', duration: '3:00' },
    { title: 'Edward Maya Present Voilet Lights', duration: '2:00' },
    { title: 'Down Jay Sean', duration: '4:30' },
    { title: 'Show me the meaning of being lonely', duration: '3:10' },
  ];
};

const selectedSongreducer = (selectedSong = null, action) {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongreducer
});
