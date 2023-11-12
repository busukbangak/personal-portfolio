import React from "react";

type CSSProperties = {
    [key: string]: React.CSSProperties;
};

export default class StyleSheet {
    static create<Styles extends CSSProperties>(styles: Styles): Styles {
        return styles;
    };
};