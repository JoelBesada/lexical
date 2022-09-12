/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {LexicalNode} from '../LexicalNode';

import {ElementNode} from './LexicalElementNode';

export class DEPRECATED_GridNode extends ElementNode {}

export function DEPRECATED_$isGridNode(
  node: LexicalNode | null | undefined,
): node is DEPRECATED_GridNode {
  return node instanceof DEPRECATED_GridNode;
}
