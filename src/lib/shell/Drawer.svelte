<script lang="ts">
	import { beforeNavigate } from '$app/navigation';

	import { getDrawerStore, Drawer } from '@skeletonlabs/skeleton';
	import SideBar from '$lib/shell/SideBar.svelte';

	const drawerStore = getDrawerStore();

	import type { InternalToken } from '$lib/oauth2';
	import * as Identity from '$lib/openapi/identity';

	interface Props {
		token: InternalToken;
		organizations: Array<Identity.OrganizationRead>;
		organizationID: string;
		acl: Identity.Acl;
	}

	let { token, organizations, organizationID, acl }: Props = $props();

	beforeNavigate((navigation) => {
		drawerStore.close();
	});
</script>

<Drawer>
	{#if $drawerStore.id === 'sidebar'}
		<SideBar {token} {organizations} {organizationID} {acl} />
	{:else}
		Invalid $drawerstore.id.
	{/if}
</Drawer>
