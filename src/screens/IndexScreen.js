import React, { useContext } from 'react';
import { View, Text, StyleSheet , FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';
import {Touchable} from "react-native-web";

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(BlogContext);

    return (
        <View>
        <FlatList
            data={state}
            keyExtractor={blogPost =>blogPost.id}
            renderItem={( {item} ) => {
                return(
                <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        {item.title} - {item.id}
                    </Text>
                    <TouchableOpacity onPress={() =>
                        {
                            console.log(`id = ${item.id}`)
                            deleteBlogPost(item.id)
                        }
                        }
                    >
                        <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
                )
            }}/>
    </View>
    );
};

//For ref -> https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707524#content
// this is basically called whenever our index screen is abt to displayed by react navigation.
// react-navigation will directly call this function and it will inspect the object returned.
// this function is automatically called by the same props as that received by IndexScreen
IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate('Create')}}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title:{
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;