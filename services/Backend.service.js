import axios from 'axios';

const API_URL = 'https://ns3296606.ip-5-135-152.eu:8443/api/user/';
 
class BackendService {

  
    inscription(inscription) {
        return axios.post(API_URL + 'inscription', inscription,
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }
    prospect() {
        return axios.post(API_URL + 'prospect',
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }
   
  
    findServicesAll() {
        return axios.get(API_URL + "services/all",
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }

    findAllServicesVedette() {
        return axios.get(API_URL + "services/all/vedette",
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }

    findServicesByPermaliens(permaliens) {
        return axios.get(API_URL + "services/permaliens?permaliens=" + permaliens,
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }


     



    findAllCasClients() {
        return axios.get(API_URL + "cas-utilisation/all",
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }

    findAllCasClientsVedette() {
        return axios.get(API_URL + "cas-utilisation/all/vedette",
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }

    findCasClientByPermaliens(permaliens) {
        return axios.get(API_URL + "cas-utilisation/permaliens?permaliens=" + permaliens,
            { headers: { "Content-Type": "application/json; charset=UTF-8" } });
    }



}

export default new BackendService();
