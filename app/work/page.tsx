import Container from "@/components/container";
import { Grid } from "@/components/chakra";
import { Metadata } from "next";
import { cloudinaryUrl } from "@/util/cloudinary";
import { decode } from "@/util/strings";
import RemoteImageLink from "@/components/remoteImageLink";
import { getImages } from "@/util/fetch";

export const metadata: Metadata = {
    title: 'Work'
}

export default async function Work() {
    const images = await getImages()

    return (
        <>
            <Container as='main'>
                <Grid
                    mt={4}
                    gap={4}
                    gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} >
                    {images.map(({ public_id, filename, format, blurDataURL }) => (
                        <RemoteImageLink
                            src={cloudinaryUrl({ public_id, format, transformation: `w_400` })}
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
                </Grid>
            </Container>
        </>
    )
}
