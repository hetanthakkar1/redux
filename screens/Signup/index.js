import React from "react";
import { BackHandler, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/index";
import Myform from "./form/index";
import firebase from "firebase";
import firebaseConfig from "../helper/firbaseconfig/firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class Signup extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    handleBackButton = () => {
      this.props.navigation.navigate("Login");
      return true;
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: "#003f5c" }}>
        <Provider store={store}>
          <Myform />
        </Provider>
      </View>
    );
  }
}
