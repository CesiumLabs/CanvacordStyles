export interface TextInterface {
    /** The font color */
    color?: string;
    /** The max width of this text */
    maxWidth?: number;
    /** text align */
    align?: "start" | "end" | "center" | "left" | "right";
    /** Text base line */
    baseLine?: "alphabetic" | "top" | "bottom" | "hanging" | "middle" | "ideographic";
    /** The font size */
    fontSize?: number;
    /** The font style */
    fontStyle?: "italic" | "oblique" | "normal";
    /** The font variant */
    fontVariant?: "normal" | "small-caps";
    /** The font weight */
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    /** The font family */
    fontFamily?: string;
    /** x-axis placement */
    x?: number;
    /** y-axis placement */
    y?: number;
    /** print style */
    fill?: "stroke" | "draw";
}

export interface Stats extends TextInterface {
    /** If this text should be displayed */
    display?: "none" | "visible";
}

export interface AvatarInterface {
    /** If the avatar should be rounded */
    rounded?: boolean;
    /** Border props */
    border?: {
        /** Border width */
        width?: number;
        /** Border color */
        color?: string;
    },
    /** X coordinate */
    x?: number;
    /** Y coordinate */
    y?: number;
    /** Background opacity */
    opacity?: number;
}

export interface BackgroundInterface {
    /** The background type */
    fillType?: "IMAGE" | "COLOR";
    /** Image will be used if background type is set to IMAGE */
    image?: string | Buffer;
    /** Color will be used in background type is set to COLOR */
    color?: string;
    /** Background opacity */
    opacity?: number;
    /** X-axis placement */
    x?: number;
    /** Y-axis placement */
    y?: number;
};

export interface OverlayInterface {
    /** The background overlay type */
    fillType?: "IMAGE" | "COLOR";
    /** Image will be used if background overlay type is set to IMAGE */
    image?: string | Buffer;
    /** Color will be used in background overlay type is set to COLOR */
    color?: string;
    /** Background overlay opacity */
    opacity?: number;
    /** Width of the overlay */
    width?: number;
    /** Height of the overlay */
    height?: number;
    /** X-axis placement */
    x?: number;
    /** Y-axis placement */
    y?: number;
}

export interface RankStylesDefinition {
    /** Avatar styles */
    avatar?: AvatarInterface;

    /** Background styles */
    background?: BackgroundInterface;

    /** The background overlay */
    overlay?: OverlayInterface;

    /** The username text */
    username?: TextInterface;

    /** The discriminator text */
    discriminator?: TextInterface;

    /** The rank text */
    rank?: Stats;

    /** The level text */
    level?: Stats;

    /** The current xp */
    currentXP?: Stats;

    /** The total xp */
    totalXP?: Stats;
}