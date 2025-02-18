// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "../_util/os.js";
export const SEP = isWindows ? "\\" : "/";
export const SEP_PATTERN = isWindows ? /[\\/]+/ : /\/+/;
