# Gitty - An Interactive Rive character animation menu

[![Follow on YouTube](https://img.shields.io/badge/-Follow%20on%20YouTube-red?logo=YouTube&logoColor=white&style=flat)](https://www.youtube.com/digitalclay)
[![Twitter Follow](https://img.shields.io/twitter/follow/3DRudy.svg?style=social)](https://twitter.com/3DRudy)
[![GitHub commits](https://img.shields.io/github/commit-activity/m/RuDeeVelops/creativedev-log.svg)](https://github.com/RuDeeVelops/creativedev-log/commits/main)

### Tech stack: `Rive` `JS` `css` `html`

### Live link:

<br>

<p align="center">
    <img src="media/loopingGittyMenu_RodolfoFanti.gif" alt="Alt text" style="max-width: 1000px;">
</p>

### Main features

- A fully interactive character and menu Rive animation, triggered by mouse events.
- 100% web native via `JS/WASM` runtime for Rive.
- The source Rive file is found in: `src: "media/gitty.riv"`
- Live link:
- The integration is done via a few lines of Javascript:

<div style="max-width: 70vw; margin-left: auto; margin-right: auto;">

```html
<body>
  <script src="https://unpkg.com/@rive-app/canvas@2.7.0"></script>

  <canvas id="canvas" width="1792" height="1024"></canvas>

  <script>
    const canvas = document.getElementById("canvas");

    const r = new rive.Rive({
      src: "media/gitty.riv" /* Location of the .riv file */,
      canvas: document.getElementById("canvas"),
      autoplay: true,
      artboard: "mainComp" /* Specify your artboard name */,
      stateMachines: "State Machine 1" /* Specify your statemachines here */,
    });
  </script>
</body>
```

</div>
