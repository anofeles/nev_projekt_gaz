import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {THEME} from "../theme";

export const AppTextInput = ({value, onChangeText, color = THEME.MAIN_COLOR}) => {
    return (
        <View style={{backgroundColor: color }}>
            <TextInput
                style={{ ...styles.input}}
                onChangeText={onChangeText}
                value={value}
                placeholder="შეიყვანთ ტექატი"
                autoCorrect={false}
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    }
});
