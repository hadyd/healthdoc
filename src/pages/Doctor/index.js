import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components/molecules';

const Doctor = () => {
  return (
    <View>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
      <Text>Doctor Page</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctor</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
