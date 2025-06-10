import { useEffect, useRef, useState } from 'react';

export const useRevealOnScroll = () => {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {


        const observer = new IntersectionObserver(
            ([entry]) => {

                setVisible(entry.isIntersecting);

            },
            { threshold: 0.2 }
        );

        const el = ref.current;
        if (!el) return;

        if (el) observer.observe(el);

        return () => {
            if(el) observer.unobserve(el);
        }
    }, []);

    return [ref, isVisible];
};
