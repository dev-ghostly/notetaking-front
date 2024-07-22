// create type 
export type title = {
    _id: string;
    type: "h1" | "h2" | "h3";
    content: string;
};

export type paragraph = {
    _id: string;
    type: "p";
    content: string;
};

export type image = {
    _id: string;
    type: "img";
    content: string;
};

export type block = title | paragraph | image;