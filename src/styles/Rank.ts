import { Stylesheet } from "./Stylesheet";
import { RankStylesDefinition } from '../definitions/Rank';
import { CanvacordStylesheetOptions } from "../types/types";

class RankStyles extends Stylesheet {
    styles: RankStylesDefinition = {};

    constructor(options?: CanvacordStylesheetOptions) {
        super(options);
        this.name = "RANK";
    }

    add<T extends keyof RankStylesDefinition>(selector: T, properties: RankStylesDefinition[T]) {
        super.add(selector, properties);
        return this;
    }

    create(styles: RankStylesDefinition) {
        super.create(styles);
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