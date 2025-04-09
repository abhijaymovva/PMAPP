import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB, Card, Title, Paragraph, useTheme, Searchbar, IconButton } from 'react-native-paper';
import { Document } from '../../types/document';

// Temporary mock data
const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Lease Agreement - John Doe',
    type: 'Lease',
    property: 'Sunset Apartments',
    unit: '101',
    dateUploaded: '2024-03-27',
    fileSize: '2.5 MB',
    fileType: 'PDF',
  },
  {
    id: '2',
    title: 'Insurance Policy',
    type: 'Insurance',
    property: 'Ocean View Complex',
    dateUploaded: '2024-03-26',
    fileSize: '1.8 MB',
    fileType: 'PDF',
  },
  {
    id: '3',
    title: 'Maintenance Contract',
    type: 'Contract',
    property: 'All Properties',
    dateUploaded: '2024-03-25',
    fileSize: '3.2 MB',
    fileType: 'DOCX',
  },
];

const DocumentsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const theme = useTheme();

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    // Filter documents based on search query
    const filteredDocuments = mockDocuments.filter(
      document =>
        document.title.toLowerCase().includes(query.toLowerCase()) ||
        document.type.toLowerCase().includes(query.toLowerCase()) ||
        document.property.toLowerCase().includes(query.toLowerCase())
    );
    setDocuments(filteredDocuments);
  };

  const getFileTypeIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return 'file-pdf-box';
      case 'docx':
        return 'file-word-box';
      case 'xlsx':
        return 'file-excel-box';
      default:
        return 'file-document-outline';
    }
  };

  const renderDocument = ({ item }: { item: Document }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <IconButton
              icon={getFileTypeIcon(item.fileType)}
              size={24}
              iconColor={theme.colors.primary}
            />
            <View>
              <Title>{item.title}</Title>
              <Paragraph style={styles.subtitle}>
                {item.type} • {item.property}
                {item.unit ? ` - Unit ${item.unit}` : ''}
              </Paragraph>
            </View>
          </View>
          <IconButton icon="download" size={24} onPress={() => {/* Handle download */}} />
        </View>
        <View style={styles.detailsContainer}>
          <Paragraph>Uploaded: {item.dateUploaded}</Paragraph>
          <Paragraph>Size: {item.fileSize}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search documents"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={documents}
        renderItem={renderDocument}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <FAB
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        icon="plus"
        onPress={() => {
          // Handle add document
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subtitle: {
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default DocumentsScreen; 