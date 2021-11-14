import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Context as BlogContext} from "../context/BlogContext";

const TestComponent = () => {
    const {state} = useContext(BlogContext);
    console.log(`rendered with data = ${JSON.stringify(state)}`)
    return (
        <View>
            <Text>
                This is test
            </Text>
        </View>
    )
}

export default TestComponent;