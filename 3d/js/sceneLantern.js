import { OBJLoader } from "../third_party/OBJLoader.js";
import { Matrix4, Group, Mesh } from "../third_party/three.module.js";

let lantern;
const group = new Group();
let material;

const params = {};

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadLantern() {
  const model = await loadModel("../assets/lantern.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = 0.5;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));

  return geo;
}

async function generate() {
  if (lantern) {
    group.remove(lantern);
  }
  const geo = await loadLantern();
  geo.center();

  const scale = 0.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(20));
  // geo.computeVertexNormals();
  // geo.computeFaceNormals();
  lantern = new Mesh(geo, material);
lantern.castShadow = lantern.receiveShadow = true;
  group.add(lantern);
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
