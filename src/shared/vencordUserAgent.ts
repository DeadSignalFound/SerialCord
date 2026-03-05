/*
 * SerialCord, a Discord client mod
 * Copyright (c) 2026 DeadSignalFound and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import gitHash from "~git-hash";
import gitRemote from "~git-remote";

export { gitHash, gitRemote };

export const VENCORD_USER_AGENT = `SerialCord/${gitHash}${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
