import { createServer, Model } from 'miragejs';
import {
  dogData as initialDogData,
  cityFilterOptions,
  genderFilterOptions,
  ageFilterOptions
} from '../applicationData';

const MirageServer = () => {
  const server = createServer({
    models: {
      dog: Model,
      city: Model,
      gender: Model,
      age: Model
    },

    seeds(serverTmp) {
      initialDogData.forEach(data => serverTmp.create('dog', data));
      cityFilterOptions.forEach(data => serverTmp.create('city', data));
      genderFilterOptions.forEach(data => serverTmp.create('gender', data));
      ageFilterOptions.forEach(data => serverTmp.create('age', data));
    },

    routes() {
      this.namespace = '/API';
      this.get('/dogs', schema => {
        return {
          responseCode: 200,
          content: schema.dogs.all().models.map(({ attrs }) => (attrs))
        };
      });

      this.get('/filters', schema => {
        return {
          responseCode: 200,
          content: {
            cityFilterOptions: schema.cities.all().models.map(({ attrs }) => (attrs)),
            genderFilterOptions: schema.genders.all().models.map(({ attrs }) => (attrs)),
            ageFilterOptions: schema.ages.all().models.map(({ attrs }) => (attrs))
          }
        };
      });

      this.get('/filter', function(schema, request) {
        let qp = JSON.parse(JSON.stringify(request.queryParams));
        const age = JSON.parse(qp.age);
        const city = JSON.parse(qp.city);
        const gender = JSON.parse(qp.gender);
        const dogs = schema.dogs.all().models.map(({ attrs }) => (attrs));
        if (age?.length === 0 && city?.length === 0 && gender?.length === 0) {
          return {
            responseCode: 200,
            content: dogs
          };
        }
        const filteredDogs = dogs.filter(d => {
          return age?.includes(d.age) || city?.includes(d.address) || gender?.includes(d.sex)
        });
        return {
          responseCode: 200,
          content: filteredDogs
        };
      });
    }
  });

  return server;
};

export default MirageServer;
