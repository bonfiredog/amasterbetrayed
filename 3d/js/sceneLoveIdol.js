import { OBJLoader } from "../../third_party/OBJLoader.js";
import { Matrix4, Group, Mesh } from "../../third_party/three.module.js";

let loveidol;
const group = new Group();
let material;

const params = {};

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadLoveIdol() {
  const model = await loadModel("../assets/loveidol.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = 380.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));

  return geo;
}

async function generate() {
  if (loveidol) {
    group.remove(loveidol);
  }
  const geo = await loadLoveIdol();
  geo.center();

  const scale = 1;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  geo.applyMatrix4(new Matrix4().makeRotationY(180));
  geo.applyMatrix4(new Matrix4().makeRotationZ(10));
  // geo.computeVertexNormals();
  // geo.computeFaceNormals();
  loveidol = new Mesh(geo, material);
  //loveidol.castShadow = loveidol.receiveShadow = true;
  group.add(loveidol);
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
