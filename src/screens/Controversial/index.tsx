import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

import { api } from '../../services/api';
import { getPosts, savePosts } from '../../storage/Hot';

import Card from '../../components/Card';
import Empty from '../../components/Empty';

import { Container } from './styles';

export function Controversial() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleGetData() {
    const posts = getPosts();

    setData(posts);
  }

  async function handleFetchData() {
    try {
      setIsLoading(true);
      const response = await api.get('r/pics/controversial.json');

      savePosts(response.data.data.children);
    } catch (error) {
      console.log('Check: ', error);
    } finally {
      setIsLoading(false);
      handleGetData();
    }
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Container>
      {
        isLoading
          ? <ActivityIndicator size="large" />
          : <>
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
              ListEmptyComponent={<Empty />}
            />
          </>
      }
    </Container>
  );
}
