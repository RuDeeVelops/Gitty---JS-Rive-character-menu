const canvas = document.getElementById("canvas");

const r = new rive.Rive({
  src: "media/gitty.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "mainComp", // Specify the artboard name here
  stateMachines: "State Machine 1",
});
