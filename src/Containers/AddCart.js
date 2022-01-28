import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'

import { useTheme } from '@/Hooks'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const AddCart = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const { Images } = useTheme()
  return (
    <ScrollView>
      {/* Image */}
      <View>
        <ImageBackground
          source={Images.pic1}
          style={{ width: 400, height: 480 }}
        >
          <View
            style={[
              Layout.row,
              Gutters.largeTMargin,
              Gutters.largeLMargin,
              Gutters.smallBPadding,
            ]}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={25}
              color={'#111109'}
              onPress={() => navigation.goBack('Home')}
            />
            <FontAwesomeIcon
              icon={faShoppingBag}
              size={25}
              color={'#111109'}
              style={{ marginLeft: 280 }}
            />
          </View>
        </ImageBackground>
      </View>

      {/*Heading */}
      <View style={[Gutters.smallTMargin, Gutters.smallLMargin, Layout.row]}>
        <Text style={[Fonts.titleSmall]}>COTTON PANTS</Text>

        <Text
          style={[
            Gutters.largeLMargin,
            {
              backgroundColor: '#0077b3',
              height: 30,
              width: 30,
              borderRadius: 30,
              marginLeft: 60,
            },
          ]}
        ></Text>

        <Text
          style={[
            Gutters.smallLMargin,
            {
              backgroundColor: '#ffcc00',
              height: 30,
              width: 30,
              borderRadius: 30,
            },
          ]}
        ></Text>
      </View>

      {/*Size */}
      <View style={[Gutters.smallTMargin, Gutters.largeLMargin]}>
        <Text style={[Fonts.textRegular, { color: '#808080' }]}>SIZE</Text>
      </View>

      {/*Size List*/}
      <View
        style={[
          Layout.centre,
          Layout.row,
          Gutters.smallTPadding,
          Gutters.smallBPadding,
          Gutters.largeLPadding,
          Gutters.smallRPadding,
        ]}
      >
        <Text
          style={[
            Fonts.textRegular,
            Gutters.smallLPadding,
            Gutters.smallRPadding,
            { color: '#808080' },
          ]}
        >
          M
        </Text>

        <Text
          style={[
            Gutters.largeLMargin,
            Fonts.textRegular,
            Gutters.largeLMargin,

            Fonts.textCenter,
            {
              backgroundColor: '#2e2e1f',
              height: 30,
              width: 30,
              borderRadius: 30,
              color: '#f5f5f0',
            },
          ]}
        >
          S
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            Gutters.largeLPadding,
            Gutters.smallRPadding,
            { color: '#808080', marginLeft: 10 },
          ]}
        >
          L
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            Gutters.largeLPadding,
            Gutters.smallRPadding,
            { color: '#808080' },
          ]}
        >
          XL
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            Gutters.largeLPadding,

            { color: '#808080' },
          ]}
        >
          XXL
        </Text>
      </View>

      {/*Price Amt*/}
      <View style={[Layout.centre, Layout.row, Gutters.smallTMargin]}>
        <View style={[Gutters.largeLMargin]}>
          <Text
            style={[
              Fonts.textRegular,
              { color: '#808080', textDecorationLine: 'line-through' },
            ]}
          >
            $60
          </Text>
          <Text style={[Fonts.titleSmall, Gutters.largeLMargin]}>$58</Text>
        </View>

        <View
          style={[
            Gutters.largeLMargin,
            Gutters.smallTMargin,
            {
              backgroundColor: '#2e2e1f',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginLeft: 100,
            },
          ]}
        >
          <Text
            style={[
              Fonts.textRegular,
              Gutters.largeTPadding,
              Gutters.largeBPadding,
              Gutters.largeLMargin,
              Gutters.largeRMargin,
              { fontWeight: 'bold', color: '#f5f5f0' },
            ]}
          >
            Add to Cart
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
export default AddCart
