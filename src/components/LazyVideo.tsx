"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LazyVideoProps {
    src: string;
    poster: string;
    /** Largeur/hauteur intrinsèques du poster (ratio de réservation d'espace). */
    posterWidth: number;
    posterHeight: number;
    className?: string;
}

/**
 * Vidéo différée : n'est téléchargée que lorsque son conteneur approche
 * du viewport (IntersectionObserver). Le poster réserve l'espace,
 * donc aucun décalage de mise en page.
 */
export function LazyVideo({
    src,
    poster,
    posterWidth,
    posterHeight,
    className,
}: LazyVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Filet de sécurité : si IntersectionObserver est absent ou muet
        // (vieux navigateur, webview), la vidéo se charge quand même après
        // ce délai — hors du chemin critique de chargement initial.
        const fallbackTimer = setTimeout(() => setIsVisible(true), 5000);

        if (typeof IntersectionObserver === "undefined") {
            return () => clearTimeout(fallbackTimer);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setIsVisible(true);
                    clearTimeout(fallbackTimer);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => {
            clearTimeout(fallbackTimer);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {isVisible ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={poster}
                    className="w-full h-auto aspect-video object-cover"
                >
                    <source src={src} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
            ) : (
                <Image
                    src={poster}
                    alt=""
                    width={posterWidth}
                    height={posterHeight}
                    className="w-full h-auto aspect-video object-cover"
                    aria-hidden="true"
                />
            )}
        </div>
    );
}
