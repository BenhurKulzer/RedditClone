import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { api } from '../../services/api';
import Card from '../../components/Card';

export function Top() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetData() {
    try {
      setIsLoading(true);
      const response = await api.get('r/pics/top.json');

      setData(response.data.data.children);
    } catch (error) {
      console.log('Check: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading
        ? (
        <ActivityIndicator size="large" />
          )
        : (
        <>
          <FlatList
            data={data}
            contentContainerStyle={{ gap: 1 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <Card data={item} />}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={handleGetData}
              />
            }
          />
        </>
          )}
    </View>
  );
}
