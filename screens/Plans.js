import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import plans from "../data/plans";
import { Entypo } from "@expo/vector-icons";
import { useStripe } from "@stripe/stripe-react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const Plans = () => {
  const [selected, setSelected] = useState([]);
  const route = useRoute();
  const email = route.params.email;
  const password = route.params.password;
  const [price, setPrice] = useState();
  console.log(selected);
  const data = plans;
  const stripe = useStripe();
  const subscribe = async () => {
    const response = await fetch("http://192.168.100.6:8080/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(price * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "Payment request failed:",
        response.status,
        response.statusText
      );
      return;
    }

    const data = await response.json();

    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      merchantDisplayName: "Flixapp",
      paymentIntentClientSecret: clientSecret,
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    else {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log(userCredentials);
          const user = userCredentials.user;
          console.log(user.email);
        }
      );
    }
  };
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              marginBottom: 16,
            }}
          >
            Choose the plan that's right for you
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <AntDesign name="check" size={20} color="#e50914" />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "400",
              }}
            >
              No commitments, cancel anytime.
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <AntDesign name="check" size={20} color="#e50914" />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "400",
              }}
            >
              Everything on Netflix for one low price.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 16,
            }}
          >
            <AntDesign name="check" size={20} color="#e50914" />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "400",
              }}
            >
              No ads and no extra fees. Ever.
            </Text>
          </View>

          {data.map((item, index) => (
            <Pressable
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              style={
                selected.includes(item.name)
                  ? {
                      borderRadius: 10,
                      borderColor: "#e50914",
                      borderWidth: 3,
                      padding: 15,
                      marginBottom: 16,
                    }
                  : {
                      borderRadius: 10,
                      borderColor: "#e50914",
                      borderWidth: 1,
                      padding: 15,
                      marginBottom: 16,
                    }
              }
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#e50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <Text style={{ fontWeight: "600" }}>
                  Monthly price: Ksh {item.price.toLocaleString()}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: "gray", fontWeight: "600" }}>
                    Video and sound quality: {item.videoQuality}
                  </Text>
                  <Text style={{ fontWeight: "600" }}>
                    Resolution: {item.resolution}
                  </Text>
                </View>

                <Fontisto name="netflix" size={24} color="black" />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 16,
                }}
              >
                <Text>Supported devices</Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  {item.devices.map((device) => (
                    <Entypo name={device.name} size={26} color="#e50914" />
                  ))}
                </View>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ width: "65%" }}>
                  Devices your household can watch at the same time
                </Text>

                <Text>{item.numberOfDevices}</Text>
              </View>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Download devices</Text>
                <Text>{item.downloadDevices}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#e50914",
            borderTopColor: "white",
            borderTopWidth: 1,
            height: 70,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
              You have selected the {selected} Plan
            </Text>
          </View>

          <Pressable onPress={subscribe}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              Pay Ksh {price.toLocaleString()}
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default Plans;

const styles = StyleSheet.create({});
