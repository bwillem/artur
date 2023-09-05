'use client'
import { CldVideoPlayer } from "next-cloudinary";

export default function Video({ src }) {
    return (
        <CldVideoPlayer
            width='1312px'
            height='auto'
            src={src}
        />
    )
}
