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
import type { ResourceProvisioningStatus } from './ResourceProvisioningStatus';
import {
    ResourceProvisioningStatusFromJSON,
    ResourceProvisioningStatusFromJSONTyped,
    ResourceProvisioningStatusToJSON,
} from './ResourceProvisioningStatus';

/**
 * 
 * @export
 * @interface ProjectScopedResourceReadMetadata
 */
export interface ProjectScopedResourceReadMetadata {
    /**
     * A valid Kubenetes label value, typically used for resource names that can be
     * indexed in the database.
     * @type {string}
     * @memberof ProjectScopedResourceReadMetadata
     */
    name: string;
    /**
     * The resource description, this optionally augments the name with more context.
     * @type {string}
     * @memberof ProjectScopedResourceReadMetadata
     */
    description?: string;
    /**
     * The unique resource ID.
     * @type {string}
     * @memberof ProjectScopedResourceReadMetadata
     */
    id: string;
    /**
     * The time the resource was created.
     * @type {Date}
     * @memberof ProjectScopedResourceReadMetadata
     */
    creationTime: Date;
    /**
     * The time the resource was deleted.
     * @type {Date}
     * @memberof ProjectScopedResourceReadMetadata
     */
    deletionTime?: Date;
    /**
     * 
     * @type {ResourceProvisioningStatus}
     * @memberof ProjectScopedResourceReadMetadata
     */
    provisioningStatus: ResourceProvisioningStatus;
    /**
     * The organization identifier the resource belongs to.
     * @type {string}
     * @memberof ProjectScopedResourceReadMetadata
     */
    organizationId: string;
    /**
     * The project identifier the resource belongs to.
     * @type {string}
     * @memberof ProjectScopedResourceReadMetadata
     */
    projectId: string;
}

/**
 * Check if a given object implements the ProjectScopedResourceReadMetadata interface.
 */
export function instanceOfProjectScopedResourceReadMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "creationTime" in value;
    isInstance = isInstance && "provisioningStatus" in value;
    isInstance = isInstance && "organizationId" in value;
    isInstance = isInstance && "projectId" in value;

    return isInstance;
}

export function ProjectScopedResourceReadMetadataFromJSON(json: any): ProjectScopedResourceReadMetadata {
    return ProjectScopedResourceReadMetadataFromJSONTyped(json, false);
}

export function ProjectScopedResourceReadMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectScopedResourceReadMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': json['id'],
        'creationTime': (new Date(json['creationTime'])),
        'deletionTime': !exists(json, 'deletionTime') ? undefined : (new Date(json['deletionTime'])),
        'provisioningStatus': ResourceProvisioningStatusFromJSON(json['provisioningStatus']),
        'organizationId': json['organizationId'],
        'projectId': json['projectId'],
    };
}

export function ProjectScopedResourceReadMetadataToJSON(value?: ProjectScopedResourceReadMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'id': value.id,
        'creationTime': (value.creationTime.toISOString()),
        'deletionTime': value.deletionTime === undefined ? undefined : (value.deletionTime.toISOString()),
        'provisioningStatus': ResourceProvisioningStatusToJSON(value.provisioningStatus),
        'organizationId': value.organizationId,
        'projectId': value.projectId,
    };
}

