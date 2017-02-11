/**
 * @file react-bem-helper/index.d.ts
 *
 * Created by Zander Otavka on 2/11/17.
 *
 * Typings for react-bem-helper on npm.
 * See https://www.npmjs.com/package/react-bem-helper.
 *
 * @license
 * Copyright (C) 2016  Zander Otavka
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

declare module Bem {
    interface PredicateList {
        [key: string]: boolean | (() => boolean);
    }

    type List = string | string[] | PredicateList;

    interface HelperArguments {
        element?: string;
        modifier?: List;
        modifiers?: List;
        extra?: List;
    }

    interface Helper {
        (element?: string, modifiers?: List, extra?: List): {className: string};
        (args: HelperArguments): {className: string};
    }

    interface HelperConstructorOptions {
        name: string;
        prefix?: string;
        modifierDelimiter?: string;
    }

    interface HelperConstructor {
        new(name: string): Helper;
        new(options: HelperConstructorOptions): Helper;
        (name: string): Helper;
        (options: HelperConstructorOptions): Helper;
    }
}

declare var BEMHelper: Bem.HelperConstructor;
export = BEMHelper;
