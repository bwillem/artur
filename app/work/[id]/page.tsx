import Container from "@/components/container"
import ImageGrid from "@/components/imageGrid"
import RemoteImageLink from "@/components/remoteImageLink"
import Video from "@/components/video"
import { cloudinaryUrl } from "@/util/cloudinary"
import { getImages } from "@/util/fetch"
import { decode } from "@/util/strings"
import 'next-cloudinary/dist/cld-video-player.css';


export default async function Work({ params }) {
    const mediaUrl = `work/${params.id}`
    const get = getImages(mediaUrl)
    const { images, videos } = await get()

    return (
        <Container as='main' py={8}>
            <Video src={`${mediaUrl}/video`} />
            <ImageGrid>
                {images.map(({ public_id, filename, format, blurDataURL }) => (
                    <RemoteImageLink
                        src={cloudinaryUrl({ public_id, format, transformation: `w_934` })}
                        alt={filename}
                        key={filename}
                        blurDataURL={blurDataURL}
                        href={`/work/${filename}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        h='200'
                    >
                        {decode(filename)}
                    </RemoteImageLink>
                ))}
            </ImageGrid>
        </Container>
    )
}
