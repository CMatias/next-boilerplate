import { Http } from '@services';

const PlanetaryService = {
  GetPlanetImage: async payload => {
    let response;

    try {
      response = await Http.Request('GET', '/planetary/apod', payload.params);
    } catch (error) {
      response = {
        copyright: '',
        date: '',
        explanation: '',
        hdurl: '',
        service_version: '',
        title: '',
        url: ''
      };
    }

    return response;
  }
};

export default PlanetaryService;
