import React, {useContext} from "react";
import {StyleSheet} from 'react-native';
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import {View} from "react-native";
import TestComponent from "../components/TestComponent";
import TestClassComponent from "../components/TestClassComponent";

const CreateScreen = ({navigation}) => {
    const {state, addBlogPost} = useContext(Context);

    return (
        <View>
            <TestComponent/>
            <TestClassComponent />
            <BlogPostForm onSubmit={(title, content) => {
                addBlogPost(title, content, () => {
                    console.log('clicked');
                })
            }}/>
        </View>

    )
}

const styles = StyleSheet.create({});

export default CreateScreen;