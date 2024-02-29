import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import plans from "../data/plans";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Plans = () => {
  const data = plans;
  return (
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
            style={{
              borderRadius: 5,
              borderColor: "#e50914",
              borderWidth: 1,
              padding: 15,
              marginBottom: 16,
            }}
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

              <MaterialCommunityIcons name="netflix" size={26} color="black" />
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
  );
};

export default Plans;

const styles = StyleSheet.create({});
