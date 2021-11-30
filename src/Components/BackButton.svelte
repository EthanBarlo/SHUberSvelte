<script>
  export let Destination = "#/";
</script>

<div id="buttonCont">
  <a href={Destination}>
    <svg
      version="1.1"
      id="svg6"
      width="45.579464"
      height="38.22235"
      viewBox="0 0 45.57946 38.22235"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <defs
        id="defs10" />
      <g
        fill="#ffffff"
        id="g4"
        transform="translate(-2.4989218e-4,-3.6788217)">
        <path
          d="M 45.506,33.532 C 43.765,26.112 38.345,15.774 21.952,13.59 V 7.047 C 21.952,5.683 21.126,4.454 19.865,3.934 18.604,3.413 17.153,3.705 16.19,4.671 L 1.305,19.63 c -1.739,1.748 -1.74,4.572 -10e-4,6.32 L 16.19,40.909 c 0.961,0.966 2.415,1.258 3.676,0.737 1.261,-0.521 2.087,-1.75 2.087,-3.113 v -6.331 c 5.593,0.007 13.656,0.743 19.392,4.313 0.953,0.594 2.168,0.555 3.08,-0.101 0.91,-0.652 1.338,-1.79 1.081,-2.882 z"
          id="path2" />
      </g>
  </svg>
  </a>
</div>

<style>
  #buttonCont {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 2%;
    margin-top: calc(((6vh) - (6vh*.8)) / 2);
    fill: #fff;
  }

  #buttonCont a {
    font-size: 1em;
    font-family: sans-serif;
    font-weight: bold;
  }
  #buttonCont svg {
    height: calc(6vh*.8);
  }
</style>
