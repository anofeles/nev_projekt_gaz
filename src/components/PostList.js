import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Post } from './Post';

export const PostList = ({ data = [], onOpen, task }) => {
  if (!data.length) {
    return (
      <View style={styles.wraper}>
        <Text style={styles.noItem}>ინფორმაცია არ მოიძებნა</Text>
      </View>
    );
  }
  return (
    <View style={styles.wraper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} onOpen={onOpen} task={task} />
        )}
      />
      {/* <Button title="Go to post" onPress={goToPost} />  */}
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    padding: 10
  },
  noItem: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18
  }
});
