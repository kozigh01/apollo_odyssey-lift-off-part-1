import React from 'react';
import { Layout } from '../components';
import {gql, useQuery} from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        name
        photo
        id
      }
      thumbNail
      length
      modulesCount
    }
  }
`;


const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);
  
  return <Layout grid>
    {data?.tracksForHome?.map(track => 
      <QueryResult error={error} loading={loading} data={data}>
        <TrackCard key={track.id} track={track} />
      </QueryResult>
    )}
  </Layout>;
};

export default Tracks;
