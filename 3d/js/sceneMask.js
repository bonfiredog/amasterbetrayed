import { OBJLoader } from "../third_party/OBJLoader.js";
import { Matrix4, Group, Mesh } from "../third_party/three.module.js";

let mask;
const group = new Group();
let material;

const params = {};

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadMask() {
  const model = await loadModel("../assets/mask.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = 1.4;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(50));
  geo.applyMatrix4(new Matrix4().makeRotationX(450));
  return geo;
}

async function generate() {
  if (mask) {
    group.remove(mask);
  }
  const geo = await loadMask();
  geo.center();

  const scale = 0.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(20));
  // geo.computeVertexNormals();
  // geo.computeFaceNormals();
  mask = new Mesh(geo, material);
mask.castShadow = mask.receiveShadow = true;
  group.add(mask);
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
