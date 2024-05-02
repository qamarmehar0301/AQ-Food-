import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, parameters } from "../../Global/styles";
import Header from "../../Components/Header";
import { Icon } from "react-native-elements";

const PrivacyPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Privacy Policy" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.subtitle}>Our Commitment to Privacy</Text>
        <Text style={styles.paragraph}>
          At [Your Company Name], we are committed to protecting your privacy
          and ensuring the security of your personal information.
        </Text>
        <Text style={styles.paragraph}>
          This Privacy Policy outlines how we collect, use, and protect your
          personal information when you use our [website/app/service]. By
          accessing or using our [website/app/service], you signify your
          acceptance of this Privacy Policy.
        </Text>
        <Text style={styles.paragraph}>
          Please read this Privacy Policy carefully to understand our policies
          and practices regarding your information and how we will treat it.
        </Text>
        <Text style={styles.subtitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          [Describe the types of information you collect from users, such as
          personal information (e.g., name, email, address), device
          information, location data, etc.]
        </Text>
        <Text style={styles.subtitle}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          [Explain how you use the collected information, such as to provide
          and improve our services, personalize user experience, communicate
          with users, etc.]
        </Text>
        <Text style={styles.subtitle}>Information Sharing</Text>
        <Text style={styles.paragraph}>
          [Describe how and when you share users' information with third
          parties, if applicable, such as with service providers, business
          partners, legal requirements, etc.]
        </Text>
        <Text style={styles.subtitle}>Security Measures</Text>
        <Text style={styles.paragraph}>
          [Detail the security measures you have in place to protect users'
          information, such as encryption, secure servers, access controls,
          etc.]
        </Text>
        <Text style={styles.subtitle}>Changes to Privacy Policy</Text>
        <Text style={styles.paragraph}>
          [Explain how you may update or change this Privacy Policy and notify
          users about such changes.]
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#708090',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#a9a9a9',
  },
});

export default PrivacyPage;
