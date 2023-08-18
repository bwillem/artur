import cloudinary from "@/cloudinary"
import getBase64ImageUrl from "@/util/blurPlaceholder"
import { Grid, GridItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"

/**
 * {project}/{title}
 */

const folder = 'samples/animals'

function Project({ images }) {
    console.log('Images', images)

    return (
        <Grid templateColumns={['1fr', 'repeat(5, 1fr)']} gap={8}>
            <GridItem></GridItem>
        </Grid>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const results = await cloudinary.search
        .expression(`folder:${folder}`)
        .execute()

    const images = results.resources
        .map((x, i) =>
            ({ id: i, ...x }))

    let i = 0
    for (let image of images) {
        const blurDataUrl = await getBase64ImageUrl(image)
        images[0].blurDataUrl = blurDataUrl
        i++
    }

    return {
        props: {
            images,
        },
    }
}

export default Project
