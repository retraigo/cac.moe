import { shade, tint, hex, rgbaFromHex } from "@retraigo/colors";

export default function generatePalette(color: string): Record<number, string> {
  const c = rgbaFromHex(color);
  const res: Record<number, string> = {};

  for (let i = 0; i < 10; ++i) {
    const shadeC = shade(c, i * 10);
    res[500 + i * 50] = hex(shadeC);

    const tintC = tint(c, i * 10);
    res[500 - i * 50] = hex(tintC);
  }
  return res;
}