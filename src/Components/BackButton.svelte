<script>
  export let Destination = "#/name.svelte";
</script>

<div id="buttonCont">
  <a href={Destination}>BACK</a>
</div>

<style>
  #buttonCont {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 5%;
    margin-top: 4%;
  }

  #buttonCont a {
    font-size: 1em;
    font-family: sans-serif;
    font-weight: bold;
    color: #fff;
  }
</style>
