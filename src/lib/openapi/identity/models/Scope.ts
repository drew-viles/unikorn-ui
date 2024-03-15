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


/**
 * Supported scopes.
 * @export
 */
export const Scope = {
    Openid: 'openid',
    Email: 'email',
    Profile: 'profile'
} as const;
export type Scope = typeof Scope[keyof typeof Scope];


export function ScopeFromJSON(json: any): Scope {
    return ScopeFromJSONTyped(json, false);
}

export function ScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scope {
    return json as Scope;
}

export function ScopeToJSON(value?: Scope | null): any {
    return value as any;
}

