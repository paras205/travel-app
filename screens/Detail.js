import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Detail = ({ navigation }) => {
	const image = {
		uri:
			'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	};
	return (
		<ScrollView>
			<ImageBackground
				source={image}
				style={styles.image}
				imageStyle={{
					borderBottomRightRadius: 30,
					borderBottomLeftRadius: 30
				}}
			>
				<Text style={styles.bannerTitle}>Discover Switzerland</Text>
				<Text style={styles.bannerCaption}>
					Explore the scenic beauty of Switzerland
				</Text>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: 50,
						left: 20,
						backgroundColor: '#ff6200',
						padding: 10,
						borderRadius: 40
					}}
				>
					<Feather name="arrow-left" size={22} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: 50,
						right: 20,
						backgroundColor: '#ff6200',
						padding: 10,
						borderRadius: 40
					}}
				>
					<Feather name="heart" size={22} color="#fff" />
				</TouchableOpacity>
			</ImageBackground>
			<TouchableOpacity style={styles.bookNowBtn}>
				<Text style={styles.bookNowText}>Book Now</Text>
			</TouchableOpacity>
			<View>
				<Text
					style={{
						padding: 14,
						fontSize: 22,
						fontWeight: 'bold'
					}}
				>
					About the place
				</Text>
				<Text
					style={{
						paddingHorizontal: 14,
						fontSize: 14,
						lineHeight: 22,
						color: '#666',
						textAlign: 'justify'
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum
				</Text>
				<Text
					style={{
						paddingHorizontal: 14,
						fontSize: 14,
						lineHeight: 22,
						color: '#666',
						textAlign: 'justify',
						marginTop: 20,
						marginBottom: 20
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum
				</Text>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	image: {
		height: 380,
		justifyContent: 'flex-end'
	},
	bannerTitle: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 14,
		marginVertical: 6
	},
	bannerCaption: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 14,
		marginBottom: 30
	},
	bookNowBtn: {
		backgroundColor: '#ff6200',
		position: 'absolute',
		right: 12,
		top: 350,
		padding: 16,
		borderRadius: 40,
		elevation: 5
	},
	bookNowText: {
		color: 'white',
		fontSize: 14
	}
});
export default Detail;
