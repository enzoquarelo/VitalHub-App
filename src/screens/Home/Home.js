import { React, useState } from "react";

import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header/Header"
import { StatusBar } from "expo-status-bar";


export const Home = ({ navigation }) => {
    return (
        <>
            <Container>
                <StatusBar style="light" />
                <Header imageHeader="https://avatars.githubusercontent.com/u/29419052?v=4" profileName="Dr. Eduardo" />
            </Container></>
    );
}