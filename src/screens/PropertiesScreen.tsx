import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { mockProperties, mockUnits } from '../services/mockData';
import { Property, Unit } from '../types';

const PropertiesScreen = () => {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [modalVisible, setModalVisible] = useState(false);

  const getPropertyUnits = (propertyId: string) => {
    return mockUnits.filter(unit => unit.propertyId === propertyId);
  };

  const renderPropertyItem = ({ item }: { item: Property }) => {
    const propertyUnits = getPropertyUnits(item.id);
    const occupancyRate = (item.occupiedUnits / item.totalUnits) * 100;

    return (
      <TouchableOpacity style={styles.propertyCard}>
        <Text style={styles.propertyName}>{item.name}</Text>
        <Text style={styles.propertyAddress}>{item.address}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{item.totalUnits}</Text>
            <Text style={styles.statLabel}>Total Units</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{item.occupiedUnits}</Text>
            <Text style={styles.statLabel}>Occupied</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>${item.monthlyRevenue.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Monthly Revenue</Text>
          </View>
        </View>
        <View style={styles.occupancyBar}>
          <View 
            style={[
              styles.occupancyFill, 
              { width: `${occupancyRate}%` }
            ]} 
          />
        </View>
        <Text style={styles.occupancyText}>
          {occupancyRate.toFixed(1)}% Occupied
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Properties</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Property</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={properties}
        renderItem={renderPropertyItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Property</Text>
            {/* Add property form will go here */}
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContainer: {
    padding: 16,
  },
  propertyCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  propertyAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  occupancyBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  occupancyFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  occupancyText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default PropertiesScreen; 