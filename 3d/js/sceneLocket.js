import { OBJLoader } from "../third_party/OBJLoader.js";
import { Matrix4, Group, Mesh } from "../third_party/three.module.js";

let locket;
const group = new Group();
let material;

const params = {};

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadLocket() {
  const model = await loadModel("../assets/locket.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = -7;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));

  return geo;
}

async function generate() {
  if (locket) {
    group.remove(locket);
  }
  const geo = await loadLocket();
  geo.center();

  const scale = -7;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(20));
  // geo.computeVertexNormals();
  // geo.computeFaceNormals();
  locket = new Mesh(geo, material);
locket.castShadow = locket.receiveShadow = true;
  group.add(locket);
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
