import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import Input from '../components/Input'

const STORAGE_KEY = 'TESTKEY'

const Storage = () => {
  const [localText, setLocalText] = useState('Initial state')

  const load = async () => {
    try {
      const text = await AsyncStorage.getItem(STORAGE_KEY)
      if (text !== null) {
        setLocalText(text)
      }
    } catch (e) {
      console.error('Failed to load text.', e)
    }
  }

  useEffect(() => {
    load()
  })

  const save = async (text) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, text)
      setLocalText(text)
    } catch (e) {
      console.error('Failed to save text', e)
    }
  }

  return (
    <View>
      <Input
        placeholder={'Type some data to save locally!'}
        onSubmitEditing={save}
      />
      <Text>{localText}</Text>
    </View>
   );
}

export default Storage