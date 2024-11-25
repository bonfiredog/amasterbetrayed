import { OBJLoader } from "../third_party/OBJLoader.js";
import { Matrix4, Group, Mesh } from "../third_party/three.module.js";

let knife;
const group = new Group();
let material;

const params = {};

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadKnife() {
  const model = await loadModel("../assets/knife.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = 0.1;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

async function generate() {
  if (knife) {
    group.remove(knife);
  }
  const geo = await loadKnife();
  geo.center();

  const scale = 0.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(20));
  // geo.computeVertexNormals();
  // geo.computeFaceNormals();
  knife = new Mesh(geo, material);
knife.castShadow = knife.receiveShadow = true;
  group.add(knife);
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
