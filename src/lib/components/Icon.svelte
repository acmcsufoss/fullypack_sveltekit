<script lang="ts">
  interface Props {
    icon: string;
  }

  let { icon }: Props = $props();
</script>

<span class="material-icons">{icon}</span>
