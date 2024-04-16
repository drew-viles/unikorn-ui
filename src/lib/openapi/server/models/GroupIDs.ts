/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes Service API
 * The Kubernetes Service API provides services that allows provisioning and life cycle management of Kubernetes clusters. The API is logically composed of authentication services, platform provider specific calls to get a set of resource types that can be then used by abstract Kubernetes Service resources to create and manage Kubernetes clusters. Requests must specify the HTML content type header.
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A list of group IDs.
 * @export
 * @interface GroupIDs
 */
export interface GroupIDs extends Array<string> {
}

/**
 * Check if a given object implements the GroupIDs interface.
 */
export function instanceOfGroupIDs(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupIDsFromJSON(json: any): GroupIDs {
    return GroupIDsFromJSONTyped(json, false);
}

export function GroupIDsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupIDs {
    return json;
}

export function GroupIDsToJSON(value?: GroupIDs | null): any {
    return value;
}
