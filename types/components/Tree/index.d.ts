import React from 'react';
interface TreeNodeCommonProps {
    label: string;
}
interface TreeNodeProps extends TreeNodeCommonProps {
    children: Array<TreeNodeProps | TreeEndNodeProps>;
}
interface TreeEndNodeProps extends TreeNodeCommonProps {
    path: string;
}
type TreeProps = {
    data: Array<TreeNodeProps | TreeEndNodeProps>;
    depth?: number;
};
export declare const Tree: React.FC<TreeProps>;
export {};
//# sourceMappingURL=index.d.ts.map