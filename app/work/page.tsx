import Container from "@/components/container";
import { Metadata } from "next";
import { cloudinaryUrl } from "@/util/cloudinary";
import { decode } from "@/util/strings";
import RemoteImageLink from "@/components/remoteImageLink";
import { getImages } from "@/util/fetch";
import ImageGrid from "@/components/imageGrid";

export const metadata: Metadata = {
    title: 'Work'
}

const getWork = getImages('work')

export default async function Work() {
    const images = await getWork()

    return (
        <>
            <Container as='main'>
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
                {/* <Grid
                    mt={4}
                    gap={4}
                    gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} > */}
                {/* </Grid> */}
            </Container>
        </>
    )
}
