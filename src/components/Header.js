import React from 'react';
import { Link } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.topView}>
            {title}
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({

})