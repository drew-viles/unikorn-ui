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
 * When the provider type is 'google' you may specify these provider specific
 * options to enable other functionality.
 * @export
 * @interface ProviderSpecGoogle
 */
export interface ProviderSpecGoogle {
    /**
     * When set this identifies the customer ID for the google managed organization.
     * This enables the access to, and use of, Google groups as a source of truth
     * for RBAC.
     * @type {string}
     * @memberof ProviderSpecGoogle
     */
    customerID?: string;
}

/**
 * Check if a given object implements the ProviderSpecGoogle interface.
 */
export function instanceOfProviderSpecGoogle(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProviderSpecGoogleFromJSON(json: any): ProviderSpecGoogle {
    return ProviderSpecGoogleFromJSONTyped(json, false);
}

export function ProviderSpecGoogleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderSpecGoogle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerID': !exists(json, 'customerID') ? undefined : json['customerID'],
    };
}

export function ProviderSpecGoogleToJSON(value?: ProviderSpecGoogle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerID': value.customerID,
    };
}

