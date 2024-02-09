import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './store';
import { AirbnbRating } from '@rneui/themed';
function Home() {
  let authState = useSelector(state => state.auth);
  const dispatch = useDispatch();



  return (
    <>
      <TouchableOpacity onPress={() => dispatch(logIn(true))}>
      <AirbnbRating />
      </TouchableOpacity>
    </>

  )
}

export default Home