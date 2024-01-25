import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

export default function MainAppbar() {
  return (
    <Appbar.Header
    mode="center-aligned"
    elevated={true}
    >
<Appbar.Content title ={props.title} />
    </Appbar.Header>
  )
}