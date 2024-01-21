import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default function PartnersCarousel() {
    return (
        <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide asd</swiper-slide>
            <swiper-slide>Slide ko</swiper-slide>
            <swiper-slide>Slide 990</swiper-slide>
            <swiper-slide>Slide klklk</swiper-slide>
        </swiper-container>
    )
}