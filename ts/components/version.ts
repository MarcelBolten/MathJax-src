/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview  The version of MathJax (used to tell what version a component
 *                was compiled against).
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

declare const PACKAGE_VERSION: string;  // provided by webpack via DefinePlugin

export const VERSION = (
  typeof PACKAGE_VERSION === 'undefined' ?
    //
    //  This will not be included in the webpack version, so only runs in node
    //
    (function () {
      //
      //  Look up the version from the package.json file
      //
      /* tslint:disable-next-line:no-eval */
      const load = eval('require');
      /* tslint:disable-next-line:no-eval */
      const dirname = eval('__dirname');
      const path = load('path');
      return load(path.resolve(dirname, '..', '..', 'package.json')).version;
    })() :
  PACKAGE_VERSION
);
