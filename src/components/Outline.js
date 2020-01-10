import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { grapql, useStaticQuery } from 'gatsby';
import Header from './Header';

const Outline = ({ children }) => {
    const data = useStaticQuery(grapql`
    query TitleQuery {
        site {
            siteData {
                title
            }
        }
    }
    `)

    return (
        <View>
        <Header title={data.site.siteData.title}/>
        <View style={styles.topView}>
            {children}
            <Text>
                Welcome to my portfolio site. Today is { new Date().getFullYear()}
            </Text>
        </View>
        </View>
    )
}

export default Outline;

const styles = StyleSheet.create({
    topView: {
        marginHorizontal: `auto`,
          maxWidth: 960,
          paddingBottom: `1.0875rem`,
          paddingHorizontal: `1.45rem`,
          paddingTop: 0,
    }
})