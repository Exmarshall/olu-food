import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';

const SignIn = () => {
  return (
      <View className="gap-10 bg-white rounded-lg p-5 mt-5">
          <CustomInput
              placeholder='Enter Email'
              value={''}
              onChangeText={() => { }}
              label='Email'
              keyboardType='email-address'
          />

          <CustomInput
              placeholder='Enter Password'
              value={''}
              onChangeText={() => { }}
              label='Password'
              secureTextEntry={true}
              
          />
          <CustomButton title='Sign In'/>

    </View>
  )
}

export default SignIn