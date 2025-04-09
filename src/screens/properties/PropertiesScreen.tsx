import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB, Card, Title, Paragraph, useTheme, Searchbar } from 'react-native-paper';
import { Property } from '../../types/property';

// Temporary mock data
const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Sunset Apartments',
    address: '123 Sunset Blvd, Los Angeles, CA 90001',
    units: 12,
    occupiedUnits: 10,
    monthlyRevenue: 15000,
  },
  {
    id: '2',
    name: 'Ocean View Complex',
    address: '456 Ocean Ave, San Francisco, CA 94122',
    units: 24,
    occupiedUnits: 20,
    monthlyRevenue: 32000,
  },
];

const PropertiesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const theme = useTheme();

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    // Filter properties based on search query
    const filteredProperties = mockProperties.filter(
      property =>
        property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.address.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  const renderProperty = ({ item }: { item: Property }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.address}</Paragraph>
        <View style={styles.statsContainer}>
          <Paragraph>Units: {item.units}</Paragraph>
          <Paragraph>Occupied: {item.occupiedUnits}</Paragraph>
          <Paragraph>Revenue: ${item.monthlyRevenue}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search properties"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={properties}
        renderItem={renderProperty}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <FAB
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        icon="plus"
        onPress={() => {
          // Handle add property
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    margin: 16,
    elevation: 4,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PropertiesScreen; 