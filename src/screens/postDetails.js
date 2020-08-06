import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from '../styles'
import images from '../constants/images'
import galleryConstant from '../constants/galleryConstants'

export default function postDetails() {
  const navigation = useNavigation()
  const [gallery] = useState(galleryConstant)

  const handleGoBackPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.postImageContainer}>
      <ImageBackground
        source={{ uri: images.switzerland }}
        style={styles.postImageWrapper}
        imageStyle={styles.postImage}
      >
        <Text style={styles.tagLine}>Discover Switzerland</Text>
        <Text style={styles.placeName}>
          Explore the scenic beauty of Switzerland
        </Text>
        <TouchableOpacity onPress={handleGoBackPress} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favouriteButton}>
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookTicketButton}>
          <Text style={styles.bookTicketText}>Book Now</Text>
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>About the place</Text>
        </View>
        <Text style={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <View>
          <View style={styles.headingWrapper}>
            <Text style={styles.headingText}>Suggested Places</Text>
          </View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image source={item.image} style={styles.suggestionImage} />
                    <View style={styles.darkOverlaySuggest} />
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.suggestImageLocationIcon}
                    />
                    <Text style={styles.suggestImageLocationText}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
