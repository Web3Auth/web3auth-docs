import lightTheme from "prism-react-renderer/themes/vsLight/index.cjs.js";

export default {
    ...lightTheme,
    styles: [
        ...lightTheme.styles,
        {
            types: ["title"],
            style: {
                color: "#0364ff",
                fontWeight: "bold",
            },
        },
        {
            types: ["parameter"],
            style: {
                color: "#953800",
            },
        },
        {
            types: ["boolean", "rule", "color", "number", "constant", "property"],
            style: {
                color: "#0046b5",
            },
        },
        {
            types: ["atrule", "tag"],
            style: {
                color: "#22863A",
            },
        },
        {
            types: ["script"],
            style: {
                color: "#24292E",
            },
        },
        {
            types: ["operator", "unit", "rule"],
            style: {
                color: "#D73A49",
            },
        },
        {
            types: ["font-matter", "string", "attr-value"],
            style: {
                color: "#C6105F",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#116329",
            },
        },
        {
            types: ["attr-name"],
            style: {
                color: "#0364ff",
            },
        },
        {
            types: ["keyword"],
            style: {
                color: "#CF222E",
            },
        },
        {
            types: ["function"],
            style: {
                color: "#0059e8",
            },
        },
        {
            types: ["selector"],
            style: {
                color: "#6F42C1",
            },
        },
        {
            types: ["variable"],
            style: {
                color: "#E36209",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "#6B6B6B",
            },
        },
    ],
};
