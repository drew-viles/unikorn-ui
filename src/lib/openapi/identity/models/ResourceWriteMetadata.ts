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
 * Resource metadata valid for all API resource reads and writes.
 * @export
 * @interface ResourceWriteMetadata
 */
export interface ResourceWriteMetadata {
    /**
     * A valid Kubenetes label value, typically used for resource names that can be
     * indexed in the database.
     * @type {string}
     * @memberof ResourceWriteMetadata
     */
    name: string;
    /**
     * The resource description, this optionally augments the name with more context.
     * @type {string}
     * @memberof ResourceWriteMetadata
     */
    description?: string;
}

/**
 * Check if a given object implements the ResourceWriteMetadata interface.
 */
export function instanceOfResourceWriteMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ResourceWriteMetadataFromJSON(json: any): ResourceWriteMetadata {
    return ResourceWriteMetadataFromJSONTyped(json, false);
}

export function ResourceWriteMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceWriteMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ResourceWriteMetadataToJSON(value?: ResourceWriteMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}

