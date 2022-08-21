import { type ComponentProps } from 'react';
export default function CodeBlockContainer<T extends 'div' | 'pre'>({ as: As, ...props }: {
    as: T;
} & ComponentProps<T>): JSX.Element;
