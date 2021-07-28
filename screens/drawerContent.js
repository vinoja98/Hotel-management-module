import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    // const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Icon 
                                name="face-outline" 
                                color="#03498f"
                                size={50}
                                />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Hi</Title>
                                <Caption style={styles.title}>Manager</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Welcome to</Paragraph>
                                {/* <Caption style={styles.caption}>to</Caption> */}
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Galaxy Rest</Paragraph>
                                {/* <Caption style={styles.caption}>Rest</Caption> */}
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color="#03498f"
                                size={size}
                                />
                            )}
                            label="Home"
                            labelStyle={{color:'#08b8e1',fontFamily:'nunito-bold'}}
                            onPress={() => {props.navigation.navigate('Navigator')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color="#03498f"
                                size={size}
                                />
                            )}
                            label="Profile"
                            labelStyle={{color:'#08b8e1',fontFamily:'nunito-bold'}}
                            // onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="offer" 
                                color="#03498f"
                                size={size}
                                />
                            )}
                            label="Special Offers"
                            labelStyle={{color:'#08b8e1',fontFamily:'nunito-bold'}}
                            onPress={() => {props.navigation.navigate('Navi2')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color="#03498f"
                                size={size}
                                />
                            )}
                            label="Room Bookings"
                            labelStyle={{color:'#08b8e1',fontFamily:'nunito-bold'}}
                            onPress={() => {props.navigation.navigate('Navi3')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color="#03498f"
                                size={size}
                                />
                            )}
                            label="Review Details"
                            labelStyle={{color:'#08b8e1',fontFamily:'nunito-bold'}}
                            onPress={() => {props.navigation.navigate('Navi')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color="#03498f"
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{color:'#08b8e1',fontFamily:'nunito-bold'}}
                    // onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    // drawerContent: {
    //   flex: 1,
    // },
    drawerItem:{
        fontFamily:'nunito-bold',
        color:'#08b8e1',
        fontSize: 16,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontFamily:'nunito-bold',
      color:'#08b8e1',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily:'nunito-regular',
      color:'#03498f'

    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      fontFamily:'nunito-regular',
      color:'#03498f'
    },
    drawerSection: {
      marginTop: 15,
      fontFamily:'nunito-regular'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
