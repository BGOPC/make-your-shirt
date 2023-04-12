import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#0bc6b0',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});
export default state;

