import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="PIlih Dokter Anak" />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
