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
 * Supported signing algorithms.
 * @export
 */
export const SigningAlgorithm = {
    Es512: 'ES512'
} as const;
export type SigningAlgorithm = typeof SigningAlgorithm[keyof typeof SigningAlgorithm];


export function SigningAlgorithmFromJSON(json: any): SigningAlgorithm {
    return SigningAlgorithmFromJSONTyped(json, false);
}

export function SigningAlgorithmFromJSONTyped(json: any, ignoreDiscriminator: boolean): SigningAlgorithm {
    return json as SigningAlgorithm;
}

export function SigningAlgorithmToJSON(value?: SigningAlgorithm | null): any {
    return value as any;
}

