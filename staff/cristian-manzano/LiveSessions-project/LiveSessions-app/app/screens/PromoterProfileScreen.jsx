import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function PromoterProfileScreen({ onGoToEditProfile, onGoToPetitions, onLogOut, onGoToSearch, onGoToCreateEvent, user }) {
    if (user.role === 'PROMOTER')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <ScrollView>

                      

                            <View style={styles.artistProfileHeader}>
                                <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />


                                <TouchableOpacity onPress={onLogOut}>
                                    <Image style={styles.logoutIcon} source={require('../assets/logout-icon.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.artistProfileBody}>

                                <TouchableOpacity onPress={onGoToEditProfile}>
                                    <Avatar.Image style={styles.profileAvatar} size={120} source={require('../assets/default-profile-image.png')} />
                                    <Text style={styles.artistName}>@{user.artistName}</Text>
                                </TouchableOpacity>

                                <View style={styles.linkContainer}>

                                    <View style={styles.findMeContainer}>
                                        <Text style={styles.findMeText}>Find me on: </Text>
                                        <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                    </View>

                                    <TouchableOpacity onPress={() => Linking.openURL(user.youtubeLink)}>
                                        <Image style={styles.links} source={require('../assets/youtube-icon_2.png')} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <TouchableOpacity onPress={onGoToSearch}>
                                <Text style={styles.petitionsButton}>Search!</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onGoToCreateEvent}>
                                <Text style={styles.petitionsButton}>Create Event :)</Text>
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress={onGoToPetitions}>
                                <Text style={styles.petitionsButton}>Petitions</Text>
                            </TouchableOpacity>


                      
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60
    },

    logoutIcon: {
        marginTop: "30%",
        width: 40,
        height: 40
    },

    profileAvatar: {
        backgroundColor: "gray"
    },

    petitionsButton: {
        fontSize: 25,
        marginTop: "15%",
        alignSelf: "stretch",
        textAlign: "center",
        height: 40,
        borderRadius: 50,
        justifyContent: "flex-end",
        color: "#343a40",
        tintColor: "#343a40",
        shadowRadius: 50,
        borderWidth: 1
    },

    artistProfileContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    artistProfileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch"
    },

    artistProfileBody: {
        marginTop: "8%",
        alignItems: "center",
    },

    linkContainer: {
        marginTop: "10%",
        alignItems: "center",

    },

    artistName: {
        textAlign: "center",
        marginTop: "3%",
        fontSize: 30
    },

    findMeContainer: {
        flexDirection: "row"
    },

    findMeText: {
        marginRight: "5%",

        fontSize: 25
    },

    instagramLogo: {
        width: 30,
        height: 30,
    },

    links: {
        marginTop: "15%",
        width: 200,
        height: 60,
    }

})

export default PromoterProfileScreen;