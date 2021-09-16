import fetch from 'node-fetch';
import { URL } from 'whatwg-url';
import { v4 as uuidv4 } from 'uuid';

export class RequestHandler {
    token: string;
    endpoint: string;

    constructor(token: string, endpoint: string) {
        this.token = token;
        this.endpoint = endpoint;
    }

    async get(route: string, params?: { [key: string]: any }, expectBody = true) {
        let url = new URL(route, this.endpoint);
        if (params !== undefined) {
            for (let key in params) {
                url.searchParams.set(key, params[key]);
            }
        }
        let response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (response.ok) {
            if (expectBody) {
                let json = await response.json();
                return json;
            }
        } else {
            throw Error(`Request to ${url} failed with code ${response.status}!`);
        }
    }

    async post(route: string, body?: any, expectBody = true) {
        let url = new URL(route, this.endpoint);
        let options: any = {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }

        if (body !== undefined) {
            options = {
                ...options,
                headers: {
                    ...options.headers,
                    'Content-Type': 'application/json',
                    'X-Request-Id': uuidv4()
                },
                body: JSON.stringify(body)
            }
        }

        let response = await fetch(url, options);

        if (response.ok) {
            if (expectBody) {
                let json = await response.json();
                return json;
            }
        } else {
            throw Error(`Request to ${url} failed with code ${response.status}!`);
        }
    }

    async delete(route: string, expectBody = false) {
        let url = new URL(route, this.endpoint);
        let response = await fetch(url, {
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (response.ok) {
            if (expectBody) {
                let json = await response.json();
                return json;
            }
        } else {
            throw Error(`Request to ${url} failed with code ${response.status}!`);
        }
    }
}