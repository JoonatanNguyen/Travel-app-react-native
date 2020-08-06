import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from '../styles'
import images from '../constants/images'
import galleryConstants from '../constants/galleryConstants'

export default function home() {
  const navigation = useNavigation()
  const [gallery] = useState(galleryConstants)

  const handleGoToPostPress = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.homeContainer}>
      <View>
        <ImageBackground
          source={{ uri: images.homeBackgroundImage }}
          style={styles.homeImageBackground}
          imageStyle={styles.homeImageStyle}
        >
          <View style={styles.darkOverlay} />
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Welcome!</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder={'Search Destination'}
              placeholderTextColor="#666"
            />
            <Feather
              name="search"
              size={22}
              color="#666"
              style={styles.searchIcon}
            />
          </View>
          <Feather name="menu" size={22} color="#fff" style={styles.menuIcon} />
          <Feather name="bell" size={22} color="#fff" style={styles.bellIcon} />
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={styles.topTrendingListContainer}>
                  <TouchableOpacity onPress={handleGoToPostPress}>
                    <Image source={item.image} style={styles.trendingImages} />
                    <View style={styles.imageOverlay} />
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
        <View style={styles.recentContainer}>
          <View style={styles.headingWrapper}>
            <Text style={styles.headingText}>Recently Viewed</Text>
            <Text style={styles.actionLabel}>View All</Text>
          </View>
          <Image
            source={{ uri: images.recentVisited }}
            style={styles.recentVisitedImage}
          />
          <View style={styles.recentVisitedMapPinWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <Feather
                name="map-pin"
                color="white"
                size={20}
                style={styles.imageLocationRecentIcon}
              />
              <Text style={styles.imageTextRecent}>Venice</Text>
            </View>
            <Text style={styles.imageDescription}>
              Venice, the capital of northern Italy's Veneto Region in the
              Adriatic Sea
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const testStyle = StyleSheet.create({})
