import React, {useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {myInfoTask} from "../stor/actopns/post";

export const MyInfo = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myInfoTask());
  }, [dispatch]);

  const allPost = useSelector(state => state.post.myinfo);

  return (
    <View style={styles.raw}>
      {
        allPost.map((item, key) => (
            <TouchableOpacity key={key}>
              <Text > id: {item.id} </Text>
              <Text > name: {item.name} </Text>
              <Text > fname: {item.fname} </Text>
              <Text > perNumber: {item.perNumber} </Text>
              <Text > task: {item.task} </Text>
            </TouchableOpacity>

        ))
      }
      <Text>{allPost.name}</Text>
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
