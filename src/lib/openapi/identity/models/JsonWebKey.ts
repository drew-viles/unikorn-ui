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
 * JSON web key. See the relevant JWKS documentation for further details.
 * @export
 * @interface JsonWebKey
 */
export interface JsonWebKey extends Array<object> {
}

/**
 * Check if a given object implements the JsonWebKey interface.
 */
export function instanceOfJsonWebKey(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JsonWebKeyFromJSON(json: any): JsonWebKey {
    return JsonWebKeyFromJSONTyped(json, false);
}

export function JsonWebKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonWebKey {
    return json;
}

export function JsonWebKeyToJSON(value?: JsonWebKey | null): any {
    return value;
}

