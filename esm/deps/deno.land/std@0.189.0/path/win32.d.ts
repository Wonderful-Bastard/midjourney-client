import type { FormatInputPathObject, ParsedPath } from "./_interface.js";
export declare const sep = "\\";
export declare const delimiter = ";";
/**
 * Resolves path segments into a `path`
 * @param pathSegments to process to path
 */
export declare function resolve(...pathSegments: string[]): string;
/**
 * Normalizes a `path`
 * @param path to normalize
 */
export declare function normalize(path: string): string;
/**
 * Verifies whether path is absolute
 * @param path to verify
 */
export declare function isAbsolute(path: string): boolean;
/**
 * Join all given a sequence of `paths`,then normalizes the resulting path.
 * @param paths to be joined and normalized
 */
export declare function join(...paths: string[]): string;
/**
 * It will solve the relative path from `from` to `to`, for instance:
 *  from = 'C:\\orandea\\test\\aaa'
 *  to = 'C:\\orandea\\impl\\bbb'
 * The output of the function should be: '..\\..\\impl\\bbb'
 * @param from relative path
 * @param to relative path
 */
export declare function relative(from: string, to: string): string;
/**
 * Resolves path to a namespace path
 * @param path to resolve to namespace
 */
export declare function toNamespacedPath(path: string): string;
/**
 * Return the directory path of a `path`.
 * @param path - path to extract the directory from.
 */
export declare function dirname(path: string): string;
/**
 * Return the last portion of a `path`.
 * Trailing directory separators are ignored, and optional suffix is removed.
 *
 * @param path - path to extract name from.
 * @param [suffix] - suffix to remove from extracted name.
 */
export declare function basename(path: string, suffix?: string): string;
/**
 * Return the extension of the `path` with leading period.
 * @param path with extension
 * @returns extension (ex. for `file.ts` returns `.ts`)
 */
export declare function extname(path: string): string;
/**
 * Generate a path from `FormatInputPathObject` object.
 * @param pathObject with path
 */
export declare function format(pathObject: FormatInputPathObject): string;
/**
 * Return a `ParsedPath` object of the `path`.
 * @param path to process
 */
export declare function parse(path: string): ParsedPath;
/**
 * Converts a file URL to a path string.
 *
 * ```ts
 *      import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/win32.ts";
 *      fromFileUrl("file:///home/foo"); // "\\home\\foo"
 *      fromFileUrl("file:///C:/Users/foo"); // "C:\\Users\\foo"
 *      fromFileUrl("file://localhost/home/foo"); // "\\\\localhost\\home\\foo"
 * ```
 * @param url of a file URL
 */
export declare function fromFileUrl(url: string | URL): string;
/**
 * Converts a path string to a file URL.
 *
 * ```ts
 *      import { toFileUrl } from "https://deno.land/std@$STD_VERSION/path/win32.ts";
 *      toFileUrl("\\home\\foo"); // new URL("file:///home/foo")
 *      toFileUrl("C:\\Users\\foo"); // new URL("file:///C:/Users/foo")
 *      toFileUrl("\\\\127.0.0.1\\home\\foo"); // new URL("file://127.0.0.1/home/foo")
 * ```
 * @param path to convert to file URL
 */
export declare function toFileUrl(path: string): URL;
