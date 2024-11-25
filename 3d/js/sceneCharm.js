import { OBJLoader } from "../third_party/OBJLoader.js";
import { Matrix4, Group, Mesh } from "../third_party/three.module.js";

let charm;
const group = new Group();
let material;

const params = {};

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadCharm() {
  const model = await loadModel("../assets/charm.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = -0.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

async function generate() {
  if (charm) {
    group.remove(charm);
  }
  const geo = await loadCharm();
  geo.center();

  const scale = -0.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(20));
  // geo.computeVertexNormals();
  // geo.computeFaceNormals();
  charm = new Mesh(geo, material);
  charm.castShadow = charm.receiveShadow = true;
  group.add(charm);
}

const obj = {
  init: async (m, q, r) => {
    material = m;
    await generate();
  },
  update: () => {},
  group,
  generate: () => generate(material),
  params: (gui) => {},
};

export { obj };
