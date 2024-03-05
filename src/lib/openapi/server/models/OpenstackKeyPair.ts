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
 * An OpenStack SSH key pair.
 * @export
 * @interface OpenstackKeyPair
 */
export interface OpenstackKeyPair {
    /**
     * The key pair name.
     * @type {string}
     * @memberof OpenstackKeyPair
     */
    name: string;
}

/**
 * Check if a given object implements the OpenstackKeyPair interface.
 */
export function instanceOfOpenstackKeyPair(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function OpenstackKeyPairFromJSON(json: any): OpenstackKeyPair {
    return OpenstackKeyPairFromJSONTyped(json, false);
}

export function OpenstackKeyPairFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenstackKeyPair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function OpenstackKeyPairToJSON(value?: OpenstackKeyPair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
