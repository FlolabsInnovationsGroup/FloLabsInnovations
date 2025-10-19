"use client";

import MainLayout from "../../components/MainLayout";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AnimalVocalizationPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <MainLayout>
            <div className="bg-black text-white min-h-screen py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Header Section */}
                    <header className="mb-20 relative w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-64 md:h-80 mb-6">
                            {/* Background Image */}
                            {isMounted && (
                                <Image 
                                    src="/images/catdog.png" 
                                    alt="Animal Vocalization" 
                                    className="rounded-lg"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            )}

                            {/* Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
                        </div>

                        {/* Title Below the Image */}
                        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
                            Decoding the Language of Cats and Dogs: Flomad's New Frontier
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed mt-4">
                            Understanding how animals communicate has fascinated humans for centuries. At Flomad, we're taking a bold step into this field with a focus on cats and dogs—the companions we share our lives with daily. Our project aims to unlock the mysteries behind their barks, meows, purrs, and growls to strengthen the connection between humans and their pets.
                        </p>
                    </header>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                We're leveraging cutting-edge AI and machine learning technologies to analyze and interpret animal vocalizations. Our research combines acoustic analysis, behavioral studies, and deep learning to create a comprehensive understanding of pet communication.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Key Research Areas</h2>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li>
                                    <strong>Vocalization Pattern Analysis:</strong> Studying the acoustic patterns in different types of barks, meows, and other vocalizations.
                                </li>
                                <li>
                                    <strong>Emotional Context Recognition:</strong> Understanding how emotions influence pet vocalizations.
                                </li>
                                <li>
                                    <strong>Cross-Species Communication:</strong> Developing tools to facilitate better understanding between humans and their pets.
                                </li>
                                <li>
                                    <strong>Real-time Translation:</strong> Creating technology that can interpret pet vocalizations in real-time.
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Potential Applications</h2>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li>
                                    <strong>Pet Healthcare:</strong> Early detection of health issues through changes in vocalization patterns.
                                </li>
                                <li>
                                    <strong>Behavioral Understanding:</strong> Better interpretation of pet needs and emotions.
                                </li>
                                <li>
                                    <strong>Training Assistance:</strong> More effective pet training through improved communication.
                                </li>
                                <li>
                                    <strong>Veterinary Support:</strong> Enhanced diagnostic tools for veterinary professionals.
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Research Partners</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                We're proud to collaborate with leading organizations in animal communication research:
                            </p>

                            <div className="mt-20 flex justify-center items-center space-x-16">
                                {isMounted && (
                                    <>
                                        <a
                                            href="https://www.earthspecies.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Visit Earth Species Project (ESP)"
                                            className="relative w-40 h-40"
                                        >
                                            <Image
                                                src="/images/esp.png"
                                                alt="ESP Logo"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </a>
                                        <a
                                            href="https://www.projectceti.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Visit Project CETI"
                                            className="relative w-40 h-40"
                                        >
                                            <Image
                                                src="/images/ceti.png"
                                                alt="CETI Logo"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </a>
                                        <a
                                            href="https://www.zoolingua.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Visit Zoolingua"
                                            className="relative w-40 h-40"
                                        >
                                            <Image
                                                src="/images/zoolinga.png"
                                                alt="Zoolingua Logo"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </a>
                                    </>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
