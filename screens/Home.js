import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	FlatList,
	TextInput,
	StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Home = ({ navigation }) => {
	const image = {
		uri:
			'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	};
	const [ gallery, setgallery ] = useState([
		{
			image: {
				uri:
					'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'
			},
			title: 'Switzerland',
			key: '1'
		},
		{
			image: {
				uri:
					'https://images.pexels.com/photos/234541/-ancient-meditation-architecture-234541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			},
			title: 'New Zeland',
			key: '2'
		},
		{
			image: {
				uri:
					'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
			},
			title: 'Rome',
			key: '3'
		},
		{
			image: {
				uri:
					'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
			},
			title: 'Tahiti',
			key: '4'
		}
	]);
	const recentImage = {
		uri:
			'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	};
	const goToPost = () => {
		navigation.navigate('Detail');
	};
	return (
		<ScrollView style={styles.container}>
			<View>
				<ImageBackground
					source={image}
					style={{ width: '100%', height: 270 }}
					imageStyle={{ borderBottomRightRadius: 65 }}
				>
					<View style={styles.darkOverlary} />
					<View style={styles.searchContainer}>
						<Text style={styles.bannerText}>Hi john,</Text>
						<Text style={styles.bannerCaption}>
							where would you like to go today?
						</Text>
					</View>
					<View>
						<TextInput
							style={styles.searchBox}
							placeholder="search destination"
							placeholderTextColor="#666"
						/>
						<Feather
							name="search"
							size={22}
							color="#666"
							style={{
								position: 'absolute',
								top: 30,
								right: 60
							}}
						/>
					</View>
					<Feather
						name="menu"
						size={22}
						color="#fff"
						style={{
							position: 'absolute',
							top: 30,
							left: 16
						}}
					/>
					<Feather
						name="bell"
						size={22}
						color="#fff"
						style={{
							position: 'absolute',
							top: 30,
							right: 16
						}}
					/>
				</ImageBackground>
			</View>

			<View style={{ padding: 16 }}>
				<Text style={{ fontSize: 22, fontWeight: 'bold' }}>
					Top Trending
				</Text>
			</View>
			<View>
				<FlatList
					data={gallery}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => {
						return (
							<View
								style={{
									paddingVertical: 20,
									paddingLeft: 16
								}}
							>
								<TouchableOpacity onPress={goToPost}>
									<Image
										source={item.image}
										style={{
											width: 150,
											marginRight: 8,
											height: 250,
											borderRadius: 10
										}}
									/>
									<View
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											right: 0,
											height: 250,
											borderRadius: 10,
											backgroundColor: '#000',
											opacity: 0.3
										}}
									/>
									<Feather
										name="map-pin"
										size={16}
										color="#fff"
										style={{
											position: 'absolute',
											bottom: 10,
											left: 10
										}}
									/>
									<Text
										style={{
											position: 'absolute',
											bottom: 10,
											left: 35,
											color: '#fff'
										}}
									>
										{item.title}
									</Text>
								</TouchableOpacity>
							</View>
						);
					}}
				/>
			</View>
			<View>
				<View
					style={{
						padding: 20,
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<Text style={{ fontSize: 22, fontWeight: 'bold' }}>
						Recently Viewed
					</Text>
					<Text
						style={{
							fontSize: 14,
							fontWeight: 'bold',
							color: '#ff2600'
						}}
					>
						View All
					</Text>
				</View>
				<View style={{ marginBottom: 40 }}>
					<Image
						source={recentImage}
						style={{
							width: '100%',
							height: 250,
							borderRadius: 10,
							width: '94%',
							alignSelf: 'center'
						}}
					/>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							padding: 16
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<Feather
								name="map-pin"
								color="white"
								size={20}
								style={{
									marginRight: 10,
									position: 'relative',
									top: 4
								}}
							/>
							<Text
								style={{
									fontSize: 22,
									color: '#fff',
									fontWeight: 'normal',
									marginBottom: 10,
									marginHorizontal: 10
								}}
							>
								Venice{' '}
							</Text>
						</View>
						<Text
							style={{
								fontSize: 14,
								color: '#fff',
								fontWeight: 'normal',
								marginBottom: 10,
								lineHeight: 26,
								marginHorizontal: 10,
								opacity: 0.9
							}}
						>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	darkOverlary: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		height: 270,
		backgroundColor: '#000',
		opacity: 0.2,
		borderBottomRightRadius: 65
	},
	searchContainer: {
		paddingTop: 100,
		paddingLeft: 16
	},
	bannerText: {
		fontSize: 38,
		fontWeight: 'bold',
		color: 'white'
	},
	bannerCaption: {
		fontSize: 16,
		color: '#fff',
		fontWeight: 'normal'
	},
	searchBox: {
		marginTop: 16,
		backgroundColor: '#fff',
		paddingLeft: 24,
		padding: 12,
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		width: '90%'
	}
});
export default Home;
