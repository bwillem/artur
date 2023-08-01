import cloudinary from "@/cloudinary"
import { Grid, GridItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"

function Project({ images }) {
    return (
        <Grid templateColumns={['1fr', 'repeat(5, 1fr)']} gap={8}>
            <GridItem></GridItem>
        </Grid>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const images = await cloudinary.search
        .expression(`folder:samples/animals`)
        .execute()

    return {
        props: {
            images,
        },
    }
}

export default Project
