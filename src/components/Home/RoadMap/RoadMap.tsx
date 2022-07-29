import React, { useRef } from 'react';
import GsapRoadMap from '../../../lib/animation/gsap/GsapRoadMap';
import Product from './Product/Product';
import * as s from './RoadMap.style';

const RoadMap = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    GsapRoadMap({ sectionRef, scrollRef });

    return (
        <s.Section ref={sectionRef} className="roadmap" id="roadmap">
            <s.Left>
                <s.LeftTitle>RoadMap</s.LeftTitle>
            </s.Left>
            <s.Right ref={scrollRef}>
                {new Array(4).fill(0).map((e, i) => (
                    <Product
                        title="METAVERSE"
                        content="OFFLINE PLACE 간의 경계를 허물며"
                        index={i}
                        key={i}
                    />
                ))}
            </s.Right>
        </s.Section>
    );
};

export default RoadMap;