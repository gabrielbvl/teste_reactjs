import axios from "axios";

const ApiSaibWeb = axios.create({
    baseURL: "https://interno.saibweb.com.br/api/v1/teste",
});

export default ApiSaibWeb;
