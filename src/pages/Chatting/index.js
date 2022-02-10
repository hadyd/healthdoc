import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {fonts} from '../../utils';

const Chatting = () => {
  return (
    <View>
      <Header title="Nairobi Putri Hayza" type="dark-profile" />
      <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    marginVertical: 20,
    textAlign: 'center',
  },
});
