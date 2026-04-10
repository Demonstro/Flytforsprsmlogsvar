import type { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

/**
 * Vite plugin to resolve missing Figma Make assets.
 *
 * Figma Make uses `figma:asset/...` protocol for images and generates
 * hash-named files that live on Figma's CDN. Outside Make, these don't
 * exist on disk. This plugin intercepts them and returns placeholders
 * so the build succeeds.
 */
export function figmaAssetPlugin(): Plugin {
  const FIGMA_ASSET_RE = /^figma:asset\/(.+)$/

  // 1x1 transparent PNG as base64 data URL
  const PLACEHOLDER_IMG =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/QualIQAAAABJRU5ErkJggg=='

  // Empty SVG paths export (matches the shape of Figma Make svg-*.ts files)
  const PLACEHOLDER_SVG = 'export default {};'

  return {
    name: 'figma-asset',
    enforce: 'pre',
    resolveId(source, importer) {
      // Handle figma:asset/ protocol
      if (FIGMA_ASSET_RE.test(source)) {
        return `\0figma-asset-img:${source}`
      }

      // Handle relative imports that don't resolve to existing files
      if (importer && (source.startsWith('./') || source.startsWith('../'))) {
        const dir = path.dirname(importer)
        const resolved = path.resolve(dir, source)

        // Check if the file exists (with or without .ts/.tsx extension)
        const candidates = [
          resolved,
          resolved + '.ts',
          resolved + '.tsx',
          resolved + '/index.ts',
          resolved + '/index.tsx',
        ]

        const exists = candidates.some((c) => fs.existsSync(c))
        if (!exists) {
          if (/\.png$/i.test(source)) {
            return `\0figma-asset-img:${source}`
          }
          // Likely an SVG paths module
          return `\0figma-asset-svg:${source}`
        }
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset-img:')) {
        return `export default "${PLACEHOLDER_IMG}"`
      }
      if (id.startsWith('\0figma-asset-svg:')) {
        return PLACEHOLDER_SVG
      }
    },
  }
}
