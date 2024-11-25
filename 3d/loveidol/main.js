import { Vector2, DoubleSide } from "../third_party/three.module.js";
import { LineMaterial, generateParams } from "./lineMaterial.js";
import * as dat from "../third_party/dat.gui.module.js";
import { initScene, update } from "../js/scene.js";
import { renderer, scene, camera, resize } from "../js/renderer.js";
import { generateParams as generatePaperParams } from "../js/paper.js";
import { generateParams as generateEnvParams } from "../js/envMap.js";

const gui = new dat.GUI();
const materialFolder = gui.addFolder("Material");
materialFolder.open();

const material = new LineMaterial({
  color: 0x808080,
  roughness: 1,
  metalness: 1,
  min: 0,
  max: 1,
  scale: 2.75,
  side: DoubleSide,
});
generateParams(materialFolder, material);
const paperController = generatePaperParams(materialFolder, material);
paperController.setValue("Mottle");
const envMapController = generateEnvParams(materialFolder, material);
envMapController.setValue("bridge");

const tmp = new Vector2();
function render() {
  update();
  renderer.getSize(tmp);
  tmp.multiplyScalar(window.devicePixelRatio);
  material.uniforms.resolution.value.copy(tmp);
  renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

async function init() {
  const controllers = await initScene(scene, material, gui);
  controllers.loveidol.setValue(true);
  resize();
  render();
}

init();
