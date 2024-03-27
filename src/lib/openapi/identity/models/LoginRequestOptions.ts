/* tslint:disable */
/* eslint-disable */
/**
 * Unikorn Identity API
 * The Unikorn Identity API provides an OIDC compliant interface for use with all Unikorn services and proxies.  As it\'s intended use is for multi-tenant cloud deployments it acts as an aggregation layer for other 3rd party OIDC services, dispatching login requests to the required OIDC backend.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Login request options.
 * @export
 * @interface LoginRequestOptions
 */
export interface LoginRequestOptions {
    /**
     * The user's email address.
     * @type {string}
     * @memberof LoginRequestOptions
     */
    email?: string | null;
    /**
     * The explcit provider type.
     * @type {string}
     * @memberof LoginRequestOptions
     */
    provider?: string | null;
    /**
     * The state string supplied by the authorization endpoint.
     * @type {string}
     * @memberof LoginRequestOptions
     */
    state: string;
}

/**
 * Check if a given object implements the LoginRequestOptions interface.
 */
export function instanceOfLoginRequestOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function LoginRequestOptionsFromJSON(json: any): LoginRequestOptions {
    return LoginRequestOptionsFromJSONTyped(json, false);
}

export function LoginRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequestOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'state': json['state'],
    };
}

export function LoginRequestOptionsToJSON(value?: LoginRequestOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'provider': value.provider,
        'state': value.state,
    };
}

