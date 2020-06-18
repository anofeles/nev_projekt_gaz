import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import * as Device from 'expo-device';
import {PostList} from '../components/PostList';

export const MyTasks = ({navigation}) => {

    const emai = Device.osBuildId;
    const openPostHandler = post => {
        navigation.navigate('post', {
            postId: post.id
        });
    };
    // console.log(emai);

    const bookedPosts = useSelector(state => state.post.emai);
    const taskPosts = useSelector(state => state.post.task);

    return (
        <View>
            <PostList data={bookedPosts} onOpen={openPostHandler} task={'booked'}/>
            <PostList data={taskPosts} onOpen={openPostHandler} task={'task'}/>
        </View>
    );
};

styles = StyleSheet.create({
    raw: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
