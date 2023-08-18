import cloudinary from "@/cloudinary";
import Container from "@/components/container";
import Header from "@/components/header";
import getBase64ImageUrl from "@/util/blurPlaceholder";
import { Grid } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { cloudinaryUrl } from "@/util/cloudinary";
import RemoteImageLink from "../../components/remoteImageLink";
import { decode } from "@/util/strings";

export default function Work({ images }) {
    return (
        <>
            <Head>
                <title>Artur Gadja | Work</title>
                <meta name="description" content="Artur Gadja | Work" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container as='main'>
                <Grid
                    mt={4}
                    gap={4}
                    gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} >
                    {images.map(({ id, public_id, filename, format, blurDataURL }) => (
                        <RemoteImageLink
                            src={cloudinaryUrl({ public_id, format, transformation: `w_400` })}
                            alt={id}
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
