import cloudinary from "@/cloudinary";
import Container from "@/components/container";
import getBase64ImageUrl from "@/util/blurPlaceholder";
import { Grid } from "@chakra-ui/react";
import { GetStaticProps, Metadata } from "next";
import { cloudinaryUrl } from "@/util/cloudinary";
import { decode } from "@/util/strings";
import RemoteImageLink from "@/components/remoteImageLink";

export const metaData: Metadata = {
    title:'Work'
}

export default function Work({ images }) {
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

const folder = 'work'

export const getStaticProps: GetStaticProps = async () => {
    const results = await cloudinary.search
        .expression(`folder:${folder}`)
        .execute()

    const images = results.resources

    let i = 0

    for (let image of images) {
        const blurDataURL = await getBase64ImageUrl(image)
        images[i].blurDataURL = blurDataURL
        i++
    }

    return {
        props: {
            images,
        },
    }
}
