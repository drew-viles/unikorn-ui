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
import type { ImageVersions } from './ImageVersions';
import {
    ImageVersionsFromJSON,
    ImageVersionsFromJSONTyped,
    ImageVersionsToJSON,
} from './ImageVersions';

/**
 * An image.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * The unique image ID.
     * @type {string}
     * @memberof Image
     */
    id: string;
    /**
     * The image name.
     * @type {string}
     * @memberof Image
     */
    name: string;
    /**
     * Time when the image was created. Images with a newer creation time should
     * be favoured over older images as they will contain updates and fewer vulnerabilities.
     * @type {Date}
     * @memberof Image
     */
    created: Date;
    /**
     * Time when the image was last modified.
     * @type {Date}
     * @memberof Image
     */
    modified: Date;
    /**
     * 
     * @type {ImageVersions}
     * @memberof Image
     */
    versions: ImageVersions;
}

/**
 * Check if a given object implements the Image interface.
 */
export function instanceOfImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "modified" in value;
    isInstance = isInstance && "versions" in value;

    return isInstance;
}

export function ImageFromJSON(json: any): Image {
    return ImageFromJSONTyped(json, false);
}

export function ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Image {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'created': (new Date(json['created'])),
        'modified': (new Date(json['modified'])),
        'versions': ImageVersionsFromJSON(json['versions']),
    };
}

export function ImageToJSON(value?: Image | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'created': (value.created.toISOString()),
        'modified': (value.modified.toISOString()),
        'versions': ImageVersionsToJSON(value.versions),
    };
}
