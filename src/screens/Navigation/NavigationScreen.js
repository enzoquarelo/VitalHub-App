import { React, useState } from "react";

import { Container } from "../../components/Container/style"
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";


export const NavigationScreen = ({ navigation }) => {
    return (
        <>
            <Container>
                <StatusBar style="light" />

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("AppointmentLocation")}>
                    <Text>Maps</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ViewPrescription")}>
                    <Text>ViewPrescription</Text>
                </TouchableOpacity>
            </Container></>
    );
}