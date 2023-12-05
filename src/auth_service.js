// src/auth_service.js
//import createAuth0Client from '@auth0/auth0-spa-js';
import { createAuth0Client } from '@auth0/auth0-spa-js';


let auth0Client = null;

async function createAuth0() {
    auth0Client = await createAuth0Client({
        domain: 'dev-flourishfield.us.auth0.com',
        client_id: 'sQzNHEVdCoCsuVPrV36pt8D1wD9MY17y',
        redirect_uri: window.location.origin + '/callback'
    });
}

async function login() {
    await auth0Client.loginWithRedirect();
}

function logout() {
    auth0Client.logout({
        returnTo: window.location.origin
    });
}

async function handleAuthentication() {
    await auth0Client.handleRedirectCallback();
}

async function isAuthenticated() {
    return await auth0Client.isAuthenticated();
  }
export { createAuth0, login, logout, handleAuthentication, isAuthenticated };
