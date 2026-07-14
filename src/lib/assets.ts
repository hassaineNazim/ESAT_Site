import { existsSync } from "fs";
import path from "path";

/**
 * Garde-fou serveur (build/SSG) : ne référencer un asset de /public
 * que s'il existe réellement — évite toute image cassée si data.json
 * pointe vers un fichier manquant.
 */
const publicDir = path.join(process.cwd(), "public");

export function publicAssetOrUndefined(
  assetPath: string | undefined
): string | undefined {
  if (!assetPath || !assetPath.startsWith("/") || assetPath.includes("..")) {
    return undefined;
  }
  return existsSync(path.join(publicDir, assetPath)) ? assetPath : undefined;
}
