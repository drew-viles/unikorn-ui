<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	import type { AutocompleteOption } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	import * as Clients from '$lib/clients';
	import * as Identity from '$lib/openapi/identity';
	import * as Validation from '$lib/validation';

	import type { ShellPageSettings } from '$lib/layouts/types.ts';
	import ShellPage from '$lib/layouts/ShellPage.svelte';
	import ShellSection from '$lib/layouts/ShellSection.svelte';
	import TextInput from '$lib/forms/TextInput.svelte';
	import MultiSelect from '$lib/forms/MultiSelect.svelte';
	import Button from '$lib/forms/Button.svelte';

	const settings: ShellPageSettings = {
		feature: 'Identity',
		name: 'Create User',
		description: 'Create a new user in the organization.'
	};

	let names = $derived(data.users.map((x) => x.spec.subject));

	let resource: Identity.UserWrite = $state({
		spec: {
			subject: '',
			state: Identity.UserState.Active,
			groupIDs: []
		}
	});

	/* Cluster name must be valid, and it must be unique */
	let usernameValid = $state(false);

	let valid = $derived(usernameValid && resource.spec.groupIDs.length > 0);

	function submit() {
		const parameters = {
			organizationID: data.organizationID,
			userWrite: resource
		};

		Clients.identity(data.token)
			.apiV1OrganizationsOrganizationIDUsersPost(parameters)
			.then(() => window.location.assign('/identity/users'))
			.catch((e: Error) => Clients.error(toastStore, e));
	}

	let groups = $derived(
		data.groups.map(
			(x) => ({ label: x.metadata.name, value: x.metadata.id }) as AutocompleteOption<string>
		)
	);
</script>

<ShellPage {settings}>
	<ShellSection title="User Information">
		<TextInput
			id="name"
			bind:value={resource.spec.subject}
			label="Email Address."
			hint="Users canonical email address, use of email aliases will not work."
			validators={[Validation.stringSet, (name: string) => Validation.unique(name, names)]}
			bind:valid={usernameValid}
		/>
	</ShellSection>

	<ShellSection title="Access Control">
		<MultiSelect
			id="group-ids"
			label="Select group access."
			hint="Groups associate users with projects and grant them permissions to create, view, edit and delete."
			options={groups}
			value={resource.spec.groupIDs}
			add={(value: string) => resource.spec.groupIDs.push(value)}
			remove={(index: number) => resource.spec.groupIDs.splice(index, 1)}
		>
			{#snippet selected(value: string)}
				{data.groups.find((x) => x.metadata.id == value)?.metadata.name}
			{/snippet}
		</MultiSelect>
	</ShellSection>

	<div class="flex justify-between">
		<Button
			icon="mdi:cancel-bold"
			label="Cancel"
			class="variant-outline-primary"
			href="/identity/users"
		/>
		<Button
			icon="mdi:tick"
			label="Create"
			class="variant-filled-primary"
			clicked={submit}
			disabled={!valid}
		/>
	</div>
</ShellPage>
