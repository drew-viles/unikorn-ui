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
 * Describes how to lookup the provider, when global, use a built in generic provider
 * e.g. Google/Microsoft, when organization, us an organization scoped provider.
 * @export
 */
export const ProviderScope = {
    Global: 'global',
    Organization: 'organization'
} as const;
export type ProviderScope = typeof ProviderScope[keyof typeof ProviderScope];


export function ProviderScopeFromJSON(json: any): ProviderScope {
    return ProviderScopeFromJSONTyped(json, false);
}

export function ProviderScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderScope {
    return json as ProviderScope;
}

export function ProviderScopeToJSON(value?: ProviderScope | null): any {
    return value as any;
}
