import { BasicStyle, CanvacordStylesheetOptions } from "../types/types";

class CanvacordStylesheet {
    styles: BasicStyle;
    options: CanvacordStylesheetOptions;
    name: string;

    constructor(options?: CanvacordStylesheetOptions) {
        this.options = Object.assign({
            overwrite: true
        }, options);

        this.name = "Stylesheet";
        this.styles = {};
    }

    add(selector: string, properties: any) {
        if (selector in this.styles && !this.options.overwrite) return this;
        this.styles[selector] = properties;
        return this;
    }

    get(selector: string) {
        if (selector in this.styles) return this.styles[selector];
        return {};
    }

    create(styles: BasicStyle) {
        for (const prop of Object.keys(styles)) {
            this.add(prop, styles[prop]);
        }

        return this;
    }

    remove(selector: string) {
        if (selector in this.styles) return delete this.styles[selector];
        return false;
    }

    has(selector: string) {
        return selector in this.styles;
    }

    clear() {
        this.styles = {};
    }

    format(prettier?: boolean) {
        let formatted: string;
        if (prettier) {
            formatted = JSON.stringify(this.styles, null, "  ");
            this.styles = JSON.parse(formatted);
        } else {
            formatted = JSON.stringify(this.styles);
            this.styles = JSON.parse(formatted);
        }

        return formatted;
    }

    toString() {
        return JSON.stringify(this);
    }

    toJSON() {
        return { name: this.name, styles: this.styles as any };
    }
}

export { CanvacordStylesheet as Stylesheet };