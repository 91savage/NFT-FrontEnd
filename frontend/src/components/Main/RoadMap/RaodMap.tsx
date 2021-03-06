import React, { useRef } from 'react';
import * as s from './RoadMap.style';

import flag from '../../../assets/images/flag.svg';
import golfBall from '../../../assets/images/ball.svg';
import useViewportState from '../../../lib/hooks/useViewportState';
import GsapRoadMap from '../../../lib/animation/gsap/GsapRoadMap';

interface IRoadMapItem {
    // addToRefs: (el: HTMLDivElement) => void;
    text: string;
}
const RoadMapItem = ({ text }: IRoadMapItem) => {
    return (
        <s.Item>
            <s.ItemContainer>
                <s.Box>{text}</s.Box>
                <s.BallTop>
                    {/* <s.RowLine />
                    <s.VerticalLine />
                    <s.Triangle /> */}
                    <img src={flag} alt="flag" />
                </s.BallTop>
            </s.ItemContainer>
        </s.Item>
    );
};
const RaodMap = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    // GsapRoadMap({ lineRef, ballRef });

    const roadmapRef = useRef<HTMLElement>(null);
    useViewportState(roadmapRef, 'roadmap');

    return (
        <s.Section id="roadmap" ref={roadmapRef} data-scroll-section>
            <s.Title>RoadMap</s.Title>
            <s.Container>
                <s.Line ref={lineRef}>
                    <s.LineBall ref={ballRef} />
                </s.Line>

                <s.Items>
                    <s.Item>&nbsp;</s.Item>
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        // addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                </s.Items>
            </s.Container>
            <s.Ball bg={golfBall} />
        </s.Section>
    );
};

export default RaodMap;
