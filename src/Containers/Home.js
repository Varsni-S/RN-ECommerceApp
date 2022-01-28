import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faBars,
  faBinoculars,
  faMale,
  faSearch,
  faShoppingBag,
  faSnowflake,
  faSnowFlakeO,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'

const Home = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const { Images } = useTheme()

  return (
    <ScrollView>
      {/* Header Icons */}
      <View style={[Layout.row, Gutters.largeTMargin, Gutters.largeLMargin]}>
        <FontAwesomeIcon icon={faBars} size={30} color={'#2e2e1f'} />
        <View style={[Layout.row, Gutters.largeLMargin, { marginLeft: 220 }]}>
          <FontAwesomeIcon icon={faSearch} size={25} color={'#2e2e1f'} />
          <FontAwesomeIcon
            icon={faShoppingBag}
            size={25}
            color={'#2e2e1f'}
            style={{ marginLeft: 28 }}
          />
        </View>
      </View>

      {/*Heading */}
      <View style={[Gutters.smallTMargin, Gutters.largeLMargin]}>
        <Text style={[Fonts.titleRegular]}>Discover</Text>
        <Text
          style={[Gutters.smallTMargin, Fonts.textSmall, { color: '#808080' }]}
        >
          Fashion is all about beauty
        </Text>
      </View>

      {/* Discover List */}
      <View
        style={[
          Layout.row,
          Gutters.largeTMargin,
          Gutters.largeLMargin,
          Gutters.largeRMargin,
        ]}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={[
              Layout.centre,
              Layout.row,
              Gutters.largeRMargin,
              Gutters.smallTPadding,
              Gutters.smallBPadding,
              Gutters.smallLPadding,
              Gutters.smallRPadding,
              { backgroundColor: '#b3d9ff', borderRadius: 8 },
            ]}
          >
            <FontAwesomeIcon icon={faSnowflake} size={30} color={'#1a75ff'} />
            <Text
              style={[
                Fonts.textRegular,
                Gutters.smallLMargin,
                { fontWeight: '500' },
              ]}
            >
              Winter Collection
            </Text>
          </View>

          <View
            style={[
              Layout.centre,
              Layout.row,
              Gutters.largeRMargin,
              Gutters.smallTPadding,
              Gutters.smallBPadding,
              Gutters.smallLPadding,
              Gutters.smallRPadding,
              { backgroundColor: '#ffd9b3', borderRadius: 10 },
            ]}
          >
            <FontAwesomeIcon icon={faBinoculars} size={30} color={'#2e2e1f'} />
            <Text
              style={[
                Fonts.textRegular,
                Gutters.smallLMargin,
                { fontWeight: '500' },
              ]}
            >
              Trousers
            </Text>
          </View>

          <View
            style={[
              Layout.centre,
              Layout.row,
              Gutters.largeRMargin,
              Gutters.smallTPadding,
              Gutters.smallBPadding,
              Gutters.smallLPadding,
              Gutters.smallRPadding,
              { backgroundColor: '#ffb3ff', borderRadius: 8 },
            ]}
          >
            <FontAwesomeIcon icon={faMale} size={30} color={'#e6004c'} />
            <Text
              style={[
                Fonts.textRegular,
                Gutters.smallLMargin,
                { fontWeight: '500' },
              ]}
            >
              T-Shirts
            </Text>
          </View>

          <View
            style={[
              Layout.centre,
              Layout.row,
              Gutters.smallTPadding,
              Gutters.smallBPadding,
              Gutters.smallLPadding,
              Gutters.smallRPadding,
              { backgroundColor: '#ffcc66', borderRadius: 8 },
            ]}
          >
            <FontAwesomeIcon icon={faUserSecret} size={30} color={'#e65c00'} />
            <Text
              style={[
                Fonts.textRegular,
                Gutters.smallLMargin,
                { fontWeight: '500' },
              ]}
            >
              Jumper
            </Text>
          </View>
        </ScrollView>
      </View>

      {/* SubHeading */}
      <View style={[Gutters.largeTMargin, Gutters.largeLMargin, Layout.row]}>
        <Text style={[Fonts.titleSmall, { fontSize: 28 }]}>
          Popular Products
        </Text>
        <Text
          style={[
            Gutters.smallTMargin,
            Gutters.largeLMargin,
            Fonts.textSmall,
            { color: '#808080', fontWeight: 'bold', marginLeft: 45 },
          ]}
        >
          See More
        </Text>
      </View>

      {/* PopularList */}
      <View
        style={[
          Layout.row,
          Gutters.largeTMargin,
          Gutters.largeLMargin,
          Gutters.largeRMargin,
        ]}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* product1 */}

          <View style={[Gutters.smallLMargin]}>
            <TouchableOpacity onPress={() => navigation.navigate('AddCart')}>
              <Image
                source={Images.pic1}
                style={{ width: '100%', height: 150, borderRadius: 15 }}
              />
            </TouchableOpacity>

            <View style={[Layout.row]}>
              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    Gutters.smallLMargin,
                    Gutters.smallTMargin,
                    { fontWeight: '500' },
                  ]}
                >
                  Cotton Pant
                </Text>
                <Text
                  style={[
                    Fonts.textSmall,
                    Gutters.smallLMargin,

                    { color: '#808080', fontSize: 15 },
                  ]}
                >
                  For Women
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  onPress={() => navigation.navigate('AddCart')}
                  icon={faShoppingBag}
                  size={20}
                  color={'#111109'}
                  style={[Gutters.smallTMargin, { marginLeft: 50 }]}
                />
                <Text
                  style={[
                    Fonts.textRegular,
                    Gutters.largeLMargin,

                    { fontWeight: '500' },
                  ]}
                >
                  $58.00
                </Text>
              </View>
            </View>
          </View>

          {/* product2 */}
          <View style={[Gutters.largeLMargin]}>
            <Image
              source={Images.pic2}
              style={{ width: '100%', height: 150, borderRadius: 15 }}
            />
            <View style={[Layout.row]}>
              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    Gutters.smallLMargin,
                    Gutters.smallTMargin,
                    { fontWeight: '500' },
                  ]}
                >
                  Slick Shirt
                </Text>
                <Text
                  style={[
                    Fonts.textSmall,
                    Gutters.smallLMargin,

                    { color: '#808080', fontSize: 15 },
                  ]}
                >
                  For Men
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  onPress={() => navigation.navigate('AddCart')}
                  icon={faShoppingBag}
                  size={20}
                  color={'#111109'}
                  style={[Gutters.smallTMargin, { marginLeft: 50 }]}
                />
                <Text
                  style={[
                    Fonts.textRegular,
                    Gutters.smallLMargin,

                    { fontWeight: '500' },
                  ]}
                >
                  $60.00
                </Text>
              </View>
            </View>
          </View>

          {/* product3 */}
          <View style={[Gutters.largeLMargin]}>
            <Image
              source={Images.pic4}
              style={{ width: '100%', height: 150, borderRadius: 25 }}
            />
            <View style={[Layout.row]}>
              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    Gutters.smallLMargin,
                    Gutters.smallTMargin,
                    { fontWeight: '500' },
                  ]}
                >
                  Formal
                </Text>
                <Text
                  style={[
                    Fonts.textSmall,
                    Gutters.smallLMargin,

                    { color: '#808080', fontSize: 15 },
                  ]}
                >
                  For Men
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  onPress={() => navigation.navigate('AddCart')}
                  icon={faShoppingBag}
                  size={20}
                  color={'#111109'}
                  style={[Gutters.smallTMargin, { marginLeft: 50 }]}
                />
                <Text
                  style={[
                    Fonts.textRegular,
                    Gutters.largeLMargin,

                    { fontWeight: '500' },
                  ]}
                >
                  $90.00
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* SubHeading 2*/}
      <View style={[Gutters.largeTMargin, Gutters.largeLMargin, Layout.row]}>
        <Text style={[Fonts.titleSmall, { fontSize: 28 }]}>For You</Text>
        <Text
          style={[
            Gutters.smallTMargin,
            Gutters.largeLMargin,
            Fonts.textSmall,
            { color: '#808080', fontWeight: 'bold', marginLeft: 165 },
          ]}
        >
          See More
        </Text>
      </View>

      {/* ForYou List */}
      <View
        style={[
          Layout.row,
          Gutters.smallTMargin,
          Gutters.largeLMargin,
          Gutters.largeRMargin,
          Gutters.largrBPadding,
          { marginBottom: 20 },
        ]}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* ForYou Product 1 */}
          <View
            style={[
              Layout.row,
              Gutters.smallTMargin,
              Gutters.smallLMargin,
              {
                backgroundColor: '#d9d9d9',
                width: 250,
                height: 90,
                borderRadius: 8,
              },
            ]}
          >
            <View
              style={[Layout.row, Gutters.smallTMargin, Gutters.smallLMargin]}
            >
              <View style={[Layout.row, Gutters.smallTMargin]}>
                <Image
                  source={Images.pic3}
                  style={{ width: '48%', height: '75%', borderRadius: 8 }}
                />
              </View>

              <View style={{ marginLeft: -30 }}>
                <Text style={[Fonts.textRegular]}>Jens Jacket</Text>
                <Text style={[Fonts.textRegular]}>$58.00</Text>
              </View>

              <View style={[Gutters.smallTMargin]}>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={20}
                  color={'#111109'}
                  style={[Gutters.smallTMargin, Gutters.smallLMargin]}
                />
              </View>
            </View>
          </View>

          {/* ForYou Product 2 */}
          <View
            style={[
              Layout.row,
              Gutters.smallTMargin,
              Gutters.largeLMargin,
              {
                backgroundColor: '#d9d9d9',
                width: 250,
                height: 90,
                borderRadius: 8,
              },
            ]}
          >
            <View
              style={[Layout.row, Gutters.smallTMargin, Gutters.smallLMargin]}
            >
              <View style={[Layout.row, Gutters.smallTMargin]}>
                <Image
                  source={Images.pic6}
                  style={{ width: '50%', height: '75%', borderRadius: 8 }}
                />
              </View>

              <View style={{ marginLeft: -30 }}>
                <Text style={[Fonts.textRegular]}>Suit Jacket</Text>
                <Text style={[Fonts.textRegular]}>$45.00</Text>
              </View>

              <View style={[Gutters.smallTMargin]}>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={20}
                  color={'#111109'}
                  style={[Gutters.smallTMargin, Gutters.smallLMargin]}
                />
              </View>
            </View>
          </View>

          {/* ForYou Product 3 */}
          <View
            style={[
              Layout.row,
              Gutters.smallTMargin,
              Gutters.largeLMargin,
              {
                backgroundColor: '#d9d9d9',
                width: 250,
                height: 90,
                borderRadius: 8,
              },
            ]}
          >
            <View
              style={[Layout.row, Gutters.smallTMargin, Gutters.smallLMargin]}
            >
              <View style={[Layout.row, Gutters.smallTMargin]}>
                <Image
                  source={Images.pic5}
                  style={{ width: '48%', height: '75%', borderRadius: 8 }}
                />
              </View>

              <View style={{ marginLeft: -30 }}>
                <Text style={[Fonts.textRegular]}>Trendy Shirt</Text>
                <Text style={[Fonts.textRegular]}>$65.00</Text>
              </View>

              <View style={[Gutters.smallTMargin]}>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={20}
                  color={'#111109'}
                  style={[Gutters.smallTMargin, Gutters.smallLMargin]}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Home
