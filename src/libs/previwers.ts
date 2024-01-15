import visit from "unist-util-visit";
import { Node } from "unist";
import { Parent } from "unist";

// TODO カスタムボタンの実装を考える

interface FileButtonNode extends Node {
    type: "button";
    fileName: string;
}

function remarkFileButton() {
    return (tree: Node) => {
        visit(
            tree,
            "text",
            (node: Node, index: number | null, parent: Parent | undefined) => {
                if (!parent || index === null) return;

                // const match = (node?.value as string).match(/^!file\[(.+)\]$/);
                // if (match) {
                //     const fileName = match[1];

                //     const fileButtonNode: FileButtonNode = {
                //         type: "button",
                //         fileName: fileName,
                //         position: node.position,
                //     };

                //     parent.children.splice(index, 1, fileButtonNode);
                // }
            }
        );
    };
}
