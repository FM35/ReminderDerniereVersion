import React, { Component } from 'react';
import { StyleSheet, View, TextInput,TouchableOpacity, Text, Image } from 'react-native';

export default class LoginForm extends Component {
		render() {
	       return (
			<View style={styles.container}>
				 <TextInput 
				 underlineColorAndroid='transparent'
				 placeholder="email"
				 	style={styles.input} 
				 />
			  	 <TextInput
			  	 underlineColorAndroid='transparent'
			  	 placeholder="password"
					secureTextEntrer
				 	style={styles.input} 
				 	/>
				<View>
					<View style={styles.flecheContainer}>
					<TouchableOpacity style={styles.buttonFleche}>
					  <Image 
				  	  style={styles.Fleche}
				  	  source={require('./images/Fleche.png')}
				  	  />
				  	  </TouchableOpacity> 
				  	  </View>
				<TouchableOpacity style={styles.buttonText}>
					<Text style={styles.buttonText}>Forget your password ?</Text>
				</TouchableOpacity>
 			 	</View>
 			 	<View>
				<TouchableOpacity style={styles.buttonText2}>
					<Text style={styles.buttonText2}>Créer un compte</Text>
				</TouchableOpacity>
				</View>


			 </View>
			);
		}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,

	},
	input: {
		height: 60,
		backgroundColor: '#f5f5f5',
		marginTop:-30,
		marginBottom: 40,
		borderRadius: 15,
		paddingHorizontal: 10,
	},

	buttonText : {
		textAlign: 'center',
		marginBottom: 5,
		marginTop: 5,
		color: '#f5f5f5',
	},

	buttonText2 : {
		textAlign: 'center',
		color: '#f5f5f5',

	},

	flecheContainer: {
		alignItems: 'center',
		marginTop:-10,
	}



});










				  
