import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ILCatObat,
  ILCatPsikiater,
  ILCatUmum,
  ILCatGigi,
  ILCatAnak,
} from '../../../assets';
import {fonts, colors} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter dumum') {
      return <ILCatUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <ILCatPsikiater style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <ILCatObat style={styles.illustration} />;
    }
    if (category === 'dokter gigi') {
      return <ILCatGigi style={styles.illustration} />;
    }
    if (category === 'dokter anak') {
      return <ILCatAnak style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 16,
    marginTop: 4,
    alignSelf: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
