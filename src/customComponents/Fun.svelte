<script lang="ts">
  type Props = {
    children?: import('svelte').Snippet
  }

  let {children}: Props = $props()
</script>

<span>{@render children?.()}</span>

<style>
  /* Credits: https://github.com/arizzitano/css3wordart */
  span {
    font-family: Arial, sans-serif;
    background: #ee00ff;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2VlMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjE2JSIgc3RvcC1jb2xvcj0iI2ZmMzAzMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMyJSIgc3RvcC1jb2xvcj0iI2ZmOTkwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjQ5JSIgc3RvcC1jb2xvcj0iI2ZmZjQzMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjY3JSIgc3RvcC1jb2xvcj0iIzAwZmYwOCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjgzJSIgc3RvcC1jb2xvcj0iIzMyMjNmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhYTAwZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
    background: -moz-linear-gradient(
      left,
      #ee00ff 0%,
      #ff3030 16%,
      #ff9900 32%,
      #fff430 49%,
      #00ff08 67%,
      #3223ff 83%,
      #aa00ff 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, #ee00ff),
      color-stop(16%, #ff3030),
      color-stop(32%, #ff9900),
      color-stop(49%, #fff430),
      color-stop(67%, #00ff08),
      color-stop(83%, #3223ff),
      color-stop(100%, #aa00ff)
    );
    background: -webkit-linear-gradient(
      left,
      #ee00ff 0%,
      #ff3030 16%,
      #ff9900 32%,
      #fff430 49%,
      #00ff08 67%,
      #3223ff 83%,
      #aa00ff 100%
    );
    background: -o-linear-gradient(
      left,
      #ee00ff 0%,
      #ff3030 16%,
      #ff9900 32%,
      #fff430 49%,
      #00ff08 67%,
      #3223ff 83%,
      #aa00ff 100%
    );
    background: -ms-linear-gradient(
      left,
      #ee00ff 0%,
      #ff3030 16%,
      #ff9900 32%,
      #fff430 49%,
      #00ff08 67%,
      #3223ff 83%,
      #aa00ff 100%
    );
    background: linear-gradient(
      to right,
      #ee00ff 0%,
      #ff3030 16%,
      #ff9900 32%,
      #fff430 49%,
      #00ff08 67%,
      #3223ff 83%,
      #aa00ff 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    letter-spacing: -0.01em;
    margin-left: 0.7em;
  }
</style>
