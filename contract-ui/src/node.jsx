import React from 'react';

// Recursive render function
function renderNode(node, key, isParent) {
    
    if (node.text !== undefined) {
        const style = {
            fontWeight: node.bold ? 'bold' : undefined,
            textDecoration: node.underline ? 'underline' : undefined,
            color: node.color,
        };
        return (
            <span key={key} style={style}>
                {node.text.split('\n').map((line, i, arr) => (
                    <React.Fragment key={`${key}-line-${i}`}>
                        {line}
                        {i < arr.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </span>
        );
    }

    switch (node.type) {
        case 'mention':
            return (
                <span key={key} style={{ backgroundColor: node.color, borderRadius: '5px', color: 'white' }}>
                    {node.children?.map((child, i) => renderNode(child, `${key}-${i}`))}
                </span>
            );
        case 'lic':
        case 'li':
        case 'ul':
        case 'p':
        case 'h1':
        case 'h4':
        case 'clause':
            if (node.children) {
                if (node.type == 'clause') {
                    const hasChildClause = node.children?.some(child => child.type === 'clause');
                    if (hasChildClause) isParent = false 
                        const Tag = 'ol'
                        return (
                            <Tag key={key}>
                                {/* {node.title && <strong>{node.title}</strong>} */}
                                {node.children?.map((child, i) => renderNode(child, `${key}-${i}`))}
                            </Tag>
                        );
                    }
                }
        case 'block':
    const Tag =
        node.type === 'h1' ? 'h1'
            : node.type === 'h4' ? 'h4'
                : node.type === 'ul' ? 'ul'
                    : node.type === 'li' ? 'li'
                        : 'div';
    return (
        <Tag key={key}>
            {/* {node.title && <strong>{node.title}</strong>} */}
            {node.children?.map((child, i) => renderNode(child, `${key}-${i}`))}
        </Tag>
    );
        default:
    return <div key={key}>[Unknown type: {node.type}]</div>;
}
}

// Main component
function DocumentRenderer({ data }) {
    return (
        <div>
            {data.map((block, i) => renderNode(block, `root-${i}`))}
        </div>
    );
}

export default DocumentRenderer;