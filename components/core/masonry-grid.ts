'use client';

// Core
import { useRef } from 'react';
import Bricks from 'bricks.js';

type MasonryGridProps = 

export const MasonryGrid = () => {

    const bricks = useRef(Bricks({
        container: ''
    }));
    return (
        <ul>

        </ul>
    )
}