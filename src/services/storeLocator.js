import axios from 'axios';
import { TaskQueue } from 'cwait';
import config from '../config';

const MAX_CONCURRENT_REQUESTS = 5;

const request = async store => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json';

  return await axios.get(url, {
    params: {
      address: store.Address,
      key: config.apiKey
    }
  })
  .then(res => {
    const [ result ] = res.data.results;

    if (!result) {
      console.warn(`Could not find results for store: ${store.Name}`);

      return {...store, error: 'Location not found' };
    }

    return { ...store, location: result.geometry.location };
  })
  .catch(e => {
    console.error(`Request for store: ${store.Name} returned an error.`);
  });
}

const storeLocator = async (stores, updateFetchStatus) => {
  updateFetchStatus();

  // Limit the number of concurrent conections to the Maps API
  const queue = new TaskQueue(Promise, MAX_CONCURRENT_REQUESTS).wrap(request);
  return await Promise.all(stores.map(queue));
};

export default storeLocator;