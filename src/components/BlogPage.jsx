import React, { useState } from 'react';
import Block from './Block';
import './css/BlogPage.css'
import blocksData from '../data';

function BlogPage({ }) {
    const esnCardBlock = blocksData.find(esnCardBlock => esnCardBlock.id === 3)
    const [index, setIndex] = useState(0)

    return (
        <div className="blog-page">
            <div className="block-container">
                {blocksData.slice(index, index + 2).map(block => (
                    <Block
                        key={block.id}
                        title={block.title}
                        description={block.description}
                        price={block.price}
                        photo={block.photo}
                        date={block.date}
                    />
                ))}
                {esnCardBlock && (
                    <Block
                        key={esnCardBlock.id}
                        title={esnCardBlock.title}
                        description={esnCardBlock.description}
                        price={esnCardBlock.price}
                        photo={esnCardBlock.photo} />
                )}
            </div>
        </div>
    );
}

export default BlogPage;