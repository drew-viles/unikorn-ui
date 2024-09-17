/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes Region Service API
 * Cloud region discovery and routing service.
 *
 * The version of the OpenAPI document: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A flavor quota.
 * @export
 * @interface FlavorQuota
 */
export interface FlavorQuota {
    /**
     * The flavor ID.
     * @type {string}
     * @memberof FlavorQuota
     */
    id: string;
    /**
     * The number of the required flavor.
     * @type {number}
     * @memberof FlavorQuota
     */
    count: number;
}

/**
 * Check if a given object implements the FlavorQuota interface.
 */
export function instanceOfFlavorQuota(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function FlavorQuotaFromJSON(json: any): FlavorQuota {
    return FlavorQuotaFromJSONTyped(json, false);
}

export function FlavorQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlavorQuota {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'count': json['count'],
    };
}

export function FlavorQuotaToJSON(value?: FlavorQuota | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'count': value.count,
    };
}
