import { Stylesheet } from "./Stylesheet";
import { RankStylesDefinition } from '../definitions/Rank';
import { CanvacordStylesheetOptions } from "../types/types";

class RankStyles extends Stylesheet {
    styles: RankStylesDefinition = {};

    constructor(options?: CanvacordStylesheetOptions) {
        super(options);
        this.name = "RANK";
    }

    define<T extends keyof RankStylesDefinition>(selector: T, properties: RankStylesDefinition[T]) {
        super.define(selector, properties);
        return this;
    }

    defineBulk(styles: RankStylesDefinition) {
        super.defineBulk(styles);
        return this;
    }

    get<T extends keyof RankStylesDefinition>(selector: T): RankStylesDefinition[T] {
        return super.get(selector);
    }

    remove<T extends keyof RankStylesDefinition>(selector: T): boolean {
        return super.remove(selector);
    }

    has<T extends keyof RankStylesDefinition>(selector: T): boolean {
        return super.has(selector);
    }
}

export { RankStyles };