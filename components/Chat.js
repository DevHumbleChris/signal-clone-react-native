import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'

const Chat = () => {
  return (
    <View style={tw`flex-1`}>
      <ScrollView></ScrollView>
      <View>
        <TextInput
          placeholder="Message"
        />
        <TouchableOpacity>
          <Icon name="home" type='material-community' color="black" size="25" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Chat