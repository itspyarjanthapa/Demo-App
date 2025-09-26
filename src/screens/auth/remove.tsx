// DummyThousand.tsx
// React Native (TypeScript) file that renders 1000 dummy items.
// This file intentionally creates a large list of items so you can test
// rendering, performance, scrolling, or other tooling that expects lots of UI rows.

import React, { useMemo, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  StatusBar,
  Platform,
} from 'react-native';

type DummyItem = {
  id: number;
  title: string;
  body: string;
};

// Small presentational component used for each item
const DummyRow: React.FC<{ item: DummyItem; onPress: (id: number) => void }> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)} style={styles.row} activeOpacity={0.7}>
      <View style={styles.rowLeft}>
        <Text style={styles.rowId}>#{item.id}</Text>
      </View>
      <View style={styles.rowContent}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.rowTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.rowBody}>
          {item.body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Extra small components to make the file useful for testing
const Header: React.FC<{ count: number }> = ({ count }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Dummy 1000 Items List</Text>
    <Text style={styles.headerSub}>Total items: {count}</Text>
  </View>
);

const Footer: React.FC = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>-- End of dummy list --</Text>
  </View>
);

export default function DummyThousand(): JSX.Element {
  // Create 1000 dummy items using useMemo so it's stable across renders
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => {
      const id = i + 1;
      return {
        id,
        title: `Dummy Item ${id}`,
        body: `This is the body of dummy item number ${id}. Use this text to test layout, wrapping, and truncation in single- or multi-line components.`,
      } as DummyItem;
    });
  }, []);

  const handlePress = useCallback((id: number) => {
    // lightweight onPress handler for demo purposes
    Alert.alert('Row pressed', `You pressed item #${id}`);
  }, []);

  const renderItem = useCallback(({ item }: { item: DummyItem }) => {
    return <DummyRow item={item} onPress={handlePress} />;
  }, [handlePress]);

  const keyExtractor = useCallback((item: DummyItem) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
      <Header count={items.length} />

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={20}
        maxToRenderPerBatch={30}
        windowSize={21}
        removeClippedSubviews={true}
        ListFooterComponent={<Footer />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e4ea',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 12,
    color: '#6b7280',
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  rowLeft: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowId: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4f46e5',
  },
  rowContent: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowBody: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#9ca3af',
  },
});

// EOF
