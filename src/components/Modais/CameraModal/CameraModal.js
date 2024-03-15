import { React, useRef, useState, useEffect } from 'react';
import { Modal, View, StyleSheet, StatusBar } from 'react-native';

import { BtnCapture, BtnFlash, BtnFlip, ContainerButtonsCamera } from './style';

import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const ModalCamera = ({ visible, onClose, title }) => {
    const cameraRef = useRef(null);

    const [photo, setPhoto] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();

            console.log(photo)
        }
    }

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <Camera
                ref={cameraRef}
                type={cameraType}
                flashMode={flashMode}
                style={styles.camera}
                ratio={'16:9'}
            >

                <ContainerButtonsCamera>
                    <BtnFlash onPress={() => setFlashMode(flashMode == FlashMode.off ? FlashMode.on : FlashMode.off)}>
                        <Ionicons name="flash" size={30} color="white" />
                    </BtnFlash>

                    <BtnCapture onPress={() => CapturePhoto()} />

                    <BtnFlip onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
                        <MaterialCommunityIcons name="camera-flip" size={35} color="white" />
                    </BtnFlip>
                </ContainerButtonsCamera>
            </Camera>

            <StatusBar hidden={true} />
        </Modal>
    );
};

export default ModalCamera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
})