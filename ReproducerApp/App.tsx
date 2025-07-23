import React from 'react';
import { View, Button, Modal, Text, StyleSheet } from 'react-native';
import { useModalStore } from './store';

export default function App() {
  const {
    modal1Visible,
    modal2Visible,
    modal3Visible,
    openModal1,
    openModal2,
    openModal3,
    closeModal1,
    closeModal2,
    closeModal3,
  } = useModalStore();

  return (
    <View style={styles.container}>
      <Button title="Open Modal 1" onPress={openModal1} />

      {/* Modal 1 inside App */}
      <Modal visible={modal1Visible} animationType="slide" transparent>
        <View style={styles.modal}>
          <Text style={styles.title}>This is Modal 1</Text>
          <Button title="Close Modal 1" onPress={closeModal1} />
          <Button title="Open Modal 2" onPress={openModal2} />

          {/* Modal 2 inside Modal 1 */}
          <Modal visible={modal2Visible} animationType="slide" transparent>
            <View style={styles.modal}>
              <Text style={styles.title}>This is Modal 2</Text>
              <Button title="Close Modal 2" onPress={closeModal2} />
              <Button title="Open Modal 3" onPress={openModal3} />
            </View>
          </Modal>
        </View>
      </Modal>
      {/* Modal 3 inside App */}
      <Modal visible={modal3Visible} animationType="slide" transparent>
        <View style={styles.modal}>
          <Text style={styles.title}>This is Modal 3</Text>
          <Button title="Close Modal 3" onPress={closeModal3} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: '#ffffffee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'red',
  },
});
